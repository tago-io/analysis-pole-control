/*!
 * @tago-builder
 * Tago (https://tago.io/)
 * Tago Builder V2.2.3 (https://git.io/vhEW5)
 * 
 * Generated at: 1551289389989 (Wed Feb 27 2019 14:43:09 GMT-0300 (Brasilia Standard Time))
 * Machine     : MacBook-Pro-3.local - darwin
 * 
 */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./project/handler.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./project/handler.js":
/*!****************************!*\
  !*** ./project/handler.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nconst TagoAnalysis     = __webpack_require__(/*! tago/analysis */ \"tago/analysis\");\nconst TagoDevice       = __webpack_require__(/*! tago/device */ \"tago/device\");\nconst TagoUtils        = __webpack_require__(/*! tago/utils */ \"tago/utils\");\nconst TagoAccount      = __webpack_require__(/*! tago/account */ \"tago/account\");\nconst TagoServices     = __webpack_require__(/*! tago/services */ \"tago/services\");\n\nconst services = [\n  __webpack_require__(/*! ./services/pole/ */ \"./project/services/pole/index.js\"), // get the index.js on \"services/pole/\" folder\n];\n\nasync function handler(context, scope) {\n  context.log('Running');\n\n  // Convert the environment default format [{ key: 'config_token', value: 'xxx' }] to JSON { config_token: xxx }\n  const environment            = TagoUtils.env_to_obj(context.environment);\n  if (!environment.config_token) throw 'Missing config_token environment var';\n  else if (!environment.account_token) throw 'Missing account_token environment var';\n  else if (!environment.pole_dash_id) throw 'Missing pole_dash_id environment var';\n\n  // Create all services objects needed.\n  const config_dev     = new TagoDevice(environment.config_token);\n  const account        = new TagoAccount(environment.account_token);\n  context.notification = new TagoServices(context.token).Notification;\n  context.environment = environment;\n\n  // check if any of the services in the service array have functions to the variables sent in the scope.\n  const service = services.find(x => x.checkType(scope));\n  if (service) {\n    // run the service.\n    await service(context, account, config_dev, scope);\n  }\n}\n\n// Just a function to get any error and output to the console on TagoIO.\nasync function startAnalysis(context, scope) {\n  await handler(context, scope).then(() => {\n    context.log('Script end.');\n  }).catch((e) => {\n    console.log(e);\n    context.log(e.message || JSON.stringify(e));\n  });\n}\n\nmodule.exports = new TagoAnalysis(startAnalysis, 'a97fe159-11c0-4fc7-bc5a-3287cfcc1dc8');\n\n\n//# sourceURL=webpack:///./project/handler.js?");

/***/ }),

/***/ "./project/lib/checkImage.js":
/*!***********************************!*\
  !*** ./project/lib/checkImage.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const path = __webpack_require__(/*! path */ \"path\");\n\nmodule.exports = (account, picture) => {\n  picture = picture && picture.metadata ? picture.metadata.file : null;\n\n  if (!picture) {\n    picture = {\n      url: 'https://api.tago.io/file/5b3e62c766eac70001ce7e38/logo.jpg',\n    };\n  } else if (!['.jpeg', '.jpg', '.gif', '.png'].includes(path.extname(picture.url))) {\n    account.files.delete([picture.path]);\n    throw 'The Pole Image must be .jpeg, .gif or .png.';\n  }\n};\n\n\n//# sourceURL=webpack:///./project/lib/checkImage.js?");

/***/ }),

/***/ "./project/lib/groupData.js":
/*!**********************************!*\
  !*** ./project/lib/groupData.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function groupData(variables, groupBy = 'serie', valueOnly = true) {\n  if (valueOnly) {\n    return Object.values(variables.reduce((pre, cur) => {\n      (pre[cur[groupBy]] = {\n        ...pre[cur[groupBy]],\n        ...{\n          ...{\n            [cur.variable]: cur.value,\n            origin: cur.origin,\n            ...(cur[groupBy] ? { [groupBy]: cur[groupBy] } : {}),\n          },\n        },\n      });\n      return pre;\n    }, {}));\n  }\n\n  return Object.values(variables.reduce((pre, cur) => {\n    (pre[cur[groupBy]] = {\n      ...pre[cur[groupBy]],\n      ...{\n        ...{\n          [cur.variable]: {\n            ...{ value: cur.value, id: cur.id, time: cur.time },\n            ...(cur.metadata ? { metadata: cur.metadata } : {}),\n            ...(cur.location ? { location: cur.location } : {}),\n          },\n          origin: cur.origin,\n          ...(cur.serie ? { serie: cur.serie } : {}),\n        },\n      },\n    });\n    return pre;\n  }, {}));\n}\n\nmodule.exports = groupData;\n\n//# sourceURL=webpack:///./project/lib/groupData.js?");

/***/ }),

/***/ "./project/lib/validation.js":
/*!***********************************!*\
  !*** ./project/lib/validation.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function validation(validation_var, device) {\n  return function _(message, type) {\n    if (!message || !type) throw 'Missing message or type';\n    device.insert({\n      variable: validation_var,\n      value: message,\n      metadata: {\n        type,\n      },\n    });\n\n    return message;\n  };\n}\n\n//# sourceURL=webpack:///./project/lib/validation.js?");

/***/ }),

/***/ "./project/services/pole/index.js":
/*!****************************************!*\
  !*** ./project/services/pole/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const newPole = __webpack_require__(/*! ./register */ \"./project/services/pole/register.js\");\nconst removePole = __webpack_require__(/*! ./remove */ \"./project/services/pole/remove.js\");\nconst updatePole = __webpack_require__(/*! ./update */ \"./project/services/pole/update.js\");\n\nfunction checkType(scope) {\n  if (scope.find(x => x.variable.includes('new_pole'))) return 'new_pole';\n  else if (scope.find(x => x.variable === 'pole_name') && scope.find(x => x.variable === 'pole_device')) return 'rem_pole';\n  else if (scope.find(x => x.variable === 'edit_location')) return 'edit_pole';\n}\n\nasync function controller(context, account, config_dev, scope) {\n  const type = checkType(scope);\n  if (type === 'new_pole') await newPole(context, account, config_dev, scope);\n  else if (type === 'rem_pole') await removePole(context, account, config_dev, scope);\n  else if (type === 'edit_pole') await updatePole(context, account, config_dev, scope);\n}\n\ncontroller.checkType = checkType;\nmodule.exports = controller;\n\n\n//# sourceURL=webpack:///./project/services/pole/index.js?");

/***/ }),

/***/ "./project/services/pole/register.js":
/*!*******************************************!*\
  !*** ./project/services/pole/register.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const TagoAccount      = __webpack_require__(/*! tago/account */ \"tago/account\");\nconst TagoDevice       = __webpack_require__(/*! tago/device */ \"tago/device\");\nconst TagoUtils        = __webpack_require__(/*! tago/utils */ \"tago/utils\");\nconst checkImage       = __webpack_require__(/*! ../../lib/checkImage */ \"./project/lib/checkImage.js\");\nconst validation       = __webpack_require__(/*! ../../lib/validation */ \"./project/lib/validation.js\");\nconst updateDash       = __webpack_require__(/*! ./updateDash */ \"./project/services/pole/updateDash.js\");\n\nasync function installDashboard(context, account = new TagoAccount(), pole_info) {\n  let dash = await account.dashboards.info(context.environment.pole_dash_id).catch(() => null);\n  if (!dash) throw 'Dash not found';\n\n  const widget_list = await Promise.all(dash.arrangement.map(x => account.dashboards.widgets.info(dash.id, x.widget_id)));\n\n  dash = JSON.stringify(dash);\n  dash = dash.replace(/<poleid>/g, String(pole_info.id)).replace(/5c645733f0dd86001daac945/g, pole_info.origin)\n    .replace(/5c645733f0dd86001daac946/g, pole_info.bucket)\n    .replace(/<polename>/g, pole_info.name);\n  dash = JSON.parse(dash);\n\n  dash.visible = true;\n  const dashboard = await account.dashboards.create(dash);\n\n  for (let x of widget_list) {\n    x = JSON.stringify(x);\n    x = x.replace(/<poleid>/g, String(pole_info.id))\n      .replace(/5c645733f0dd86001daac945/g, pole_info.origin)\n      .replace(/5c645733f0dd86001daac946/g, pole_info.bucket)\n      .replace(/<polename>/g, pole_info.name)\n      .replace(/_poleid_/g, String(pole_info.id));\n    x = JSON.parse(x);\n    delete x.dashboard;\n\n    const widget = await account.dashboards.widgets.create(dashboard.dashboard, x);\n    dash.arrangement.find(y => y.widget_id === x.id).widget_id = widget.widget;\n  }\n\n  await account.dashboards.edit(dashboard.dashboard, { arrangement: dash.arrangement });\n  return dashboard.dashboard;\n}\n\nasync function installDevice(account = new TagoAccount(), pole_info) {\n  const token = await TagoUtils.getTokenByName(account, pole_info.device);\n  const pole_device = new TagoDevice(token);\n  const device_info = await pole_device.info();\n\n  device_info.tags.push({ key: 'pole_system', value: 'Pole' });\n  await account.devices.edit(pole_info.device, { tags: device_info.tags });\n  // const device = await account.devices.create({\n  //   name: `Dispostivo ${pole_info.name}`,\n  //   tags: [\n  //     { key: 'pole', value: pole_info.name },\n  //     { key: 'pole_system', value: 'Pole' },\n  //   ],\n  // });\n\n  // const pole_device = new TagoDevice(device.token);\n  // const device_info = await pole_device.info();\n\n  // await account.devices.tokenCreate(device.device_id, {\n  //   name: 'GPS Token',\n  //   serie_number: pole_info.gps_eui,\n  //   expire_time: 'never',\n  //   permission: 'full',\n  // }).catch(() => {\n  //   account.devices.delete(device.device_id);\n  //   account.buckets.delete(device_info.bucket.id);\n  //   throw 'Já existe um dispositivo registrado com este EUI.'\n  // });\n\n  await account.actions.create({\n    name: `Pole ${pole_info.name}`,\n    description: 'Action to trigger analysis when pitch parameter arrives.',\n    tags: [{ key: 'pole_id', value: pole_info.id }],\n    active: true,\n    type: 'script',\n    script: '5c647b831f3c1c001d05b8dc',\n    topic: 'home/office/temperature',\n    payload: '{\\n      \"variable\": \"$VARIABLE$\",\\n      \"unit\": \"$UNIT$\",\\n      \"value\": \"$VALUE$\",\\n      \"time\": \"$TIME$\",\\n      \"location\": \"$LOCATION$\"\\n    }',\n    bucket: '',\n    lock: false,\n    when_set_bucket: device_info.bucket.id,\n    when_set_origin: device_info.id,\n    when_set_variable: 'pitch',\n    when_set_condition: '*',\n    when_set_value: '',\n    when_reset_bucket: '',\n    when_reset_origin: '',\n    when_reset_variable: '',\n    when_reset_condition: '',\n    when_reset_type: '',\n    when_reset_value: '',\n  });\n\n  return { device_token: token, pole_device, device_info };\n}\n\nmodule.exports = async (context, account = new TagoAccount(), config_dev = new TagoDevice(), scope) => {\n  const validate = validation('new_pole_validation', config_dev);\n\n  const pole_name = scope.find(x => x.variable === 'new_pole_name');\n  const pole_device_id = scope.find(x => x.variable === 'new_pole_device');\n  const pole_maxdegree = scope.find(x => x.variable === 'new_pole_maxdegree');\n  const pole_material = scope.find(x => x.variable === 'new_pole_material');\n  const pole_location = scope.find(x => x.variable === 'new_pole_location');\n\n  const location = pole_location.value.split(';');\n\n  let pole_img;\n  try {\n    pole_img = checkImage(account, scope.find(x => x.variable === 'new_pole_image'));\n  } catch (e) {\n    validate(e, 'danger');\n    throw e;\n  }\n\n  if (!pole_name) {\n    validate('You need to enter the Pole Name.', 'danger');\n    throw '<New Pole> Missing GPS EUI and Pole ID';\n  } else if (location.length < 2 || location.length > 2) {\n    validate('Wrong latitude and longitude. Please enter Latitude;Longitude', 'danger');\n    throw '<New Pole> Wrong Latitude Longitude';\n  } else if (Number(location[1]) > 180 || Number(location[1]) < -180) {\n    validate('Wrong longitude. Value must be -180 < n < 180.', 'danger');\n    throw '<New Pole> Wrong  Longitude';\n  } else if (Number(location[0]) > 90 || Number(location[0]) < -90) {\n    validate('Wrong latitude. Value must be -90 < n < 90.', 'danger');\n    throw '<New Pole> Wrong Latitude ';\n  }\n\n  validate('Registering Pole. Please wait!', 'warning');\n  const pole_info = {\n    id: String(new Date().getTime()),\n    origin: '',\n    bucket: '',\n    device: pole_device_id.value,\n    name: pole_name.value,\n    img: pole_img,\n  };\n\n  const { device_token, pole_device, device_info } = await installDevice(account, pole_info).catch((e) => { validate(e, 'danger'); throw e; });\n  pole_info.origin = device_info.id;\n  pole_info.bucket = device_info.bucket.id;\n  pole_info.id     = pole_info.origin;\n\n  // const config_info = await config_dev.info();\n  const dash_id = await installDashboard(context, account, pole_info);\n\n  const serie = pole_info.origin;\n\n  await config_dev.insert([{\n    variable: 'pole_id',\n    value: pole_info.origin,\n    serie,\n  }, {\n    variable: 'pole_name',\n    value: pole_info.name,\n    serie,\n  }, {\n    variable: 'pole_token',\n    value: device_token,\n    serie,\n  }, {\n    variable: 'pole_device',\n    value: pole_info.origin,\n    serie,\n  }, {\n    variable: 'pole_dashid',\n    value: dash_id,\n    serie,\n  }, {\n    variable: 'pole_img',\n    value: pole_img,\n    serie,\n  }]);\n\n\n  pole_device.insert([{\n    variable: 'pole_name',\n    value: pole_info.name,\n    serie,\n  }, {\n    variable: 'pole_token',\n    value: device_token,\n    serie,\n  }, {\n    variable: 'pole_dashid',\n    value: dash_id,\n    serie,\n  }, {\n    variable: 'maxdegree',\n    value: pole_maxdegree.value,\n    serie,\n  }, {\n    variable: 'material_type',\n    value: pole_material.value,\n    serie,\n  }, {\n    variable: 'location',\n    value: pole_location.value,\n    location: { lat: Number(location[0]), lng: Number(location[1]) },\n    serie,\n  }, {\n    variable: 'edit_location',\n    value: pole_location.value,\n    serie,\n  }]);\n\n  const dash_ids = context.environment.dash_summary.split('/');\n  context.notification.send('refresh', 'dashboard', dash_ids[0]);\n  validate('The Pole was succesfully registered!', 'success');\n  updateDash(context, account, config_dev);\n};\n\n\n//# sourceURL=webpack:///./project/services/pole/register.js?");

/***/ }),

/***/ "./project/services/pole/remove.js":
/*!*****************************************!*\
  !*** ./project/services/pole/remove.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const TagoAccount = __webpack_require__(/*! tago/account */ \"tago/account\");\nconst TagoDevice  = __webpack_require__(/*! tago/device */ \"tago/device\");\nconst updateDash  = __webpack_require__(/*! ./updateDash */ \"./project/services/pole/updateDash.js\");\n\nasync function removeTruck(context, account = new TagoAccount(), config_dev, scope) {\n  const serie = scope[0].serie;\n\n  const [dashboard, token] = await config_dev.find({ variables: ['pole_dashid', 'pole_token'], serie, qty: 99 });\n  await config_dev.remove({ serie, qty: 999 });\n  await account.dashboards.delete(dashboard.value).catch(console.log);\n\n  const actions = await account.actions.list(1, ['id', 'name'], { tags: [{ key: 'pole_id', value: scope[0].serie }] }, 100);\n  actions.forEach(x => account.actions.delete(x.id));\n  // const dev_info = await new TagoDevice(token.value).info();\n  // await account.devices.delete(dev_info.id).catch(console.log);\n  // await account.buckets.delete(dev_info.bucket.id).catch(console.log);\n\n\n  const dash_ids = context.environment.dash_summary.split('/');\n  context.notification.send('refresh', 'dashboard', dash_ids[0]);\n  updateDash(context, account, config_dev);\n}\n\nmodule.exports = removeTruck;\n\n\n//# sourceURL=webpack:///./project/services/pole/remove.js?");

/***/ }),

/***/ "./project/services/pole/update.js":
/*!*****************************************!*\
  !*** ./project/services/pole/update.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const TagoAccount = __webpack_require__(/*! tago/account */ \"tago/account\");\nconst TagoDevice  = __webpack_require__(/*! tago/device */ \"tago/device\");\nconst TagoUtils   = __webpack_require__(/*! tago/utils */ \"tago/utils\");\nconst validation  = __webpack_require__(/*! ../../lib/validation */ \"./project/lib/validation.js\");\nconst updateDash  = __webpack_require__(/*! ./updateDash */ \"./project/services/pole/updateDash.js\");\n\nasync function removeTruck(context, account = new TagoAccount(), config_dev, scope) {\n  const new_location = scope.find(x => x.variable === 'edit_location');\n\n  const token = await TagoUtils.getTokenByName(account, new_location.origin);\n  const device = new TagoDevice(token.value);\n\n  const validate = validation('edit_location_validate', device);\n  const location = new_location.value.split(';');\n  if (Number(location[1]) > 180 || Number(location[1]) < -180) {\n    validate('Wrong longitude. Value must be -180 < n < 180.');\n    throw '<New Pole> Wrong  Longitude';\n  } else if (Number(location[0]) > 90 || Number(location[0]) < -90) {\n    validate('Wrong latitude. Value must be -90 < n < 90.');\n    throw '<New Pole> Wrong Latitude ';\n  }\n  \n  await device.insert({\n    variable: 'location',\n    value: new_location.value,\n    location: { lat: Number(location[0]), lng: Number(location[1]) },\n    serie: new_location.origin,\n  });\n\n  await updateDash(context, account, config_dev);\n  validate('Pole Location succesfully updated');\n}\n\nmodule.exports = removeTruck;\n\n\n//# sourceURL=webpack:///./project/services/pole/update.js?");

/***/ }),

/***/ "./project/services/pole/updateDash.js":
/*!*********************************************!*\
  !*** ./project/services/pole/updateDash.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const groupData = __webpack_require__(/*! ../../lib/groupData */ \"./project/lib/groupData.js\");\n\nmodule.exports = async (context, account, config_dev) => {\n  await new Promise(done => setTimeout(done, 900));\n  const all_poles = await config_dev.find({ variables: ['pole_name', 'pole_device', 'pole_dashid'], qty: 9999 }).then(groupData);\n  console.log(all_poles);\n  const all_devices = await account.devices.list(1, ['id', 'bucket', 'tags'], { tags: [{ key: 'pole_system', value: 'Pole' }] }, 999);\n  console.log(all_devices);\n\n  const dash_ids = context.environment.dash_summary.split('/');\n  const widget_info = await account.dashboards.widgets.info(dash_ids[0], dash_ids[1]);\n  widget_info.data = [];\n  widget_info.display.map_labels = {};\n  widget_info.display.map_icons = {};\n  widget_info.display.vars_labels = {};\n  widget_info.display.vars_images = {};\n  widget_info.display.vars_url = {};\n\n  for (const pole of all_poles) {\n    const device = all_devices.find(x => x.id === pole.pole_device);\n    if (!device) continue;\n\n    widget_info.data.push({\n      bucket: device.bucket,\n      origin: device.id,\n      timezone: 'America/Port_of_Spain',\n      variables: [\n        'location',\n      ],\n      qty: 1,\n      start_date: '10 years',\n    });\n\n    widget_info.display.map_labels[`${device.id}`] = `Pole ${pole.pole_name}`;\n    widget_info.display.map_icons[`${device.id}`] = {\n      color: '#009051',\n      css_class: 'flaticon flaticon-pin56',\n    };\n    widget_info.display.vars_images[`${device.id}location`] = pole.pole_img || '';\n    widget_info.display.vars_labels[`${device.id}location`] = `${pole.pole_name}`;\n    widget_info.display.vars_url[`${device.id}location`] = {\n      url: `https://admin.tago.io/dashboard/${pole.pole_dashid}`,\n      alias: 'Go to Dashboard',\n    };\n  }\n\n  account.dashboards.widgets.edit(dash_ids[0], dash_ids[1], { data: widget_info.data, display: widget_info.display }).then(console.log, console.log);\n};\n\n\n//# sourceURL=webpack:///./project/services/pole/updateDash.js?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "tago/account":
/*!********************************************!*\
  !*** external "require(\"tago/account\")" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"tago/account\");\n\n//# sourceURL=webpack:///external_%22require(\\%22tago/account\\%22)%22?");

/***/ }),

/***/ "tago/analysis":
/*!*********************************************!*\
  !*** external "require(\"tago/analysis\")" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"tago/analysis\");\n\n//# sourceURL=webpack:///external_%22require(\\%22tago/analysis\\%22)%22?");

/***/ }),

/***/ "tago/device":
/*!*******************************************!*\
  !*** external "require(\"tago/device\")" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"tago/device\");\n\n//# sourceURL=webpack:///external_%22require(\\%22tago/device\\%22)%22?");

/***/ }),

/***/ "tago/services":
/*!*********************************************!*\
  !*** external "require(\"tago/services\")" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"tago/services\");\n\n//# sourceURL=webpack:///external_%22require(\\%22tago/services\\%22)%22?");

/***/ }),

/***/ "tago/utils":
/*!******************************************!*\
  !*** external "require(\"tago/utils\")" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"tago/utils\");\n\n//# sourceURL=webpack:///external_%22require(\\%22tago/utils\\%22)%22?");

/***/ })

/******/ });