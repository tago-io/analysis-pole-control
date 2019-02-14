const TagoAccount = require('tago/account');
const TagoDevice  = require('tago/device');
const updateDash  = require('./updateDash');

async function removeTruck(context, account = new TagoAccount(), config_dev, scope) {
  const serie = scope[0].serie;

  const [dashboard, token] = await config_dev.find({ variables: ['pole_dashid', 'pole_token'], serie, qty: 99 });
  await config_dev.remove({ serie, qty: 999 });
  await account.dashboards.delete(dashboard.value).catch(console.log);

  const actions = await account.actions.list(1, ['id', 'name'], { tags: [{ key: 'pole_id', value: scope[0].serie }] }, 100);
  actions.forEach(x => account.actions.delete(x.id));
  // const dev_info = await new TagoDevice(token.value).info();
  // await account.devices.delete(dev_info.id).catch(console.log);
  // await account.buckets.delete(dev_info.bucket.id).catch(console.log);


  const dash_ids = context.environment.dash_summary.split('/');
  context.notification.send('refresh', 'dashboard', dash_ids[0]);
  updateDash(context, account, config_dev);
}

module.exports = removeTruck;
