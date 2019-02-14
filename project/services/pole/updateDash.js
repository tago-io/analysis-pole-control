const groupData = require('../../lib/groupData');

module.exports = async (context, account, config_dev) => {
  await new Promise(done => setTimeout(done, 900));
  const all_poles = await config_dev.find({ variables: ['pole_name', 'pole_device', 'pole_dashid'], qty: 9999 }).then(groupData);
  console.log(all_poles);
  const all_devices = await account.devices.list(1, ['id', 'bucket', 'tags'], { tags: [{ key: 'pole_system', value: 'Pole' }] }, 999);
  console.log(all_devices);

  const dash_ids = context.environment.dash_summary.split('/');
  const widget_info = await account.dashboards.widgets.info(dash_ids[0], dash_ids[1]);
  widget_info.data = [];
  widget_info.display.map_labels = {};
  widget_info.display.map_icons = {};
  widget_info.display.vars_labels = {};
  widget_info.display.vars_images = {};
  widget_info.display.vars_url = {};

  for (const pole of all_poles) {
    const device = all_devices.find(x => x.id === pole.pole_device);
    if (!device) continue;

    widget_info.data.push({
      bucket: device.bucket,
      origin: device.id,
      timezone: 'America/Port_of_Spain',
      variables: [
        'location',
      ],
      qty: 1,
      start_date: '10 years',
    });

    widget_info.display.map_labels[`${device.id}`] = `Pole ${pole.pole_name}`;
    widget_info.display.map_icons[`${device.id}`] = {
      color: '#009051',
      css_class: 'flaticon flaticon-pin56',
    };
    widget_info.display.vars_images[`${device.id}location`] = pole.pole_img || '';
    widget_info.display.vars_labels[`${device.id}location`] = `${pole.pole_name}`;
    widget_info.display.vars_url[`${device.id}location`] = {
      url: `https://admin.tago.io/dashboard/${pole.pole_dashid}`,
      alias: 'Go to Dashboard',
    };
  }

  account.dashboards.widgets.edit(dash_ids[0], dash_ids[1], { data: widget_info.data, display: widget_info.display }).then(console.log, console.log);
};
