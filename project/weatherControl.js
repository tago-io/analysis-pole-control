
const TagoAnalysis = require('tago/analysis');
const TagoDevice   = require('tago/device');
const TagoUtils    = require('tago/utils');
const moment       = require('moment-timezone');
const axios        = require('axios');

async function getCityKey(api_key, latitude, longitude) {
  const route = {
    url: 'http://dataservice.accuweather.com/locations/v1/cities/geoposition/search',
    method: 'get',
    params: {
      apikey: api_key,
      q: `${latitude},${longitude}`,
    },
  };
  const req = await axios(route);
  const location = req.data;

  return location.Key;
}

async function getWeather(api_key, city_key, device) {
  const url = `http://dataservice.accuweather.com/currentconditions/v1/${city_key}?apikey=${api_key}&language=pt-BR&details=true`;
  const req = await axios.get(url);
  const weather = req.data[0];
  const serie = weather.EpochTime;
  const time = moment().format('YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
  const tagodata = [{
    variable: 'temperature',
    value: weather.Temperature.Metric.Value,
    unit: '°C',
    serie,
    time,
  }, {
    variable: 'humidity',
    value: weather.RelativeHumidity,
    unit: '%',
    serie,
    time,
  }, {
    variable: 'wind',
    value: weather.Wind.Speed.Metric.Value,
    unit: 'km/h',
    serie,
    time,
  }];

  device.insert(tagodata).then(console.log);
}

async function UpdateDeviceWeather(api_key, token) {
  const device = new TagoDevice(token);

  let [location] = await device.find({ variable: 'location', qty: 1 });
  if (!location) return;

  location = location.location.coordinates;
  const city_key = await getCityKey(api_key, location[1], location[0]);

  await getWeather(api_key, city_key, device);
}

async function handler(context) {
  context.log('Running');

  const environment = TagoUtils.env_to_obj(context.environment);
  if (!environment.config_token) throw 'Missing config_token environment var';

  const config_dev = new TagoDevice(environment.config_token);

  const all_devices = await config_dev.find({ variable: 'pole_token', qty: 999 });
  all_devices.forEach(x => UpdateDeviceWeather(environment.api_key, x.value));
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
