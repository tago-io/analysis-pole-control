const TagoAccount      = require('tago/account');
const TagoDevice       = require('tago/device');
const TagoUtils        = require('tago/utils');
const checkImage       = require('../../lib/checkImage');
const validation       = require('../../lib/validation');
const updateDash       = require('./updateDash');

async function installDashboard(context, account = new TagoAccount(), pole_info) {
  let dash = await account.dashboards.info(context.environment.pole_dash_id).catch(() => null);
  if (!dash) throw 'Dash not found';

  const widget_list = await Promise.all(dash.arrangement.map(x => account.dashboards.widgets.info(dash.id, x.widget_id)));

  dash = JSON.stringify(dash);
  dash = dash.replace(/<poleid>/g, String(pole_info.id)).replace(/5c645733f0dd86001daac945/g, pole_info.origin)
    .replace(/5c645733f0dd86001daac946/g, pole_info.bucket)
    .replace(/<polename>/g, pole_info.name);
  dash = JSON.parse(dash);

  dash.visible = true;
  const dashboard = await account.dashboards.create(dash);

  for (let x of widget_list) {
    x = JSON.stringify(x);
    x = x.replace(/<poleid>/g, String(pole_info.id))
      .replace(/5c645733f0dd86001daac945/g, pole_info.origin)
      .replace(/5c645733f0dd86001daac946/g, pole_info.bucket)
      .replace(/<polename>/g, pole_info.name)
      .replace(/_poleid_/g, String(pole_info.id));
    x = JSON.parse(x);
    delete x.dashboard;

    const widget = await account.dashboards.widgets.create(dashboard.dashboard, x);
    dash.arrangement.find(y => y.widget_id === x.id).widget_id = widget.widget;
  }

  await account.dashboards.edit(dashboard.dashboard, { arrangement: dash.arrangement });
  return dashboard.dashboard;
}

async function installDevice(account = new TagoAccount(), pole_info) {
  const token = await TagoUtils.getTokenByName(account, pole_info.device);
  const pole_device = new TagoDevice(token);
  const device_info = await pole_device.info();

  device_info.tags.push({ key: 'pole_system', value: 'Pole' });
  await account.devices.edit(pole_info.device, { tags: device_info.tags });
  // const device = await account.devices.create({
  //   name: `Dispostivo ${pole_info.name}`,
  //   tags: [
  //     { key: 'pole', value: pole_info.name },
  //     { key: 'pole_system', value: 'Pole' },
  //   ],
  // });

  // const pole_device = new TagoDevice(device.token);
  // const device_info = await pole_device.info();

  // await account.devices.tokenCreate(device.device_id, {
  //   name: 'GPS Token',
  //   serie_number: pole_info.gps_eui,
  //   expire_time: 'never',
  //   permission: 'full',
  // }).catch(() => {
  //   account.devices.delete(device.device_id);
  //   account.buckets.delete(device_info.bucket.id);
  //   throw 'Já existe um dispositivo registrado com este EUI.'
  // });

  await account.actions.create({
    name: `Pole ${pole_info.name}`,
    description: 'Action to trigger analysis when pitch parameter arrives.',
    tags: [{ key: 'pole_id', value: pole_info.id }],
    active: true,
    type: 'script',
    script: '5c647b831f3c1c001d05b8dc',
    topic: 'home/office/temperature',
    payload: '{\n      "variable": "$VARIABLE$",\n      "unit": "$UNIT$",\n      "value": "$VALUE$",\n      "time": "$TIME$",\n      "location": "$LOCATION$"\n    }',
    bucket: '',
    lock: false,
    when_set_bucket: device_info.bucket.id,
    when_set_origin: device_info.id,
    when_set_variable: 'pitch',
    when_set_condition: '*',
    when_set_value: '',
    when_reset_bucket: '',
    when_reset_origin: '',
    when_reset_variable: '',
    when_reset_condition: '',
    when_reset_type: '',
    when_reset_value: '',
  });

  return { device_token: token, pole_device, device_info };
}

module.exports = async (context, account = new TagoAccount(), config_dev = new TagoDevice(), scope) => {
  const validate = validation('new_pole_validation', config_dev);

  const pole_name = scope.find(x => x.variable === 'new_pole_name');
  const pole_device_id = scope.find(x => x.variable === 'new_pole_device');
  const pole_maxdegree = scope.find(x => x.variable === 'new_pole_maxdegree');
  const pole_material = scope.find(x => x.variable === 'new_pole_material');
  const pole_location = scope.find(x => x.variable === 'new_pole_location');

  const location = pole_location.value.split(';');

  let pole_img;
  try {
    pole_img = checkImage(account, scope.find(x => x.variable === 'new_pole_image'));
  } catch (e) {
    validate(e, 'danger');
    throw e;
  }

  if (!pole_name) {
    validate('You need to enter the Pole Name.');
    throw '<New Pole> Missing GPS EUI and Pole ID';
  } else if (location.length < 2 || location.length > 2) {
    validate('Wrong latitude and longitude. Please enter Latitude;Longitude');
    throw '<New Pole> Wrong Latitude Longitude';
  } else if (Number(location[1]) > 180 || Number(location[1]) < -180) {
    validate('Wrong longitude. Value must be -180 < n < 180.');
    throw '<New Pole> Wrong  Longitude';
  } else if (Number(location[0]) > 90 || Number(location[0]) < -90) {
    validate('Wrong latitude. Value must be -90 < n < 90.');
    throw '<New Pole> Wrong Latitude ';
  }

  validate('Registering Pole. Please wait!', 'warning');
  const pole_info = {
    id: String(new Date().getTime()),
    origin: '',
    bucket: '',
    device: pole_device_id.value,
    name: pole_name.value,
    img: pole_img,
  };

  const { device_token, pole_device, device_info } = await installDevice(account, pole_info).catch((e) => { validate(e, 'danger'); throw e; });
  pole_info.origin = device_info.id;
  pole_info.bucket = device_info.bucket.id;
  pole_info.id     = pole_info.origin;

  // const config_info = await config_dev.info();
  const dash_id = await installDashboard(context, account, pole_info);

  const serie = pole_info.origin;

  await config_dev.insert([{
    variable: 'pole_id',
    value: pole_info.origin,
    serie,
  }, {
    variable: 'pole_name',
    value: pole_info.name,
    serie,
  }, {
    variable: 'pole_token',
    value: device_token,
    serie,
  }, {
    variable: 'pole_device',
    value: pole_info.origin,
    serie,
  }, {
    variable: 'pole_dashid',
    value: dash_id,
    serie,
  }, {
    variable: 'pole_img',
    value: pole_img,
    serie,
  }]);


  pole_device.insert([{
    variable: 'pole_name',
    value: pole_info.name,
    serie,
  }, {
    variable: 'pole_token',
    value: device_token,
    serie,
  }, {
    variable: 'pole_dashid',
    value: dash_id,
    serie,
  }, {
    variable: 'maxdegree',
    value: pole_maxdegree.value,
    serie,
  }, {
    variable: 'material_type',
    value: pole_material.value,
    serie,
  }, {
    variable: 'location',
    value: pole_location.value,
    location: { lat: Number(location[0]), lng: Number(location[1]) },
    serie,
  }, {
    variable: 'edit_location',
    value: pole_location.value,
    serie,
  }]);

  const dash_ids = context.environment.dash_summary.split('/');
  context.notification.send('refresh', 'dashboard', dash_ids[0]);
  validate('The Pole was succesfully registered!', 'success');
  updateDash(context, account, config_dev);
};
