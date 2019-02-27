/*!
 * @tago-builder
 * Tago (https://tago.io/)
 * Tago Builder V2.2.3 (https://git.io/vhEW5)
 * 
 * Generated at: 1550163815208 (Thu Feb 14 2019 15:03:35 GMT-0200 (Brasilia Summer Time))
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./project/pitchControl.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./project/pitchControl.js":
/*!*********************************!*\
  !*** ./project/pitchControl.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nconst TagoAnalysis = __webpack_require__(/*! tago/analysis */ \"tago/analysis\");\nconst TagoDevice   = __webpack_require__(/*! tago/device */ \"tago/device\");\nconst TagoUtils    = __webpack_require__(/*! tago/utils */ \"tago/utils\");\nconst TagoAccount  = __webpack_require__(/*! tago/account */ \"tago/account\");\nconst TagoServices = __webpack_require__(/*! tago/services */ \"tago/services\");\n\nasync function SendNotification(context, account, device, title, message) {\n  const notification = new TagoServices(context.token).email;\n\n  const [dashboard] = await device.find({ variable: 'pole_dashid', qty: 1 });\n\n  await notification.send('Pitch Alert', 'Pitch is above 20.');\n  await notification.send(title, message, dashboard.value).then(context.log, context.log);\n}\n\nasync function handler(context, scope) {\n  context.log('Running');\n  if (!scope[0]) throw 'Scope is missing'; // doesn't need to run if scope[0] is null\n\n  const environment = TagoUtils.env_to_obj(context.environment);\n  if (!environment.account_token) throw 'Missing account_token environment var';\n\n  const pitch = scope.find(x => x.variable === 'pitch');\n  const account = new TagoAccount(environment.account_token);\n\n  const token = await TagoUtils.getTokenByName(account, pitch.origin);\n  const device = new TagoDevice(token);\n\n  let [max_degree, last_report] = await device.find({ variables: ['maxdegree', 'last_report'], qty: 1 });\n  max_degree = Number(max_degree.value);\n  last_report = last_report ? last_report.value : false;\n\n  if (max_degree < pitch.value) {\n    if (last_report) return;\n\n    device.insert({ variable: 'last_report', value: true });\n    const [pole_name] = await device.find({ variable: 'pole_name', qty: 1 });\n    await SendNotification(context, account, device, 'Tilt Angle Alert', `Attention: The pole ${pole_name.value} is tilted ${pitch.value} degrees`);\n  } else {\n    if (!last_report) return;\n\n    device.insert({ variable: 'last_report', value: false });\n    const [pole_name] = await device.find({ variable: 'pole_name', qty: 1 });\n    await SendNotification(context, account, device, 'Tilt Angle Recovered', `The pole ${pole_name.value} tilted normalized at ${pitch.value} degrees`);\n  }\n}\n\nasync function startAnalysis(context, scope) {\n  await handler(context, scope).then(() => {\n    context.log('Script end.');\n  }).catch((e) => {\n    console.log(e);\n    context.log(e.message || JSON.stringify(e));\n  });\n}\nmodule.exports = new TagoAnalysis(startAnalysis, 'your analysis token');\n\n\n//# sourceURL=webpack:///./project/pitchControl.js?");

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