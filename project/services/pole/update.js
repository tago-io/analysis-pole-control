const TagoAccount = require('tago/account');
const TagoDevice  = require('tago/device');
const TagoUtils   = require('tago/utils');
const validation  = require('../../lib/validation');
const updateDash  = require('./updateDash');

async function removeTruck(context, account = new TagoAccount(), config_dev, scope) {
  const new_location = scope.find(x => x.variable === 'edit_location');

  const token = await TagoUtils.getTokenByName(account, new_location.origin);
  const device = new TagoDevice(token.value);

  const validate = validation('edit_location_validate', device);
  const location = new_location.value.split(';');
  if (Number(location[1]) > 180 || Number(location[1]) < -180) {
    validate('Wrong longitude. Value must be -180 < n < 180.');
    throw '<New Pole> Wrong  Longitude';
  } else if (Number(location[0]) > 90 || Number(location[0]) < -90) {
    validate('Wrong latitude. Value must be -90 < n < 90.');
    throw '<New Pole> Wrong Latitude ';
  }
  
  await device.insert({
    variable: 'location',
    value: new_location.value,
    location: { lat: Number(location[0]), lng: Number(location[1]) },
    serie: new_location.origin,
  });

  await updateDash(context, account, config_dev);
  validate('Pole Location succesfully updated');
}

module.exports = removeTruck;
