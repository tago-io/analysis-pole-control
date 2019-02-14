const newPole = require('./register');
const removePole = require('./remove');
const updatePole = require('./update');

function checkType(scope) {
  if (scope.find(x => x.variable.includes('new_pole'))) return 'new_pole';
  else if (scope.find(x => x.variable === 'pole_name') && scope.find(x => x.variable === 'pole_device')) return 'rem_pole';
  else if (scope.find(x => x.variable === 'edit_location')) return 'edit_pole';
}

async function controller(context, account, config_dev, scope) {
  const type = checkType(scope);
  if (type === 'new_pole') await newPole(context, account, config_dev, scope);
  else if (type === 'rem_pole') await removePole(context, account, config_dev, scope);
  else if (type === 'edit_pole') await updatePole(context, account, config_dev, scope);
}

controller.checkType = checkType;
module.exports = controller;
