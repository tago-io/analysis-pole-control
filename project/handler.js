
const TagoAnalysis     = require('tago/analysis');
const TagoDevice       = require('tago/device');
const TagoUtils        = require('tago/utils');
const TagoAccount      = require('tago/account');
const TagoServices     = require('tago/services');

const services = [
  require('./services/pole/'), // get the index.js on "services/pole/" folder
];

async function handler(context, scope) {
  context.log('Running');

  // Convert the environment default format [{ key: 'config_token', value: 'xxx' }] to JSON { config_token: xxx }
  const environment            = TagoUtils.env_to_obj(context.environment);
  if (!environment.config_token) throw 'Missing config_token environment var';
  else if (!environment.account_token) throw 'Missing account_token environment var';
  else if (!environment.pole_dash_id) throw 'Missing pole_dash_id environment var';

  // Create all services objects needed.
  const config_dev     = new TagoDevice(environment.config_token);
  const account        = new TagoAccount(environment.account_token);
  context.notification = new TagoServices(context.token).Notification;
  context.environment = environment;

  // check if any of the services in the service array have functions to the variables sent in the scope.
  const service = services.find(x => x.checkType(scope));
  if (service) {
    // run the service.
    await service(context, account, config_dev, scope);
  }
}

// Just a function to get any error and output to the console on TagoIO.
async function startAnalysis(context, scope) {
  await handler(context, scope).then(() => {
    context.log('Script end.');
  }).catch((e) => {
    console.log(e);
    context.log(e.message || JSON.stringify(e));
  });
}

module.exports = new TagoAnalysis(startAnalysis, 'your analysis token');
