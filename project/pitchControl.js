
const TagoAnalysis = require('tago/analysis');
const TagoDevice   = require('tago/device');
const TagoUtils    = require('tago/utils');
const TagoAccount  = require('tago/account');
const TagoServices = require('tago/services');

async function SendNotification(context, account, device, title, message) {
  const notification = new TagoServices(context.token).email;

  const [dashboard] = await device.find({ variable: 'pole_dashid', qty: 1 });

  await notification.send('Pitch Alert', 'Pitch is above 20.');
  await notification.send(title, message, dashboard.value).then(context.log, context.log);
}

async function handler(context, scope) {
  context.log('Running');
  if (!scope[0]) throw 'Scope is missing'; // doesn't need to run if scope[0] is null

  const environment = TagoUtils.env_to_obj(context.environment);
  if (!environment.account_token) throw 'Missing account_token environment var';

  const pitch = scope.find(x => x.variable === 'pitch');
  const account = new TagoAccount(environment.account_token);

  const token = await TagoUtils.getTokenByName(account, pitch.origin);
  const device = new TagoDevice(token);

  let [max_degree, last_report] = await device.find({ variables: ['maxdegree', 'last_report'], qty: 1 });
  max_degree = Number(max_degree.value);
  last_report = last_report ? last_report.value : false;

  if (max_degree < pitch.value) {
    if (last_report) return;

    device.insert({ variable: 'last_report', value: true });
    const [pole_name] = await device.find({ variable: 'pole_name', qty: 1 });
    await SendNotification(context, account, device, 'Tilt Angle Alert', `Attention: The pole ${pole_name.value} is tilted ${pitch.value} degrees`);
  } else {
    if (!last_report) return;

    device.insert({ variable: 'last_report', value: false });
    const [pole_name] = await device.find({ variable: 'pole_name', qty: 1 });
    await SendNotification(context, account, device, 'Tilt Angle Recovered', `The pole ${pole_name.value} tilted normalized at ${pitch.value} degrees`);
  }
}

async function startAnalysis(context, scope) {
  await handler(context, scope).then(() => {
    context.log('Script end.');
  }).catch((e) => {
    console.log(e);
    context.log(e.message || JSON.stringify(e));
  });
}
module.exports = new TagoAnalysis(startAnalysis, 'your analysis token');
