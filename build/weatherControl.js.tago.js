/*!
 * @tago-builder
 * Tago (https://tago.io/)
 * Tago Builder V2.2.3 (https://git.io/vhEW5)
 * 
 * Generated at: 1550163817059 (Thu Feb 14 2019 15:03:37 GMT-0200 (Brasilia Summer Time))
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./project/weatherControl.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./lib/axios */ \"./node_modules/axios/lib/axios.js\");\n\n//# sourceURL=webpack:///./node_modules/axios/index.js?");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/http.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/adapters/http.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\nvar settle = __webpack_require__(/*! ./../core/settle */ \"./node_modules/axios/lib/core/settle.js\");\nvar buildURL = __webpack_require__(/*! ./../helpers/buildURL */ \"./node_modules/axios/lib/helpers/buildURL.js\");\nvar http = __webpack_require__(/*! http */ \"http\");\nvar https = __webpack_require__(/*! https */ \"https\");\nvar httpFollow = __webpack_require__(/*! follow-redirects */ \"./node_modules/follow-redirects/index.js\").http;\nvar httpsFollow = __webpack_require__(/*! follow-redirects */ \"./node_modules/follow-redirects/index.js\").https;\nvar url = __webpack_require__(/*! url */ \"url\");\nvar zlib = __webpack_require__(/*! zlib */ \"zlib\");\nvar pkg = __webpack_require__(/*! ./../../package.json */ \"./node_modules/axios/package.json\");\nvar createError = __webpack_require__(/*! ../core/createError */ \"./node_modules/axios/lib/core/createError.js\");\nvar enhanceError = __webpack_require__(/*! ../core/enhanceError */ \"./node_modules/axios/lib/core/enhanceError.js\");\n\n/*eslint consistent-return:0*/\nmodule.exports = function httpAdapter(config) {\n  return new Promise(function dispatchHttpRequest(resolve, reject) {\n    var data = config.data;\n    var headers = config.headers;\n    var timer;\n\n    // Set User-Agent (required by some servers)\n    // Only set header if it hasn't been set in config\n    // See https://github.com/axios/axios/issues/69\n    if (!headers['User-Agent'] && !headers['user-agent']) {\n      headers['User-Agent'] = 'axios/' + pkg.version;\n    }\n\n    if (data && !utils.isStream(data)) {\n      if (Buffer.isBuffer(data)) {\n        // Nothing to do...\n      } else if (utils.isArrayBuffer(data)) {\n        data = new Buffer(new Uint8Array(data));\n      } else if (utils.isString(data)) {\n        data = new Buffer(data, 'utf-8');\n      } else {\n        return reject(createError(\n          'Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream',\n          config\n        ));\n      }\n\n      // Add Content-Length header if data exists\n      headers['Content-Length'] = data.length;\n    }\n\n    // HTTP basic authentication\n    var auth = undefined;\n    if (config.auth) {\n      var username = config.auth.username || '';\n      var password = config.auth.password || '';\n      auth = username + ':' + password;\n    }\n\n    // Parse url\n    var parsed = url.parse(config.url);\n    var protocol = parsed.protocol || 'http:';\n\n    if (!auth && parsed.auth) {\n      var urlAuth = parsed.auth.split(':');\n      var urlUsername = urlAuth[0] || '';\n      var urlPassword = urlAuth[1] || '';\n      auth = urlUsername + ':' + urlPassword;\n    }\n\n    if (auth) {\n      delete headers.Authorization;\n    }\n\n    var isHttps = protocol === 'https:';\n    var agent = isHttps ? config.httpsAgent : config.httpAgent;\n\n    var options = {\n      path: buildURL(parsed.path, config.params, config.paramsSerializer).replace(/^\\?/, ''),\n      method: config.method,\n      headers: headers,\n      agent: agent,\n      auth: auth\n    };\n\n    if (config.socketPath) {\n      options.socketPath = config.socketPath;\n    } else {\n      options.hostname = parsed.hostname;\n      options.port = parsed.port;\n    }\n\n    var proxy = config.proxy;\n    if (!proxy && proxy !== false) {\n      var proxyEnv = protocol.slice(0, -1) + '_proxy';\n      var proxyUrl = process.env[proxyEnv] || process.env[proxyEnv.toUpperCase()];\n      if (proxyUrl) {\n        var parsedProxyUrl = url.parse(proxyUrl);\n        proxy = {\n          host: parsedProxyUrl.hostname,\n          port: parsedProxyUrl.port\n        };\n\n        if (parsedProxyUrl.auth) {\n          var proxyUrlAuth = parsedProxyUrl.auth.split(':');\n          proxy.auth = {\n            username: proxyUrlAuth[0],\n            password: proxyUrlAuth[1]\n          };\n        }\n      }\n    }\n\n    if (proxy) {\n      options.hostname = proxy.host;\n      options.host = proxy.host;\n      options.headers.host = parsed.hostname + (parsed.port ? ':' + parsed.port : '');\n      options.port = proxy.port;\n      options.path = protocol + '//' + parsed.hostname + (parsed.port ? ':' + parsed.port : '') + options.path;\n\n      // Basic proxy authorization\n      if (proxy.auth) {\n        var base64 = new Buffer(proxy.auth.username + ':' + proxy.auth.password, 'utf8').toString('base64');\n        options.headers['Proxy-Authorization'] = 'Basic ' + base64;\n      }\n    }\n\n    var transport;\n    if (config.transport) {\n      transport = config.transport;\n    } else if (config.maxRedirects === 0) {\n      transport = isHttps ? https : http;\n    } else {\n      if (config.maxRedirects) {\n        options.maxRedirects = config.maxRedirects;\n      }\n      transport = isHttps ? httpsFollow : httpFollow;\n    }\n\n    if (config.maxContentLength && config.maxContentLength > -1) {\n      options.maxBodyLength = config.maxContentLength;\n    }\n\n    // Create the request\n    var req = transport.request(options, function handleResponse(res) {\n      if (req.aborted) return;\n\n      // Response has been received so kill timer that handles request timeout\n      clearTimeout(timer);\n      timer = null;\n\n      // uncompress the response body transparently if required\n      var stream = res;\n      switch (res.headers['content-encoding']) {\n      /*eslint default-case:0*/\n      case 'gzip':\n      case 'compress':\n      case 'deflate':\n        // add the unzipper to the body stream processing pipeline\n        stream = stream.pipe(zlib.createUnzip());\n\n        // remove the content-encoding in order to not confuse downstream operations\n        delete res.headers['content-encoding'];\n        break;\n      }\n\n      // return the last request in case of redirects\n      var lastRequest = res.req || req;\n\n      var response = {\n        status: res.statusCode,\n        statusText: res.statusMessage,\n        headers: res.headers,\n        config: config,\n        request: lastRequest\n      };\n\n      if (config.responseType === 'stream') {\n        response.data = stream;\n        settle(resolve, reject, response);\n      } else {\n        var responseBuffer = [];\n        stream.on('data', function handleStreamData(chunk) {\n          responseBuffer.push(chunk);\n\n          // make sure the content length is not over the maxContentLength if specified\n          if (config.maxContentLength > -1 && Buffer.concat(responseBuffer).length > config.maxContentLength) {\n            reject(createError('maxContentLength size of ' + config.maxContentLength + ' exceeded',\n              config, null, lastRequest));\n          }\n        });\n\n        stream.on('error', function handleStreamError(err) {\n          if (req.aborted) return;\n          reject(enhanceError(err, config, null, lastRequest));\n        });\n\n        stream.on('end', function handleStreamEnd() {\n          var responseData = Buffer.concat(responseBuffer);\n          if (config.responseType !== 'arraybuffer') {\n            responseData = responseData.toString('utf8');\n          }\n\n          response.data = responseData;\n          settle(resolve, reject, response);\n        });\n      }\n    });\n\n    // Handle errors\n    req.on('error', function handleRequestError(err) {\n      if (req.aborted) return;\n      reject(enhanceError(err, config, null, req));\n    });\n\n    // Handle request timeout\n    if (config.timeout && !timer) {\n      timer = setTimeout(function handleRequestTimeout() {\n        req.abort();\n        reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED', req));\n      }, config.timeout);\n    }\n\n    if (config.cancelToken) {\n      // Handle cancellation\n      config.cancelToken.promise.then(function onCanceled(cancel) {\n        if (req.aborted) return;\n\n        req.abort();\n        reject(cancel);\n      });\n    }\n\n    // Send the request\n    if (utils.isStream(data)) {\n      data.pipe(req);\n    } else {\n      req.end(data);\n    }\n  });\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/adapters/http.js?");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\nvar settle = __webpack_require__(/*! ./../core/settle */ \"./node_modules/axios/lib/core/settle.js\");\nvar buildURL = __webpack_require__(/*! ./../helpers/buildURL */ \"./node_modules/axios/lib/helpers/buildURL.js\");\nvar parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ \"./node_modules/axios/lib/helpers/parseHeaders.js\");\nvar isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ \"./node_modules/axios/lib/helpers/isURLSameOrigin.js\");\nvar createError = __webpack_require__(/*! ../core/createError */ \"./node_modules/axios/lib/core/createError.js\");\nvar btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(/*! ./../helpers/btoa */ \"./node_modules/axios/lib/helpers/btoa.js\");\n\nmodule.exports = function xhrAdapter(config) {\n  return new Promise(function dispatchXhrRequest(resolve, reject) {\n    var requestData = config.data;\n    var requestHeaders = config.headers;\n\n    if (utils.isFormData(requestData)) {\n      delete requestHeaders['Content-Type']; // Let the browser set it\n    }\n\n    var request = new XMLHttpRequest();\n    var loadEvent = 'onreadystatechange';\n    var xDomain = false;\n\n    // For IE 8/9 CORS support\n    // Only supports POST and GET calls and doesn't returns the response headers.\n    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.\n    if (\"development\" !== 'test' &&\n        typeof window !== 'undefined' &&\n        window.XDomainRequest && !('withCredentials' in request) &&\n        !isURLSameOrigin(config.url)) {\n      request = new window.XDomainRequest();\n      loadEvent = 'onload';\n      xDomain = true;\n      request.onprogress = function handleProgress() {};\n      request.ontimeout = function handleTimeout() {};\n    }\n\n    // HTTP basic authentication\n    if (config.auth) {\n      var username = config.auth.username || '';\n      var password = config.auth.password || '';\n      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);\n    }\n\n    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);\n\n    // Set the request timeout in MS\n    request.timeout = config.timeout;\n\n    // Listen for ready state\n    request[loadEvent] = function handleLoad() {\n      if (!request || (request.readyState !== 4 && !xDomain)) {\n        return;\n      }\n\n      // The request errored out and we didn't get a response, this will be\n      // handled by onerror instead\n      // With one exception: request that using file: protocol, most browsers\n      // will return status as 0 even though it's a successful request\n      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {\n        return;\n      }\n\n      // Prepare the response\n      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;\n      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;\n      var response = {\n        data: responseData,\n        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)\n        status: request.status === 1223 ? 204 : request.status,\n        statusText: request.status === 1223 ? 'No Content' : request.statusText,\n        headers: responseHeaders,\n        config: config,\n        request: request\n      };\n\n      settle(resolve, reject, response);\n\n      // Clean up request\n      request = null;\n    };\n\n    // Handle low level network errors\n    request.onerror = function handleError() {\n      // Real errors are hidden from us by the browser\n      // onerror should only fire if it's a network error\n      reject(createError('Network Error', config, null, request));\n\n      // Clean up request\n      request = null;\n    };\n\n    // Handle timeout\n    request.ontimeout = function handleTimeout() {\n      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',\n        request));\n\n      // Clean up request\n      request = null;\n    };\n\n    // Add xsrf header\n    // This is only done if running in a standard browser environment.\n    // Specifically not if we're in a web worker, or react-native.\n    if (utils.isStandardBrowserEnv()) {\n      var cookies = __webpack_require__(/*! ./../helpers/cookies */ \"./node_modules/axios/lib/helpers/cookies.js\");\n\n      // Add xsrf header\n      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?\n          cookies.read(config.xsrfCookieName) :\n          undefined;\n\n      if (xsrfValue) {\n        requestHeaders[config.xsrfHeaderName] = xsrfValue;\n      }\n    }\n\n    // Add headers to the request\n    if ('setRequestHeader' in request) {\n      utils.forEach(requestHeaders, function setRequestHeader(val, key) {\n        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {\n          // Remove Content-Type if data is undefined\n          delete requestHeaders[key];\n        } else {\n          // Otherwise add header to the request\n          request.setRequestHeader(key, val);\n        }\n      });\n    }\n\n    // Add withCredentials to request if needed\n    if (config.withCredentials) {\n      request.withCredentials = true;\n    }\n\n    // Add responseType to request if needed\n    if (config.responseType) {\n      try {\n        request.responseType = config.responseType;\n      } catch (e) {\n        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.\n        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.\n        if (config.responseType !== 'json') {\n          throw e;\n        }\n      }\n    }\n\n    // Handle progress if needed\n    if (typeof config.onDownloadProgress === 'function') {\n      request.addEventListener('progress', config.onDownloadProgress);\n    }\n\n    // Not all browsers support upload events\n    if (typeof config.onUploadProgress === 'function' && request.upload) {\n      request.upload.addEventListener('progress', config.onUploadProgress);\n    }\n\n    if (config.cancelToken) {\n      // Handle cancellation\n      config.cancelToken.promise.then(function onCanceled(cancel) {\n        if (!request) {\n          return;\n        }\n\n        request.abort();\n        reject(cancel);\n        // Clean up request\n        request = null;\n      });\n    }\n\n    if (requestData === undefined) {\n      requestData = null;\n    }\n\n    // Send the request\n    request.send(requestData);\n  });\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/adapters/xhr.js?");

/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./utils */ \"./node_modules/axios/lib/utils.js\");\nvar bind = __webpack_require__(/*! ./helpers/bind */ \"./node_modules/axios/lib/helpers/bind.js\");\nvar Axios = __webpack_require__(/*! ./core/Axios */ \"./node_modules/axios/lib/core/Axios.js\");\nvar defaults = __webpack_require__(/*! ./defaults */ \"./node_modules/axios/lib/defaults.js\");\n\n/**\n * Create an instance of Axios\n *\n * @param {Object} defaultConfig The default config for the instance\n * @return {Axios} A new instance of Axios\n */\nfunction createInstance(defaultConfig) {\n  var context = new Axios(defaultConfig);\n  var instance = bind(Axios.prototype.request, context);\n\n  // Copy axios.prototype to instance\n  utils.extend(instance, Axios.prototype, context);\n\n  // Copy context to instance\n  utils.extend(instance, context);\n\n  return instance;\n}\n\n// Create the default instance to be exported\nvar axios = createInstance(defaults);\n\n// Expose Axios class to allow class inheritance\naxios.Axios = Axios;\n\n// Factory for creating new instances\naxios.create = function create(instanceConfig) {\n  return createInstance(utils.merge(defaults, instanceConfig));\n};\n\n// Expose Cancel & CancelToken\naxios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ \"./node_modules/axios/lib/cancel/Cancel.js\");\naxios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ \"./node_modules/axios/lib/cancel/CancelToken.js\");\naxios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ \"./node_modules/axios/lib/cancel/isCancel.js\");\n\n// Expose all/spread\naxios.all = function all(promises) {\n  return Promise.all(promises);\n};\naxios.spread = __webpack_require__(/*! ./helpers/spread */ \"./node_modules/axios/lib/helpers/spread.js\");\n\nmodule.exports = axios;\n\n// Allow use of default import syntax in TypeScript\nmodule.exports.default = axios;\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/axios.js?");

/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * A `Cancel` is an object that is thrown when an operation is canceled.\n *\n * @class\n * @param {string=} message The message.\n */\nfunction Cancel(message) {\n  this.message = message;\n}\n\nCancel.prototype.toString = function toString() {\n  return 'Cancel' + (this.message ? ': ' + this.message : '');\n};\n\nCancel.prototype.__CANCEL__ = true;\n\nmodule.exports = Cancel;\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/cancel/Cancel.js?");

/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar Cancel = __webpack_require__(/*! ./Cancel */ \"./node_modules/axios/lib/cancel/Cancel.js\");\n\n/**\n * A `CancelToken` is an object that can be used to request cancellation of an operation.\n *\n * @class\n * @param {Function} executor The executor function.\n */\nfunction CancelToken(executor) {\n  if (typeof executor !== 'function') {\n    throw new TypeError('executor must be a function.');\n  }\n\n  var resolvePromise;\n  this.promise = new Promise(function promiseExecutor(resolve) {\n    resolvePromise = resolve;\n  });\n\n  var token = this;\n  executor(function cancel(message) {\n    if (token.reason) {\n      // Cancellation has already been requested\n      return;\n    }\n\n    token.reason = new Cancel(message);\n    resolvePromise(token.reason);\n  });\n}\n\n/**\n * Throws a `Cancel` if cancellation has been requested.\n */\nCancelToken.prototype.throwIfRequested = function throwIfRequested() {\n  if (this.reason) {\n    throw this.reason;\n  }\n};\n\n/**\n * Returns an object that contains a new `CancelToken` and a function that, when called,\n * cancels the `CancelToken`.\n */\nCancelToken.source = function source() {\n  var cancel;\n  var token = new CancelToken(function executor(c) {\n    cancel = c;\n  });\n  return {\n    token: token,\n    cancel: cancel\n  };\n};\n\nmodule.exports = CancelToken;\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/cancel/CancelToken.js?");

/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function isCancel(value) {\n  return !!(value && value.__CANCEL__);\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/cancel/isCancel.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar defaults = __webpack_require__(/*! ./../defaults */ \"./node_modules/axios/lib/defaults.js\");\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\nvar InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ \"./node_modules/axios/lib/core/InterceptorManager.js\");\nvar dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ \"./node_modules/axios/lib/core/dispatchRequest.js\");\n\n/**\n * Create a new instance of Axios\n *\n * @param {Object} instanceConfig The default config for the instance\n */\nfunction Axios(instanceConfig) {\n  this.defaults = instanceConfig;\n  this.interceptors = {\n    request: new InterceptorManager(),\n    response: new InterceptorManager()\n  };\n}\n\n/**\n * Dispatch a request\n *\n * @param {Object} config The config specific for this request (merged with this.defaults)\n */\nAxios.prototype.request = function request(config) {\n  /*eslint no-param-reassign:0*/\n  // Allow for axios('example/url'[, config]) a la fetch API\n  if (typeof config === 'string') {\n    config = utils.merge({\n      url: arguments[0]\n    }, arguments[1]);\n  }\n\n  config = utils.merge(defaults, {method: 'get'}, this.defaults, config);\n  config.method = config.method.toLowerCase();\n\n  // Hook up interceptors middleware\n  var chain = [dispatchRequest, undefined];\n  var promise = Promise.resolve(config);\n\n  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {\n    chain.unshift(interceptor.fulfilled, interceptor.rejected);\n  });\n\n  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {\n    chain.push(interceptor.fulfilled, interceptor.rejected);\n  });\n\n  while (chain.length) {\n    promise = promise.then(chain.shift(), chain.shift());\n  }\n\n  return promise;\n};\n\n// Provide aliases for supported request methods\nutils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {\n  /*eslint func-names:0*/\n  Axios.prototype[method] = function(url, config) {\n    return this.request(utils.merge(config || {}, {\n      method: method,\n      url: url\n    }));\n  };\n});\n\nutils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {\n  /*eslint func-names:0*/\n  Axios.prototype[method] = function(url, data, config) {\n    return this.request(utils.merge(config || {}, {\n      method: method,\n      url: url,\n      data: data\n    }));\n  };\n});\n\nmodule.exports = Axios;\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/core/Axios.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\n\nfunction InterceptorManager() {\n  this.handlers = [];\n}\n\n/**\n * Add a new interceptor to the stack\n *\n * @param {Function} fulfilled The function to handle `then` for a `Promise`\n * @param {Function} rejected The function to handle `reject` for a `Promise`\n *\n * @return {Number} An ID used to remove interceptor later\n */\nInterceptorManager.prototype.use = function use(fulfilled, rejected) {\n  this.handlers.push({\n    fulfilled: fulfilled,\n    rejected: rejected\n  });\n  return this.handlers.length - 1;\n};\n\n/**\n * Remove an interceptor from the stack\n *\n * @param {Number} id The ID that was returned by `use`\n */\nInterceptorManager.prototype.eject = function eject(id) {\n  if (this.handlers[id]) {\n    this.handlers[id] = null;\n  }\n};\n\n/**\n * Iterate over all the registered interceptors\n *\n * This method is particularly useful for skipping over any\n * interceptors that may have become `null` calling `eject`.\n *\n * @param {Function} fn The function to call for each interceptor\n */\nInterceptorManager.prototype.forEach = function forEach(fn) {\n  utils.forEach(this.handlers, function forEachHandler(h) {\n    if (h !== null) {\n      fn(h);\n    }\n  });\n};\n\nmodule.exports = InterceptorManager;\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/core/InterceptorManager.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar enhanceError = __webpack_require__(/*! ./enhanceError */ \"./node_modules/axios/lib/core/enhanceError.js\");\n\n/**\n * Create an Error with the specified message, config, error code, request and response.\n *\n * @param {string} message The error message.\n * @param {Object} config The config.\n * @param {string} [code] The error code (for example, 'ECONNABORTED').\n * @param {Object} [request] The request.\n * @param {Object} [response] The response.\n * @returns {Error} The created error.\n */\nmodule.exports = function createError(message, config, code, request, response) {\n  var error = new Error(message);\n  return enhanceError(error, config, code, request, response);\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/core/createError.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\nvar transformData = __webpack_require__(/*! ./transformData */ \"./node_modules/axios/lib/core/transformData.js\");\nvar isCancel = __webpack_require__(/*! ../cancel/isCancel */ \"./node_modules/axios/lib/cancel/isCancel.js\");\nvar defaults = __webpack_require__(/*! ../defaults */ \"./node_modules/axios/lib/defaults.js\");\nvar isAbsoluteURL = __webpack_require__(/*! ./../helpers/isAbsoluteURL */ \"./node_modules/axios/lib/helpers/isAbsoluteURL.js\");\nvar combineURLs = __webpack_require__(/*! ./../helpers/combineURLs */ \"./node_modules/axios/lib/helpers/combineURLs.js\");\n\n/**\n * Throws a `Cancel` if cancellation has been requested.\n */\nfunction throwIfCancellationRequested(config) {\n  if (config.cancelToken) {\n    config.cancelToken.throwIfRequested();\n  }\n}\n\n/**\n * Dispatch a request to the server using the configured adapter.\n *\n * @param {object} config The config that is to be used for the request\n * @returns {Promise} The Promise to be fulfilled\n */\nmodule.exports = function dispatchRequest(config) {\n  throwIfCancellationRequested(config);\n\n  // Support baseURL config\n  if (config.baseURL && !isAbsoluteURL(config.url)) {\n    config.url = combineURLs(config.baseURL, config.url);\n  }\n\n  // Ensure headers exist\n  config.headers = config.headers || {};\n\n  // Transform request data\n  config.data = transformData(\n    config.data,\n    config.headers,\n    config.transformRequest\n  );\n\n  // Flatten headers\n  config.headers = utils.merge(\n    config.headers.common || {},\n    config.headers[config.method] || {},\n    config.headers || {}\n  );\n\n  utils.forEach(\n    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],\n    function cleanHeaderConfig(method) {\n      delete config.headers[method];\n    }\n  );\n\n  var adapter = config.adapter || defaults.adapter;\n\n  return adapter(config).then(function onAdapterResolution(response) {\n    throwIfCancellationRequested(config);\n\n    // Transform response data\n    response.data = transformData(\n      response.data,\n      response.headers,\n      config.transformResponse\n    );\n\n    return response;\n  }, function onAdapterRejection(reason) {\n    if (!isCancel(reason)) {\n      throwIfCancellationRequested(config);\n\n      // Transform response data\n      if (reason && reason.response) {\n        reason.response.data = transformData(\n          reason.response.data,\n          reason.response.headers,\n          config.transformResponse\n        );\n      }\n    }\n\n    return Promise.reject(reason);\n  });\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/core/dispatchRequest.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Update an Error with the specified config, error code, and response.\n *\n * @param {Error} error The error to update.\n * @param {Object} config The config.\n * @param {string} [code] The error code (for example, 'ECONNABORTED').\n * @param {Object} [request] The request.\n * @param {Object} [response] The response.\n * @returns {Error} The error.\n */\nmodule.exports = function enhanceError(error, config, code, request, response) {\n  error.config = config;\n  if (code) {\n    error.code = code;\n  }\n  error.request = request;\n  error.response = response;\n  return error;\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/core/enhanceError.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar createError = __webpack_require__(/*! ./createError */ \"./node_modules/axios/lib/core/createError.js\");\n\n/**\n * Resolve or reject a Promise based on response status.\n *\n * @param {Function} resolve A function that resolves the promise.\n * @param {Function} reject A function that rejects the promise.\n * @param {object} response The response.\n */\nmodule.exports = function settle(resolve, reject, response) {\n  var validateStatus = response.config.validateStatus;\n  // Note: status is not exposed by XDomainRequest\n  if (!response.status || !validateStatus || validateStatus(response.status)) {\n    resolve(response);\n  } else {\n    reject(createError(\n      'Request failed with status code ' + response.status,\n      response.config,\n      null,\n      response.request,\n      response\n    ));\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/core/settle.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\n\n/**\n * Transform the data for a request or a response\n *\n * @param {Object|String} data The data to be transformed\n * @param {Array} headers The headers for the request or response\n * @param {Array|Function} fns A single function or Array of functions\n * @returns {*} The resulting transformed data\n */\nmodule.exports = function transformData(data, headers, fns) {\n  /*eslint no-param-reassign:0*/\n  utils.forEach(fns, function transform(fn) {\n    data = fn(data, headers);\n  });\n\n  return data;\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/core/transformData.js?");

/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./utils */ \"./node_modules/axios/lib/utils.js\");\nvar normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ \"./node_modules/axios/lib/helpers/normalizeHeaderName.js\");\n\nvar DEFAULT_CONTENT_TYPE = {\n  'Content-Type': 'application/x-www-form-urlencoded'\n};\n\nfunction setContentTypeIfUnset(headers, value) {\n  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {\n    headers['Content-Type'] = value;\n  }\n}\n\nfunction getDefaultAdapter() {\n  var adapter;\n  if (typeof XMLHttpRequest !== 'undefined') {\n    // For browsers use XHR adapter\n    adapter = __webpack_require__(/*! ./adapters/xhr */ \"./node_modules/axios/lib/adapters/xhr.js\");\n  } else if (typeof process !== 'undefined') {\n    // For node use HTTP adapter\n    adapter = __webpack_require__(/*! ./adapters/http */ \"./node_modules/axios/lib/adapters/http.js\");\n  }\n  return adapter;\n}\n\nvar defaults = {\n  adapter: getDefaultAdapter(),\n\n  transformRequest: [function transformRequest(data, headers) {\n    normalizeHeaderName(headers, 'Content-Type');\n    if (utils.isFormData(data) ||\n      utils.isArrayBuffer(data) ||\n      utils.isBuffer(data) ||\n      utils.isStream(data) ||\n      utils.isFile(data) ||\n      utils.isBlob(data)\n    ) {\n      return data;\n    }\n    if (utils.isArrayBufferView(data)) {\n      return data.buffer;\n    }\n    if (utils.isURLSearchParams(data)) {\n      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');\n      return data.toString();\n    }\n    if (utils.isObject(data)) {\n      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');\n      return JSON.stringify(data);\n    }\n    return data;\n  }],\n\n  transformResponse: [function transformResponse(data) {\n    /*eslint no-param-reassign:0*/\n    if (typeof data === 'string') {\n      try {\n        data = JSON.parse(data);\n      } catch (e) { /* Ignore */ }\n    }\n    return data;\n  }],\n\n  /**\n   * A timeout in milliseconds to abort a request. If set to 0 (default) a\n   * timeout is not created.\n   */\n  timeout: 0,\n\n  xsrfCookieName: 'XSRF-TOKEN',\n  xsrfHeaderName: 'X-XSRF-TOKEN',\n\n  maxContentLength: -1,\n\n  validateStatus: function validateStatus(status) {\n    return status >= 200 && status < 300;\n  }\n};\n\ndefaults.headers = {\n  common: {\n    'Accept': 'application/json, text/plain, */*'\n  }\n};\n\nutils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {\n  defaults.headers[method] = {};\n});\n\nutils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {\n  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);\n});\n\nmodule.exports = defaults;\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/defaults.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function bind(fn, thisArg) {\n  return function wrap() {\n    var args = new Array(arguments.length);\n    for (var i = 0; i < args.length; i++) {\n      args[i] = arguments[i];\n    }\n    return fn.apply(thisArg, args);\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/bind.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/btoa.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/btoa.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js\n\nvar chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';\n\nfunction E() {\n  this.message = 'String contains an invalid character';\n}\nE.prototype = new Error;\nE.prototype.code = 5;\nE.prototype.name = 'InvalidCharacterError';\n\nfunction btoa(input) {\n  var str = String(input);\n  var output = '';\n  for (\n    // initialize result and counter\n    var block, charCode, idx = 0, map = chars;\n    // if the next str index does not exist:\n    //   change the mapping table to \"=\"\n    //   check if d has no fractional digits\n    str.charAt(idx | 0) || (map = '=', idx % 1);\n    // \"8 - idx % 1 * 8\" generates the sequence 2, 4, 6, 8\n    output += map.charAt(63 & block >> 8 - idx % 1 * 8)\n  ) {\n    charCode = str.charCodeAt(idx += 3 / 4);\n    if (charCode > 0xFF) {\n      throw new E();\n    }\n    block = block << 8 | charCode;\n  }\n  return output;\n}\n\nmodule.exports = btoa;\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/btoa.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\n\nfunction encode(val) {\n  return encodeURIComponent(val).\n    replace(/%40/gi, '@').\n    replace(/%3A/gi, ':').\n    replace(/%24/g, '$').\n    replace(/%2C/gi, ',').\n    replace(/%20/g, '+').\n    replace(/%5B/gi, '[').\n    replace(/%5D/gi, ']');\n}\n\n/**\n * Build a URL by appending params to the end\n *\n * @param {string} url The base of the url (e.g., http://www.google.com)\n * @param {object} [params] The params to be appended\n * @returns {string} The formatted url\n */\nmodule.exports = function buildURL(url, params, paramsSerializer) {\n  /*eslint no-param-reassign:0*/\n  if (!params) {\n    return url;\n  }\n\n  var serializedParams;\n  if (paramsSerializer) {\n    serializedParams = paramsSerializer(params);\n  } else if (utils.isURLSearchParams(params)) {\n    serializedParams = params.toString();\n  } else {\n    var parts = [];\n\n    utils.forEach(params, function serialize(val, key) {\n      if (val === null || typeof val === 'undefined') {\n        return;\n      }\n\n      if (utils.isArray(val)) {\n        key = key + '[]';\n      } else {\n        val = [val];\n      }\n\n      utils.forEach(val, function parseValue(v) {\n        if (utils.isDate(v)) {\n          v = v.toISOString();\n        } else if (utils.isObject(v)) {\n          v = JSON.stringify(v);\n        }\n        parts.push(encode(key) + '=' + encode(v));\n      });\n    });\n\n    serializedParams = parts.join('&');\n  }\n\n  if (serializedParams) {\n    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;\n  }\n\n  return url;\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/buildURL.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Creates a new URL by combining the specified URLs\n *\n * @param {string} baseURL The base URL\n * @param {string} relativeURL The relative URL\n * @returns {string} The combined URL\n */\nmodule.exports = function combineURLs(baseURL, relativeURL) {\n  return relativeURL\n    ? baseURL.replace(/\\/+$/, '') + '/' + relativeURL.replace(/^\\/+/, '')\n    : baseURL;\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/combineURLs.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\n\nmodule.exports = (\n  utils.isStandardBrowserEnv() ?\n\n  // Standard browser envs support document.cookie\n  (function standardBrowserEnv() {\n    return {\n      write: function write(name, value, expires, path, domain, secure) {\n        var cookie = [];\n        cookie.push(name + '=' + encodeURIComponent(value));\n\n        if (utils.isNumber(expires)) {\n          cookie.push('expires=' + new Date(expires).toGMTString());\n        }\n\n        if (utils.isString(path)) {\n          cookie.push('path=' + path);\n        }\n\n        if (utils.isString(domain)) {\n          cookie.push('domain=' + domain);\n        }\n\n        if (secure === true) {\n          cookie.push('secure');\n        }\n\n        document.cookie = cookie.join('; ');\n      },\n\n      read: function read(name) {\n        var match = document.cookie.match(new RegExp('(^|;\\\\s*)(' + name + ')=([^;]*)'));\n        return (match ? decodeURIComponent(match[3]) : null);\n      },\n\n      remove: function remove(name) {\n        this.write(name, '', Date.now() - 86400000);\n      }\n    };\n  })() :\n\n  // Non standard browser env (web workers, react-native) lack needed support.\n  (function nonStandardBrowserEnv() {\n    return {\n      write: function write() {},\n      read: function read() { return null; },\n      remove: function remove() {}\n    };\n  })()\n);\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/cookies.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Determines whether the specified URL is absolute\n *\n * @param {string} url The URL to test\n * @returns {boolean} True if the specified URL is absolute, otherwise false\n */\nmodule.exports = function isAbsoluteURL(url) {\n  // A URL is considered absolute if it begins with \"<scheme>://\" or \"//\" (protocol-relative URL).\n  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed\n  // by any combination of letters, digits, plus, period, or hyphen.\n  return /^([a-z][a-z\\d\\+\\-\\.]*:)?\\/\\//i.test(url);\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/isAbsoluteURL.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\n\nmodule.exports = (\n  utils.isStandardBrowserEnv() ?\n\n  // Standard browser envs have full support of the APIs needed to test\n  // whether the request URL is of the same origin as current location.\n  (function standardBrowserEnv() {\n    var msie = /(msie|trident)/i.test(navigator.userAgent);\n    var urlParsingNode = document.createElement('a');\n    var originURL;\n\n    /**\n    * Parse a URL to discover it's components\n    *\n    * @param {String} url The URL to be parsed\n    * @returns {Object}\n    */\n    function resolveURL(url) {\n      var href = url;\n\n      if (msie) {\n        // IE needs attribute set twice to normalize properties\n        urlParsingNode.setAttribute('href', href);\n        href = urlParsingNode.href;\n      }\n\n      urlParsingNode.setAttribute('href', href);\n\n      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils\n      return {\n        href: urlParsingNode.href,\n        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',\n        host: urlParsingNode.host,\n        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\\?/, '') : '',\n        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',\n        hostname: urlParsingNode.hostname,\n        port: urlParsingNode.port,\n        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?\n                  urlParsingNode.pathname :\n                  '/' + urlParsingNode.pathname\n      };\n    }\n\n    originURL = resolveURL(window.location.href);\n\n    /**\n    * Determine if a URL shares the same origin as the current location\n    *\n    * @param {String} requestURL The URL to test\n    * @returns {boolean} True if URL shares the same origin, otherwise false\n    */\n    return function isURLSameOrigin(requestURL) {\n      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;\n      return (parsed.protocol === originURL.protocol &&\n            parsed.host === originURL.host);\n    };\n  })() :\n\n  // Non standard browser envs (web workers, react-native) lack needed support.\n  (function nonStandardBrowserEnv() {\n    return function isURLSameOrigin() {\n      return true;\n    };\n  })()\n);\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/isURLSameOrigin.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ../utils */ \"./node_modules/axios/lib/utils.js\");\n\nmodule.exports = function normalizeHeaderName(headers, normalizedName) {\n  utils.forEach(headers, function processHeader(value, name) {\n    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {\n      headers[normalizedName] = value;\n      delete headers[name];\n    }\n  });\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/normalizeHeaderName.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\n\n// Headers whose duplicates are ignored by node\n// c.f. https://nodejs.org/api/http.html#http_message_headers\nvar ignoreDuplicateOf = [\n  'age', 'authorization', 'content-length', 'content-type', 'etag',\n  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',\n  'last-modified', 'location', 'max-forwards', 'proxy-authorization',\n  'referer', 'retry-after', 'user-agent'\n];\n\n/**\n * Parse headers into an object\n *\n * ```\n * Date: Wed, 27 Aug 2014 08:58:49 GMT\n * Content-Type: application/json\n * Connection: keep-alive\n * Transfer-Encoding: chunked\n * ```\n *\n * @param {String} headers Headers needing to be parsed\n * @returns {Object} Headers parsed into an object\n */\nmodule.exports = function parseHeaders(headers) {\n  var parsed = {};\n  var key;\n  var val;\n  var i;\n\n  if (!headers) { return parsed; }\n\n  utils.forEach(headers.split('\\n'), function parser(line) {\n    i = line.indexOf(':');\n    key = utils.trim(line.substr(0, i)).toLowerCase();\n    val = utils.trim(line.substr(i + 1));\n\n    if (key) {\n      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {\n        return;\n      }\n      if (key === 'set-cookie') {\n        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);\n      } else {\n        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;\n      }\n    }\n  });\n\n  return parsed;\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/parseHeaders.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Syntactic sugar for invoking a function and expanding an array for arguments.\n *\n * Common use case would be to use `Function.prototype.apply`.\n *\n *  ```js\n *  function f(x, y, z) {}\n *  var args = [1, 2, 3];\n *  f.apply(null, args);\n *  ```\n *\n * With `spread` this example can be re-written.\n *\n *  ```js\n *  spread(function(x, y, z) {})([1, 2, 3]);\n *  ```\n *\n * @param {Function} callback\n * @returns {Function}\n */\nmodule.exports = function spread(callback) {\n  return function wrap(arr) {\n    return callback.apply(null, arr);\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/spread.js?");

/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar bind = __webpack_require__(/*! ./helpers/bind */ \"./node_modules/axios/lib/helpers/bind.js\");\nvar isBuffer = __webpack_require__(/*! is-buffer */ \"./node_modules/is-buffer/index.js\");\n\n/*global toString:true*/\n\n// utils is a library of generic helper functions non-specific to axios\n\nvar toString = Object.prototype.toString;\n\n/**\n * Determine if a value is an Array\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is an Array, otherwise false\n */\nfunction isArray(val) {\n  return toString.call(val) === '[object Array]';\n}\n\n/**\n * Determine if a value is an ArrayBuffer\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is an ArrayBuffer, otherwise false\n */\nfunction isArrayBuffer(val) {\n  return toString.call(val) === '[object ArrayBuffer]';\n}\n\n/**\n * Determine if a value is a FormData\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is an FormData, otherwise false\n */\nfunction isFormData(val) {\n  return (typeof FormData !== 'undefined') && (val instanceof FormData);\n}\n\n/**\n * Determine if a value is a view on an ArrayBuffer\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false\n */\nfunction isArrayBufferView(val) {\n  var result;\n  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {\n    result = ArrayBuffer.isView(val);\n  } else {\n    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);\n  }\n  return result;\n}\n\n/**\n * Determine if a value is a String\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a String, otherwise false\n */\nfunction isString(val) {\n  return typeof val === 'string';\n}\n\n/**\n * Determine if a value is a Number\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Number, otherwise false\n */\nfunction isNumber(val) {\n  return typeof val === 'number';\n}\n\n/**\n * Determine if a value is undefined\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if the value is undefined, otherwise false\n */\nfunction isUndefined(val) {\n  return typeof val === 'undefined';\n}\n\n/**\n * Determine if a value is an Object\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is an Object, otherwise false\n */\nfunction isObject(val) {\n  return val !== null && typeof val === 'object';\n}\n\n/**\n * Determine if a value is a Date\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Date, otherwise false\n */\nfunction isDate(val) {\n  return toString.call(val) === '[object Date]';\n}\n\n/**\n * Determine if a value is a File\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a File, otherwise false\n */\nfunction isFile(val) {\n  return toString.call(val) === '[object File]';\n}\n\n/**\n * Determine if a value is a Blob\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Blob, otherwise false\n */\nfunction isBlob(val) {\n  return toString.call(val) === '[object Blob]';\n}\n\n/**\n * Determine if a value is a Function\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Function, otherwise false\n */\nfunction isFunction(val) {\n  return toString.call(val) === '[object Function]';\n}\n\n/**\n * Determine if a value is a Stream\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Stream, otherwise false\n */\nfunction isStream(val) {\n  return isObject(val) && isFunction(val.pipe);\n}\n\n/**\n * Determine if a value is a URLSearchParams object\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a URLSearchParams object, otherwise false\n */\nfunction isURLSearchParams(val) {\n  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;\n}\n\n/**\n * Trim excess whitespace off the beginning and end of a string\n *\n * @param {String} str The String to trim\n * @returns {String} The String freed of excess whitespace\n */\nfunction trim(str) {\n  return str.replace(/^\\s*/, '').replace(/\\s*$/, '');\n}\n\n/**\n * Determine if we're running in a standard browser environment\n *\n * This allows axios to run in a web worker, and react-native.\n * Both environments support XMLHttpRequest, but not fully standard globals.\n *\n * web workers:\n *  typeof window -> undefined\n *  typeof document -> undefined\n *\n * react-native:\n *  navigator.product -> 'ReactNative'\n */\nfunction isStandardBrowserEnv() {\n  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {\n    return false;\n  }\n  return (\n    typeof window !== 'undefined' &&\n    typeof document !== 'undefined'\n  );\n}\n\n/**\n * Iterate over an Array or an Object invoking a function for each item.\n *\n * If `obj` is an Array callback will be called passing\n * the value, index, and complete array for each item.\n *\n * If 'obj' is an Object callback will be called passing\n * the value, key, and complete object for each property.\n *\n * @param {Object|Array} obj The object to iterate\n * @param {Function} fn The callback to invoke for each item\n */\nfunction forEach(obj, fn) {\n  // Don't bother if no value provided\n  if (obj === null || typeof obj === 'undefined') {\n    return;\n  }\n\n  // Force an array if not already something iterable\n  if (typeof obj !== 'object') {\n    /*eslint no-param-reassign:0*/\n    obj = [obj];\n  }\n\n  if (isArray(obj)) {\n    // Iterate over array values\n    for (var i = 0, l = obj.length; i < l; i++) {\n      fn.call(null, obj[i], i, obj);\n    }\n  } else {\n    // Iterate over object keys\n    for (var key in obj) {\n      if (Object.prototype.hasOwnProperty.call(obj, key)) {\n        fn.call(null, obj[key], key, obj);\n      }\n    }\n  }\n}\n\n/**\n * Accepts varargs expecting each argument to be an object, then\n * immutably merges the properties of each object and returns result.\n *\n * When multiple objects contain the same key the later object in\n * the arguments list will take precedence.\n *\n * Example:\n *\n * ```js\n * var result = merge({foo: 123}, {foo: 456});\n * console.log(result.foo); // outputs 456\n * ```\n *\n * @param {Object} obj1 Object to merge\n * @returns {Object} Result of all merge properties\n */\nfunction merge(/* obj1, obj2, obj3, ... */) {\n  var result = {};\n  function assignValue(val, key) {\n    if (typeof result[key] === 'object' && typeof val === 'object') {\n      result[key] = merge(result[key], val);\n    } else {\n      result[key] = val;\n    }\n  }\n\n  for (var i = 0, l = arguments.length; i < l; i++) {\n    forEach(arguments[i], assignValue);\n  }\n  return result;\n}\n\n/**\n * Extends object a by mutably adding to it the properties of object b.\n *\n * @param {Object} a The object to be extended\n * @param {Object} b The object to copy properties from\n * @param {Object} thisArg The object to bind function to\n * @return {Object} The resulting value of object a\n */\nfunction extend(a, b, thisArg) {\n  forEach(b, function assignValue(val, key) {\n    if (thisArg && typeof val === 'function') {\n      a[key] = bind(val, thisArg);\n    } else {\n      a[key] = val;\n    }\n  });\n  return a;\n}\n\nmodule.exports = {\n  isArray: isArray,\n  isArrayBuffer: isArrayBuffer,\n  isBuffer: isBuffer,\n  isFormData: isFormData,\n  isArrayBufferView: isArrayBufferView,\n  isString: isString,\n  isNumber: isNumber,\n  isObject: isObject,\n  isUndefined: isUndefined,\n  isDate: isDate,\n  isFile: isFile,\n  isBlob: isBlob,\n  isFunction: isFunction,\n  isStream: isStream,\n  isURLSearchParams: isURLSearchParams,\n  isStandardBrowserEnv: isStandardBrowserEnv,\n  forEach: forEach,\n  merge: merge,\n  extend: extend,\n  trim: trim\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/utils.js?");

/***/ }),

/***/ "./node_modules/axios/package.json":
/*!*****************************************!*\
  !*** ./node_modules/axios/package.json ***!
  \*****************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, browser, bugs, bundleDependencies, bundlesize, dependencies, deprecated, description, devDependencies, homepage, keywords, license, main, name, repository, scripts, typings, version, default */
/***/ (function(module) {

eval("module.exports = {\"_from\":\"axios\",\"_id\":\"axios@0.18.0\",\"_inBundle\":false,\"_integrity\":\"sha1-MtU+SFHv3AoRmTts0AB4nXDAUQI=\",\"_location\":\"/axios\",\"_phantomChildren\":{},\"_requested\":{\"type\":\"tag\",\"registry\":true,\"raw\":\"axios\",\"name\":\"axios\",\"escapedName\":\"axios\",\"rawSpec\":\"\",\"saveSpec\":null,\"fetchSpec\":\"latest\"},\"_requiredBy\":[\"#USER\",\"/\",\"/tago\"],\"_resolved\":\"https://registry.npmjs.org/axios/-/axios-0.18.0.tgz\",\"_shasum\":\"32d53e4851efdc0a11993b6cd000789d70c05102\",\"_spec\":\"axios\",\"_where\":\"/Users/vitorfdl/Projects/analysis-pole\",\"author\":{\"name\":\"Matt Zabriskie\"},\"browser\":{\"./lib/adapters/http.js\":\"./lib/adapters/xhr.js\"},\"bugs\":{\"url\":\"https://github.com/axios/axios/issues\"},\"bundleDependencies\":false,\"bundlesize\":[{\"path\":\"./dist/axios.min.js\",\"threshold\":\"5kB\"}],\"dependencies\":{\"follow-redirects\":\"^1.3.0\",\"is-buffer\":\"^1.1.5\"},\"deprecated\":false,\"description\":\"Promise based HTTP client for the browser and node.js\",\"devDependencies\":{\"bundlesize\":\"^0.5.7\",\"coveralls\":\"^2.11.9\",\"es6-promise\":\"^4.0.5\",\"grunt\":\"^1.0.1\",\"grunt-banner\":\"^0.6.0\",\"grunt-cli\":\"^1.2.0\",\"grunt-contrib-clean\":\"^1.0.0\",\"grunt-contrib-nodeunit\":\"^1.0.0\",\"grunt-contrib-watch\":\"^1.0.0\",\"grunt-eslint\":\"^19.0.0\",\"grunt-karma\":\"^2.0.0\",\"grunt-ts\":\"^6.0.0-beta.3\",\"grunt-webpack\":\"^1.0.18\",\"istanbul-instrumenter-loader\":\"^1.0.0\",\"jasmine-core\":\"^2.4.1\",\"karma\":\"^1.3.0\",\"karma-chrome-launcher\":\"^2.0.0\",\"karma-coverage\":\"^1.0.0\",\"karma-firefox-launcher\":\"^1.0.0\",\"karma-jasmine\":\"^1.0.2\",\"karma-jasmine-ajax\":\"^0.1.13\",\"karma-opera-launcher\":\"^1.0.0\",\"karma-safari-launcher\":\"^1.0.0\",\"karma-sauce-launcher\":\"^1.1.0\",\"karma-sinon\":\"^1.0.5\",\"karma-sourcemap-loader\":\"^0.3.7\",\"karma-webpack\":\"^1.7.0\",\"load-grunt-tasks\":\"^3.5.2\",\"minimist\":\"^1.2.0\",\"sinon\":\"^1.17.4\",\"typescript\":\"^2.0.3\",\"url-search-params\":\"^0.6.1\",\"webpack\":\"^1.13.1\",\"webpack-dev-server\":\"^1.14.1\"},\"homepage\":\"https://github.com/axios/axios\",\"keywords\":[\"xhr\",\"http\",\"ajax\",\"promise\",\"node\"],\"license\":\"MIT\",\"main\":\"index.js\",\"name\":\"axios\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/axios/axios.git\"},\"scripts\":{\"build\":\"NODE_ENV=production grunt build\",\"coveralls\":\"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js\",\"examples\":\"node ./examples/server.js\",\"postversion\":\"git push && git push --tags\",\"preversion\":\"npm test\",\"start\":\"node ./sandbox/server.js\",\"test\":\"grunt test && bundlesize\",\"version\":\"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json\"},\"typings\":\"./index.d.ts\",\"version\":\"0.18.0\"};\n\n//# sourceURL=webpack:///./node_modules/axios/package.json?");

/***/ }),

/***/ "./node_modules/follow-redirects/index.js":
/*!************************************************!*\
  !*** ./node_modules/follow-redirects/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var url = __webpack_require__(/*! url */ \"url\");\nvar URL = url.URL;\nvar http = __webpack_require__(/*! http */ \"http\");\nvar https = __webpack_require__(/*! https */ \"https\");\nvar assert = __webpack_require__(/*! assert */ \"assert\");\nvar Writable = __webpack_require__(/*! stream */ \"stream\").Writable;\nvar debug = __webpack_require__(/*! debug */ \"./node_modules/follow-redirects/node_modules/debug/src/index.js\")(\"follow-redirects\");\n\n// RFC7231§4.2.1: Of the request methods defined by this specification,\n// the GET, HEAD, OPTIONS, and TRACE methods are defined to be safe.\nvar SAFE_METHODS = { GET: true, HEAD: true, OPTIONS: true, TRACE: true };\n\n// Create handlers that pass events from native requests\nvar eventHandlers = Object.create(null);\n[\"abort\", \"aborted\", \"error\", \"socket\", \"timeout\"].forEach(function (event) {\n  eventHandlers[event] = function (arg) {\n    this._redirectable.emit(event, arg);\n  };\n});\n\n// An HTTP(S) request that can be redirected\nfunction RedirectableRequest(options, responseCallback) {\n  // Initialize the request\n  Writable.call(this);\n  options.headers = options.headers || {};\n  this._options = options;\n  this._ended = false;\n  this._ending = false;\n  this._redirectCount = 0;\n  this._redirects = [];\n  this._requestBodyLength = 0;\n  this._requestBodyBuffers = [];\n\n  // Since http.request treats host as an alias of hostname,\n  // but the url module interprets host as hostname plus port,\n  // eliminate the host property to avoid confusion.\n  if (options.host) {\n    // Use hostname if set, because it has precedence\n    if (!options.hostname) {\n      options.hostname = options.host;\n    }\n    delete options.host;\n  }\n\n  // Attach a callback if passed\n  if (responseCallback) {\n    this.on(\"response\", responseCallback);\n  }\n\n  // React to responses of native requests\n  var self = this;\n  this._onNativeResponse = function (response) {\n    self._processResponse(response);\n  };\n\n  // Complete the URL object when necessary\n  if (!options.pathname && options.path) {\n    var searchPos = options.path.indexOf(\"?\");\n    if (searchPos < 0) {\n      options.pathname = options.path;\n    }\n    else {\n      options.pathname = options.path.substring(0, searchPos);\n      options.search = options.path.substring(searchPos);\n    }\n  }\n\n  // Perform the first request\n  this._performRequest();\n}\nRedirectableRequest.prototype = Object.create(Writable.prototype);\n\n// Writes buffered data to the current native request\nRedirectableRequest.prototype.write = function (data, encoding, callback) {\n  // Writing is not allowed if end has been called\n  if (this._ending) {\n    throw new Error(\"write after end\");\n  }\n\n  // Validate input and shift parameters if necessary\n  if (!(typeof data === \"string\" || typeof data === \"object\" && (\"length\" in data))) {\n    throw new Error(\"data should be a string, Buffer or Uint8Array\");\n  }\n  if (typeof encoding === \"function\") {\n    callback = encoding;\n    encoding = null;\n  }\n\n  // Ignore empty buffers, since writing them doesn't invoke the callback\n  // https://github.com/nodejs/node/issues/22066\n  if (data.length === 0) {\n    if (callback) {\n      callback();\n    }\n    return;\n  }\n  // Only write when we don't exceed the maximum body length\n  if (this._requestBodyLength + data.length <= this._options.maxBodyLength) {\n    this._requestBodyLength += data.length;\n    this._requestBodyBuffers.push({ data: data, encoding: encoding });\n    this._currentRequest.write(data, encoding, callback);\n  }\n  // Error when we exceed the maximum body length\n  else {\n    this.emit(\"error\", new Error(\"Request body larger than maxBodyLength limit\"));\n    this.abort();\n  }\n};\n\n// Ends the current native request\nRedirectableRequest.prototype.end = function (data, encoding, callback) {\n  // Shift parameters if necessary\n  if (typeof data === \"function\") {\n    callback = data;\n    data = encoding = null;\n  }\n  else if (typeof encoding === \"function\") {\n    callback = encoding;\n    encoding = null;\n  }\n\n  // Write data if needed and end\n  if (!data) {\n    this._ended = this._ending = true;\n    this._currentRequest.end(null, null, callback);\n  }\n  else {\n    var self = this;\n    var currentRequest = this._currentRequest;\n    this.write(data, encoding, function () {\n      self._ended = true;\n      currentRequest.end(null, null, callback);\n    });\n    this._ending = true;\n  }\n};\n\n// Sets a header value on the current native request\nRedirectableRequest.prototype.setHeader = function (name, value) {\n  this._options.headers[name] = value;\n  this._currentRequest.setHeader(name, value);\n};\n\n// Clears a header value on the current native request\nRedirectableRequest.prototype.removeHeader = function (name) {\n  delete this._options.headers[name];\n  this._currentRequest.removeHeader(name);\n};\n\n// Global timeout for all underlying requests\nRedirectableRequest.prototype.setTimeout = function (msecs, callback) {\n  if (callback) {\n    this.once(\"timeout\", callback);\n  }\n\n  if (this.socket) {\n    startTimer(this, msecs);\n  }\n  else {\n    var self = this;\n    this._currentRequest.once(\"socket\", function () {\n      startTimer(self, msecs);\n    });\n  }\n\n  this.once(\"response\", clearTimer);\n  this.once(\"error\", clearTimer);\n\n  return this;\n};\n\nfunction startTimer(request, msecs) {\n  clearTimeout(request._timeout);\n  request._timeout = setTimeout(function () {\n    request.emit(\"timeout\");\n  }, msecs);\n}\n\nfunction clearTimer() {\n  clearTimeout(this._timeout);\n}\n\n// Proxy all other public ClientRequest methods\n[\n  \"abort\", \"flushHeaders\", \"getHeader\",\n  \"setNoDelay\", \"setSocketKeepAlive\",\n].forEach(function (method) {\n  RedirectableRequest.prototype[method] = function (a, b) {\n    return this._currentRequest[method](a, b);\n  };\n});\n\n// Proxy all public ClientRequest properties\n[\"aborted\", \"connection\", \"socket\"].forEach(function (property) {\n  Object.defineProperty(RedirectableRequest.prototype, property, {\n    get: function () { return this._currentRequest[property]; },\n  });\n});\n\n// Executes the next native request (initial or redirect)\nRedirectableRequest.prototype._performRequest = function () {\n  // Load the native protocol\n  var protocol = this._options.protocol;\n  var nativeProtocol = this._options.nativeProtocols[protocol];\n  if (!nativeProtocol) {\n    this.emit(\"error\", new Error(\"Unsupported protocol \" + protocol));\n    return;\n  }\n\n  // If specified, use the agent corresponding to the protocol\n  // (HTTP and HTTPS use different types of agents)\n  if (this._options.agents) {\n    var scheme = protocol.substr(0, protocol.length - 1);\n    this._options.agent = this._options.agents[scheme];\n  }\n\n  // Create the native request\n  var request = this._currentRequest =\n        nativeProtocol.request(this._options, this._onNativeResponse);\n  this._currentUrl = url.format(this._options);\n\n  // Set up event handlers\n  request._redirectable = this;\n  for (var event in eventHandlers) {\n    /* istanbul ignore else */\n    if (event) {\n      request.on(event, eventHandlers[event]);\n    }\n  }\n\n  // End a redirected request\n  // (The first request must be ended explicitly with RedirectableRequest#end)\n  if (this._isRedirect) {\n    // Write the request entity and end.\n    var i = 0;\n    var self = this;\n    var buffers = this._requestBodyBuffers;\n    (function writeNext(error) {\n      // Only write if this request has not been redirected yet\n      /* istanbul ignore else */\n      if (request === self._currentRequest) {\n        // Report any write errors\n        /* istanbul ignore if */\n        if (error) {\n          self.emit(\"error\", error);\n        }\n        // Write the next buffer if there are still left\n        else if (i < buffers.length) {\n          var buffer = buffers[i++];\n          /* istanbul ignore else */\n          if (!request.finished) {\n            request.write(buffer.data, buffer.encoding, writeNext);\n          }\n        }\n        // End the request if `end` has been called on us\n        else if (self._ended) {\n          request.end();\n        }\n      }\n    }());\n  }\n};\n\n// Processes a response from the current native request\nRedirectableRequest.prototype._processResponse = function (response) {\n  // Store the redirected response\n  if (this._options.trackRedirects) {\n    this._redirects.push({\n      url: this._currentUrl,\n      headers: response.headers,\n      statusCode: response.statusCode,\n    });\n  }\n\n  // RFC7231§6.4: The 3xx (Redirection) class of status code indicates\n  // that further action needs to be taken by the user agent in order to\n  // fulfill the request. If a Location header field is provided,\n  // the user agent MAY automatically redirect its request to the URI\n  // referenced by the Location field value,\n  // even if the specific status code is not understood.\n  var location = response.headers.location;\n  if (location && this._options.followRedirects !== false &&\n      response.statusCode >= 300 && response.statusCode < 400) {\n    // Abort the current request\n    this._currentRequest.removeAllListeners();\n    this._currentRequest.on(\"error\", noop);\n    this._currentRequest.abort();\n\n    // RFC7231§6.4: A client SHOULD detect and intervene\n    // in cyclical redirections (i.e., \"infinite\" redirection loops).\n    if (++this._redirectCount > this._options.maxRedirects) {\n      this.emit(\"error\", new Error(\"Max redirects exceeded.\"));\n      return;\n    }\n\n    // RFC7231§6.4: Automatic redirection needs to done with\n    // care for methods not known to be safe […],\n    // since the user might not wish to redirect an unsafe request.\n    // RFC7231§6.4.7: The 307 (Temporary Redirect) status code indicates\n    // that the target resource resides temporarily under a different URI\n    // and the user agent MUST NOT change the request method\n    // if it performs an automatic redirection to that URI.\n    var header;\n    var headers = this._options.headers;\n    if (response.statusCode !== 307 && !(this._options.method in SAFE_METHODS)) {\n      this._options.method = \"GET\";\n      // Drop a possible entity and headers related to it\n      this._requestBodyBuffers = [];\n      for (header in headers) {\n        if (/^content-/i.test(header)) {\n          delete headers[header];\n        }\n      }\n    }\n\n    // Drop the Host header, as the redirect might lead to a different host\n    if (!this._isRedirect) {\n      for (header in headers) {\n        if (/^host$/i.test(header)) {\n          delete headers[header];\n        }\n      }\n    }\n\n    // Perform the redirected request\n    var redirectUrl = url.resolve(this._currentUrl, location);\n    debug(\"redirecting to\", redirectUrl);\n    Object.assign(this._options, url.parse(redirectUrl));\n    this._isRedirect = true;\n    this._performRequest();\n\n    // Discard the remainder of the response to avoid waiting for data\n    response.destroy();\n  }\n  else {\n    // The response is not a redirect; return it as-is\n    response.responseUrl = this._currentUrl;\n    response.redirects = this._redirects;\n    this.emit(\"response\", response);\n\n    // Clean up\n    this._requestBodyBuffers = [];\n  }\n};\n\n// Wraps the key/value object of protocols with redirect functionality\nfunction wrap(protocols) {\n  // Default settings\n  var exports = {\n    maxRedirects: 21,\n    maxBodyLength: 10 * 1024 * 1024,\n  };\n\n  // Wrap each protocol\n  var nativeProtocols = {};\n  Object.keys(protocols).forEach(function (scheme) {\n    var protocol = scheme + \":\";\n    var nativeProtocol = nativeProtocols[protocol] = protocols[scheme];\n    var wrappedProtocol = exports[scheme] = Object.create(nativeProtocol);\n\n    // Executes a request, following redirects\n    wrappedProtocol.request = function (input, options, callback) {\n      // Parse parameters\n      if (typeof input === \"string\") {\n        var urlStr = input;\n        try {\n          input = urlToOptions(new URL(urlStr));\n        }\n        catch (err) {\n          /* istanbul ignore next */\n          input = url.parse(urlStr);\n        }\n      }\n      else if (URL && (input instanceof URL)) {\n        input = urlToOptions(input);\n      }\n      else {\n        callback = options;\n        options = input;\n        input = { protocol: protocol };\n      }\n      if (typeof options === \"function\") {\n        callback = options;\n        options = null;\n      }\n\n      // Set defaults\n      options = Object.assign({\n        maxRedirects: exports.maxRedirects,\n        maxBodyLength: exports.maxBodyLength,\n      }, input, options);\n      options.nativeProtocols = nativeProtocols;\n\n      assert.equal(options.protocol, protocol, \"protocol mismatch\");\n      debug(\"options\", options);\n      return new RedirectableRequest(options, callback);\n    };\n\n    // Executes a GET request, following redirects\n    wrappedProtocol.get = function (input, options, callback) {\n      var request = wrappedProtocol.request(input, options, callback);\n      request.end();\n      return request;\n    };\n  });\n  return exports;\n}\n\n/* istanbul ignore next */\nfunction noop() { /* empty */ }\n\n// from https://github.com/nodejs/node/blob/master/lib/internal/url.js\nfunction urlToOptions(urlObject) {\n  var options = {\n    protocol: urlObject.protocol,\n    hostname: urlObject.hostname.startsWith(\"[\") ?\n      /* istanbul ignore next */\n      urlObject.hostname.slice(1, -1) :\n      urlObject.hostname,\n    hash: urlObject.hash,\n    search: urlObject.search,\n    pathname: urlObject.pathname,\n    path: urlObject.pathname + urlObject.search,\n    href: urlObject.href,\n  };\n  if (urlObject.port !== \"\") {\n    options.port = Number(urlObject.port);\n  }\n  return options;\n}\n\n// Exports\nmodule.exports = wrap({ http: http, https: https });\nmodule.exports.wrap = wrap;\n\n\n//# sourceURL=webpack:///./node_modules/follow-redirects/index.js?");

/***/ }),

/***/ "./node_modules/follow-redirects/node_modules/debug/src/browser.js":
/*!*************************************************************************!*\
  !*** ./node_modules/follow-redirects/node_modules/debug/src/browser.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n/* eslint-env browser */\n\n/**\n * This is the web browser implementation of `debug()`.\n */\nexports.log = log;\nexports.formatArgs = formatArgs;\nexports.save = save;\nexports.load = load;\nexports.useColors = useColors;\nexports.storage = localstorage();\n/**\n * Colors.\n */\n\nexports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];\n/**\n * Currently only WebKit-based Web Inspectors, Firefox >= v31,\n * and the Firebug extension (any Firefox version) are known\n * to support \"%c\" CSS customizations.\n *\n * TODO: add a `localStorage` variable to explicitly enable/disable colors\n */\n// eslint-disable-next-line complexity\n\nfunction useColors() {\n  // NB: In an Electron preload script, document will be defined but not fully\n  // initialized. Since we know we're in Chrome, we'll just detect this case\n  // explicitly\n  if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {\n    return true;\n  } // Internet Explorer and Edge do not support colors.\n\n\n  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\\/(\\d+)/)) {\n    return false;\n  } // Is webkit? http://stackoverflow.com/a/16459606/376773\n  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632\n\n\n  return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773\n  typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?\n  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages\n  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\\/(\\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker\n  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\\/(\\d+)/);\n}\n/**\n * Colorize log arguments if enabled.\n *\n * @api public\n */\n\n\nfunction formatArgs(args) {\n  args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);\n\n  if (!this.useColors) {\n    return;\n  }\n\n  var c = 'color: ' + this.color;\n  args.splice(1, 0, c, 'color: inherit'); // The final \"%c\" is somewhat tricky, because there could be other\n  // arguments passed either before or after the %c, so we need to\n  // figure out the correct index to insert the CSS into\n\n  var index = 0;\n  var lastC = 0;\n  args[0].replace(/%[a-zA-Z%]/g, function (match) {\n    if (match === '%%') {\n      return;\n    }\n\n    index++;\n\n    if (match === '%c') {\n      // We only are interested in the *last* %c\n      // (the user may have provided their own)\n      lastC = index;\n    }\n  });\n  args.splice(lastC, 0, c);\n}\n/**\n * Invokes `console.log()` when available.\n * No-op when `console.log` is not a \"function\".\n *\n * @api public\n */\n\n\nfunction log() {\n  var _console;\n\n  // This hackery is required for IE8/9, where\n  // the `console.log` function doesn't have 'apply'\n  return (typeof console === \"undefined\" ? \"undefined\" : _typeof(console)) === 'object' && console.log && (_console = console).log.apply(_console, arguments);\n}\n/**\n * Save `namespaces`.\n *\n * @param {String} namespaces\n * @api private\n */\n\n\nfunction save(namespaces) {\n  try {\n    if (namespaces) {\n      exports.storage.setItem('debug', namespaces);\n    } else {\n      exports.storage.removeItem('debug');\n    }\n  } catch (error) {// Swallow\n    // XXX (@Qix-) should we be logging these?\n  }\n}\n/**\n * Load `namespaces`.\n *\n * @return {String} returns the previously persisted debug modes\n * @api private\n */\n\n\nfunction load() {\n  var r;\n\n  try {\n    r = exports.storage.getItem('debug');\n  } catch (error) {} // Swallow\n  // XXX (@Qix-) should we be logging these?\n  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG\n\n\n  if (!r && typeof process !== 'undefined' && 'env' in process) {\n    r = process.env.DEBUG;\n  }\n\n  return r;\n}\n/**\n * Localstorage attempts to return the localstorage.\n *\n * This is necessary because safari throws\n * when a user disables cookies/localstorage\n * and you attempt to access it.\n *\n * @return {LocalStorage}\n * @api private\n */\n\n\nfunction localstorage() {\n  try {\n    // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context\n    // The Browser also has localStorage in the global context.\n    return localStorage;\n  } catch (error) {// Swallow\n    // XXX (@Qix-) should we be logging these?\n  }\n}\n\nmodule.exports = __webpack_require__(/*! ./common */ \"./node_modules/follow-redirects/node_modules/debug/src/common.js\")(exports);\nvar formatters = module.exports.formatters;\n/**\n * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.\n */\n\nformatters.j = function (v) {\n  try {\n    return JSON.stringify(v);\n  } catch (error) {\n    return '[UnexpectedJSONParseError]: ' + error.message;\n  }\n};\n\n\n\n//# sourceURL=webpack:///./node_modules/follow-redirects/node_modules/debug/src/browser.js?");

/***/ }),

/***/ "./node_modules/follow-redirects/node_modules/debug/src/common.js":
/*!************************************************************************!*\
  !*** ./node_modules/follow-redirects/node_modules/debug/src/common.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * This is the common logic for both the Node.js and web browser\n * implementations of `debug()`.\n */\nfunction setup(env) {\n  createDebug.debug = createDebug;\n  createDebug.default = createDebug;\n  createDebug.coerce = coerce;\n  createDebug.disable = disable;\n  createDebug.enable = enable;\n  createDebug.enabled = enabled;\n  createDebug.humanize = __webpack_require__(/*! ms */ \"./node_modules/ms/index.js\");\n  Object.keys(env).forEach(function (key) {\n    createDebug[key] = env[key];\n  });\n  /**\n  * Active `debug` instances.\n  */\n\n  createDebug.instances = [];\n  /**\n  * The currently active debug mode names, and names to skip.\n  */\n\n  createDebug.names = [];\n  createDebug.skips = [];\n  /**\n  * Map of special \"%n\" handling functions, for the debug \"format\" argument.\n  *\n  * Valid key names are a single, lower or upper-case letter, i.e. \"n\" and \"N\".\n  */\n\n  createDebug.formatters = {};\n  /**\n  * Selects a color for a debug namespace\n  * @param {String} namespace The namespace string for the for the debug instance to be colored\n  * @return {Number|String} An ANSI color code for the given namespace\n  * @api private\n  */\n\n  function selectColor(namespace) {\n    var hash = 0;\n\n    for (var i = 0; i < namespace.length; i++) {\n      hash = (hash << 5) - hash + namespace.charCodeAt(i);\n      hash |= 0; // Convert to 32bit integer\n    }\n\n    return createDebug.colors[Math.abs(hash) % createDebug.colors.length];\n  }\n\n  createDebug.selectColor = selectColor;\n  /**\n  * Create a debugger with the given `namespace`.\n  *\n  * @param {String} namespace\n  * @return {Function}\n  * @api public\n  */\n\n  function createDebug(namespace) {\n    var prevTime;\n\n    function debug() {\n      // Disabled?\n      if (!debug.enabled) {\n        return;\n      }\n\n      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n        args[_key] = arguments[_key];\n      }\n\n      var self = debug; // Set `diff` timestamp\n\n      var curr = Number(new Date());\n      var ms = curr - (prevTime || curr);\n      self.diff = ms;\n      self.prev = prevTime;\n      self.curr = curr;\n      prevTime = curr;\n      args[0] = createDebug.coerce(args[0]);\n\n      if (typeof args[0] !== 'string') {\n        // Anything else let's inspect with %O\n        args.unshift('%O');\n      } // Apply any `formatters` transformations\n\n\n      var index = 0;\n      args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {\n        // If we encounter an escaped % then don't increase the array index\n        if (match === '%%') {\n          return match;\n        }\n\n        index++;\n        var formatter = createDebug.formatters[format];\n\n        if (typeof formatter === 'function') {\n          var val = args[index];\n          match = formatter.call(self, val); // Now we need to remove `args[index]` since it's inlined in the `format`\n\n          args.splice(index, 1);\n          index--;\n        }\n\n        return match;\n      }); // Apply env-specific formatting (colors, etc.)\n\n      createDebug.formatArgs.call(self, args);\n      var logFn = self.log || createDebug.log;\n      logFn.apply(self, args);\n    }\n\n    debug.namespace = namespace;\n    debug.enabled = createDebug.enabled(namespace);\n    debug.useColors = createDebug.useColors();\n    debug.color = selectColor(namespace);\n    debug.destroy = destroy;\n    debug.extend = extend; // Debug.formatArgs = formatArgs;\n    // debug.rawLog = rawLog;\n    // env-specific initialization logic for debug instances\n\n    if (typeof createDebug.init === 'function') {\n      createDebug.init(debug);\n    }\n\n    createDebug.instances.push(debug);\n    return debug;\n  }\n\n  function destroy() {\n    var index = createDebug.instances.indexOf(this);\n\n    if (index !== -1) {\n      createDebug.instances.splice(index, 1);\n      return true;\n    }\n\n    return false;\n  }\n\n  function extend(namespace, delimiter) {\n    return createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);\n  }\n  /**\n  * Enables a debug mode by namespaces. This can include modes\n  * separated by a colon and wildcards.\n  *\n  * @param {String} namespaces\n  * @api public\n  */\n\n\n  function enable(namespaces) {\n    createDebug.save(namespaces);\n    createDebug.names = [];\n    createDebug.skips = [];\n    var i;\n    var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\\s,]+/);\n    var len = split.length;\n\n    for (i = 0; i < len; i++) {\n      if (!split[i]) {\n        // ignore empty strings\n        continue;\n      }\n\n      namespaces = split[i].replace(/\\*/g, '.*?');\n\n      if (namespaces[0] === '-') {\n        createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));\n      } else {\n        createDebug.names.push(new RegExp('^' + namespaces + '$'));\n      }\n    }\n\n    for (i = 0; i < createDebug.instances.length; i++) {\n      var instance = createDebug.instances[i];\n      instance.enabled = createDebug.enabled(instance.namespace);\n    }\n  }\n  /**\n  * Disable debug output.\n  *\n  * @api public\n  */\n\n\n  function disable() {\n    createDebug.enable('');\n  }\n  /**\n  * Returns true if the given mode name is enabled, false otherwise.\n  *\n  * @param {String} name\n  * @return {Boolean}\n  * @api public\n  */\n\n\n  function enabled(name) {\n    if (name[name.length - 1] === '*') {\n      return true;\n    }\n\n    var i;\n    var len;\n\n    for (i = 0, len = createDebug.skips.length; i < len; i++) {\n      if (createDebug.skips[i].test(name)) {\n        return false;\n      }\n    }\n\n    for (i = 0, len = createDebug.names.length; i < len; i++) {\n      if (createDebug.names[i].test(name)) {\n        return true;\n      }\n    }\n\n    return false;\n  }\n  /**\n  * Coerce `val`.\n  *\n  * @param {Mixed} val\n  * @return {Mixed}\n  * @api private\n  */\n\n\n  function coerce(val) {\n    if (val instanceof Error) {\n      return val.stack || val.message;\n    }\n\n    return val;\n  }\n\n  createDebug.enable(createDebug.load());\n  return createDebug;\n}\n\nmodule.exports = setup;\n\n\n\n//# sourceURL=webpack:///./node_modules/follow-redirects/node_modules/debug/src/common.js?");

/***/ }),

/***/ "./node_modules/follow-redirects/node_modules/debug/src/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/follow-redirects/node_modules/debug/src/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Detect Electron renderer / nwjs process, which is node, but we should\n * treat as a browser.\n */\nif (typeof process === 'undefined' || process.type === 'renderer' || process.browser === true || process.__nwjs) {\n  module.exports = __webpack_require__(/*! ./browser.js */ \"./node_modules/follow-redirects/node_modules/debug/src/browser.js\");\n} else {\n  module.exports = __webpack_require__(/*! ./node.js */ \"./node_modules/follow-redirects/node_modules/debug/src/node.js\");\n}\n\n\n\n//# sourceURL=webpack:///./node_modules/follow-redirects/node_modules/debug/src/index.js?");

/***/ }),

/***/ "./node_modules/follow-redirects/node_modules/debug/src/node.js":
/*!**********************************************************************!*\
  !*** ./node_modules/follow-redirects/node_modules/debug/src/node.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Module dependencies.\n */\nvar tty = __webpack_require__(/*! tty */ \"tty\");\n\nvar util = __webpack_require__(/*! util */ \"util\");\n/**\n * This is the Node.js implementation of `debug()`.\n */\n\n\nexports.init = init;\nexports.log = log;\nexports.formatArgs = formatArgs;\nexports.save = save;\nexports.load = load;\nexports.useColors = useColors;\n/**\n * Colors.\n */\n\nexports.colors = [6, 2, 3, 4, 5, 1];\n\ntry {\n  // Optional dependency (as in, doesn't need to be installed, NOT like optionalDependencies in package.json)\n  // eslint-disable-next-line import/no-extraneous-dependencies\n  var supportsColor = __webpack_require__(/*! supports-color */ \"./node_modules/supports-color/index.js\");\n\n  if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {\n    exports.colors = [20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63, 68, 69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128, 129, 134, 135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 178, 179, 184, 185, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 214, 215, 220, 221];\n  }\n} catch (error) {} // Swallow - we only care if `supports-color` is available; it doesn't have to be.\n\n/**\n * Build up the default `inspectOpts` object from the environment variables.\n *\n *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js\n */\n\n\nexports.inspectOpts = Object.keys(process.env).filter(function (key) {\n  return /^debug_/i.test(key);\n}).reduce(function (obj, key) {\n  // Camel-case\n  var prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, function (_, k) {\n    return k.toUpperCase();\n  }); // Coerce string value into JS value\n\n  var val = process.env[key];\n\n  if (/^(yes|on|true|enabled)$/i.test(val)) {\n    val = true;\n  } else if (/^(no|off|false|disabled)$/i.test(val)) {\n    val = false;\n  } else if (val === 'null') {\n    val = null;\n  } else {\n    val = Number(val);\n  }\n\n  obj[prop] = val;\n  return obj;\n}, {});\n/**\n * Is stdout a TTY? Colored output is enabled when `true`.\n */\n\nfunction useColors() {\n  return 'colors' in exports.inspectOpts ? Boolean(exports.inspectOpts.colors) : tty.isatty(process.stderr.fd);\n}\n/**\n * Adds ANSI color escape codes if enabled.\n *\n * @api public\n */\n\n\nfunction formatArgs(args) {\n  var name = this.namespace,\n      useColors = this.useColors;\n\n  if (useColors) {\n    var c = this.color;\n    var colorCode = \"\\x1B[3\" + (c < 8 ? c : '8;5;' + c);\n    var prefix = \"  \".concat(colorCode, \";1m\").concat(name, \" \\x1B[0m\");\n    args[0] = prefix + args[0].split('\\n').join('\\n' + prefix);\n    args.push(colorCode + 'm+' + module.exports.humanize(this.diff) + \"\\x1B[0m\");\n  } else {\n    args[0] = getDate() + name + ' ' + args[0];\n  }\n}\n\nfunction getDate() {\n  if (exports.inspectOpts.hideDate) {\n    return '';\n  }\n\n  return new Date().toISOString() + ' ';\n}\n/**\n * Invokes `util.format()` with the specified arguments and writes to stderr.\n */\n\n\nfunction log() {\n  return process.stderr.write(util.format.apply(util, arguments) + '\\n');\n}\n/**\n * Save `namespaces`.\n *\n * @param {String} namespaces\n * @api private\n */\n\n\nfunction save(namespaces) {\n  if (namespaces) {\n    process.env.DEBUG = namespaces;\n  } else {\n    // If you set a process.env field to null or undefined, it gets cast to the\n    // string 'null' or 'undefined'. Just delete instead.\n    delete process.env.DEBUG;\n  }\n}\n/**\n * Load `namespaces`.\n *\n * @return {String} returns the previously persisted debug modes\n * @api private\n */\n\n\nfunction load() {\n  return process.env.DEBUG;\n}\n/**\n * Init logic for `debug` instances.\n *\n * Create a new `inspectOpts` object in case `useColors` is set\n * differently for a particular `debug` instance.\n */\n\n\nfunction init(debug) {\n  debug.inspectOpts = {};\n  var keys = Object.keys(exports.inspectOpts);\n\n  for (var i = 0; i < keys.length; i++) {\n    debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];\n  }\n}\n\nmodule.exports = __webpack_require__(/*! ./common */ \"./node_modules/follow-redirects/node_modules/debug/src/common.js\")(exports);\nvar formatters = module.exports.formatters;\n/**\n * Map %o to `util.inspect()`, all on a single line.\n */\n\nformatters.o = function (v) {\n  this.inspectOpts.colors = this.useColors;\n  return util.inspect(v, this.inspectOpts).replace(/\\s*\\n\\s*/g, ' ');\n};\n/**\n * Map %O to `util.inspect()`, allowing multiple lines if needed.\n */\n\n\nformatters.O = function (v) {\n  this.inspectOpts.colors = this.useColors;\n  return util.inspect(v, this.inspectOpts);\n};\n\n\n\n//# sourceURL=webpack:///./node_modules/follow-redirects/node_modules/debug/src/node.js?");

/***/ }),

/***/ "./node_modules/has-flag/index.js":
/*!****************************************!*\
  !*** ./node_modules/has-flag/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nmodule.exports = (flag, argv) => {\n\targv = argv || process.argv;\n\tconst prefix = flag.startsWith('-') ? '' : (flag.length === 1 ? '-' : '--');\n\tconst pos = argv.indexOf(prefix + flag);\n\tconst terminatorPos = argv.indexOf('--');\n\treturn pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);\n};\n\n\n//# sourceURL=webpack:///./node_modules/has-flag/index.js?");

/***/ }),

/***/ "./node_modules/is-buffer/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-buffer/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*!\n * Determine if an object is a Buffer\n *\n * @author   Feross Aboukhadijeh <https://feross.org>\n * @license  MIT\n */\n\n// The _isBuffer check is for Safari 5-7 support, because it's missing\n// Object.prototype.constructor. Remove this eventually\nmodule.exports = function (obj) {\n  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)\n}\n\nfunction isBuffer (obj) {\n  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)\n}\n\n// For Node v0.10 support. Remove this eventually.\nfunction isSlowBuffer (obj) {\n  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))\n}\n\n\n//# sourceURL=webpack:///./node_modules/is-buffer/index.js?");

/***/ }),

/***/ "./node_modules/ms/index.js":
/*!**********************************!*\
  !*** ./node_modules/ms/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Helpers.\n */\n\nvar s = 1000;\nvar m = s * 60;\nvar h = m * 60;\nvar d = h * 24;\nvar w = d * 7;\nvar y = d * 365.25;\n\n/**\n * Parse or format the given `val`.\n *\n * Options:\n *\n *  - `long` verbose formatting [false]\n *\n * @param {String|Number} val\n * @param {Object} [options]\n * @throws {Error} throw an error if val is not a non-empty string or a number\n * @return {String|Number}\n * @api public\n */\n\nmodule.exports = function(val, options) {\n  options = options || {};\n  var type = typeof val;\n  if (type === 'string' && val.length > 0) {\n    return parse(val);\n  } else if (type === 'number' && isNaN(val) === false) {\n    return options.long ? fmtLong(val) : fmtShort(val);\n  }\n  throw new Error(\n    'val is not a non-empty string or a valid number. val=' +\n      JSON.stringify(val)\n  );\n};\n\n/**\n * Parse the given `str` and return milliseconds.\n *\n * @param {String} str\n * @return {Number}\n * @api private\n */\n\nfunction parse(str) {\n  str = String(str);\n  if (str.length > 100) {\n    return;\n  }\n  var match = /^((?:\\d+)?\\-?\\d?\\.?\\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(\n    str\n  );\n  if (!match) {\n    return;\n  }\n  var n = parseFloat(match[1]);\n  var type = (match[2] || 'ms').toLowerCase();\n  switch (type) {\n    case 'years':\n    case 'year':\n    case 'yrs':\n    case 'yr':\n    case 'y':\n      return n * y;\n    case 'weeks':\n    case 'week':\n    case 'w':\n      return n * w;\n    case 'days':\n    case 'day':\n    case 'd':\n      return n * d;\n    case 'hours':\n    case 'hour':\n    case 'hrs':\n    case 'hr':\n    case 'h':\n      return n * h;\n    case 'minutes':\n    case 'minute':\n    case 'mins':\n    case 'min':\n    case 'm':\n      return n * m;\n    case 'seconds':\n    case 'second':\n    case 'secs':\n    case 'sec':\n    case 's':\n      return n * s;\n    case 'milliseconds':\n    case 'millisecond':\n    case 'msecs':\n    case 'msec':\n    case 'ms':\n      return n;\n    default:\n      return undefined;\n  }\n}\n\n/**\n * Short format for `ms`.\n *\n * @param {Number} ms\n * @return {String}\n * @api private\n */\n\nfunction fmtShort(ms) {\n  var msAbs = Math.abs(ms);\n  if (msAbs >= d) {\n    return Math.round(ms / d) + 'd';\n  }\n  if (msAbs >= h) {\n    return Math.round(ms / h) + 'h';\n  }\n  if (msAbs >= m) {\n    return Math.round(ms / m) + 'm';\n  }\n  if (msAbs >= s) {\n    return Math.round(ms / s) + 's';\n  }\n  return ms + 'ms';\n}\n\n/**\n * Long format for `ms`.\n *\n * @param {Number} ms\n * @return {String}\n * @api private\n */\n\nfunction fmtLong(ms) {\n  var msAbs = Math.abs(ms);\n  if (msAbs >= d) {\n    return plural(ms, msAbs, d, 'day');\n  }\n  if (msAbs >= h) {\n    return plural(ms, msAbs, h, 'hour');\n  }\n  if (msAbs >= m) {\n    return plural(ms, msAbs, m, 'minute');\n  }\n  if (msAbs >= s) {\n    return plural(ms, msAbs, s, 'second');\n  }\n  return ms + ' ms';\n}\n\n/**\n * Pluralization helper.\n */\n\nfunction plural(ms, msAbs, n, name) {\n  var isPlural = msAbs >= n * 1.5;\n  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');\n}\n\n\n//# sourceURL=webpack:///./node_modules/ms/index.js?");

/***/ }),

/***/ "./node_modules/supports-color/index.js":
/*!**********************************************!*\
  !*** ./node_modules/supports-color/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nconst os = __webpack_require__(/*! os */ \"os\");\nconst hasFlag = __webpack_require__(/*! has-flag */ \"./node_modules/has-flag/index.js\");\n\nconst env = process.env;\n\nlet forceColor;\nif (hasFlag('no-color') ||\n\thasFlag('no-colors') ||\n\thasFlag('color=false')) {\n\tforceColor = false;\n} else if (hasFlag('color') ||\n\thasFlag('colors') ||\n\thasFlag('color=true') ||\n\thasFlag('color=always')) {\n\tforceColor = true;\n}\nif ('FORCE_COLOR' in env) {\n\tforceColor = env.FORCE_COLOR.length === 0 || parseInt(env.FORCE_COLOR, 10) !== 0;\n}\n\nfunction translateLevel(level) {\n\tif (level === 0) {\n\t\treturn false;\n\t}\n\n\treturn {\n\t\tlevel,\n\t\thasBasic: true,\n\t\thas256: level >= 2,\n\t\thas16m: level >= 3\n\t};\n}\n\nfunction supportsColor(stream) {\n\tif (forceColor === false) {\n\t\treturn 0;\n\t}\n\n\tif (hasFlag('color=16m') ||\n\t\thasFlag('color=full') ||\n\t\thasFlag('color=truecolor')) {\n\t\treturn 3;\n\t}\n\n\tif (hasFlag('color=256')) {\n\t\treturn 2;\n\t}\n\n\tif (stream && !stream.isTTY && forceColor !== true) {\n\t\treturn 0;\n\t}\n\n\tconst min = forceColor ? 1 : 0;\n\n\tif (process.platform === 'win32') {\n\t\t// Node.js 7.5.0 is the first version of Node.js to include a patch to\n\t\t// libuv that enables 256 color output on Windows. Anything earlier and it\n\t\t// won't work. However, here we target Node.js 8 at minimum as it is an LTS\n\t\t// release, and Node.js 7 is not. Windows 10 build 10586 is the first Windows\n\t\t// release that supports 256 colors. Windows 10 build 14931 is the first release\n\t\t// that supports 16m/TrueColor.\n\t\tconst osRelease = os.release().split('.');\n\t\tif (\n\t\t\tNumber(process.versions.node.split('.')[0]) >= 8 &&\n\t\t\tNumber(osRelease[0]) >= 10 &&\n\t\t\tNumber(osRelease[2]) >= 10586\n\t\t) {\n\t\t\treturn Number(osRelease[2]) >= 14931 ? 3 : 2;\n\t\t}\n\n\t\treturn 1;\n\t}\n\n\tif ('CI' in env) {\n\t\tif (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI'].some(sign => sign in env) || env.CI_NAME === 'codeship') {\n\t\t\treturn 1;\n\t\t}\n\n\t\treturn min;\n\t}\n\n\tif ('TEAMCITY_VERSION' in env) {\n\t\treturn /^(9\\.(0*[1-9]\\d*)\\.|\\d{2,}\\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;\n\t}\n\n\tif (env.COLORTERM === 'truecolor') {\n\t\treturn 3;\n\t}\n\n\tif ('TERM_PROGRAM' in env) {\n\t\tconst version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);\n\n\t\tswitch (env.TERM_PROGRAM) {\n\t\t\tcase 'iTerm.app':\n\t\t\t\treturn version >= 3 ? 3 : 2;\n\t\t\tcase 'Apple_Terminal':\n\t\t\t\treturn 2;\n\t\t\t// No default\n\t\t}\n\t}\n\n\tif (/-256(color)?$/i.test(env.TERM)) {\n\t\treturn 2;\n\t}\n\n\tif (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {\n\t\treturn 1;\n\t}\n\n\tif ('COLORTERM' in env) {\n\t\treturn 1;\n\t}\n\n\tif (env.TERM === 'dumb') {\n\t\treturn min;\n\t}\n\n\treturn min;\n}\n\nfunction getSupportLevel(stream) {\n\tconst level = supportsColor(stream);\n\treturn translateLevel(level);\n}\n\nmodule.exports = {\n\tsupportsColor: getSupportLevel,\n\tstdout: getSupportLevel(process.stdout),\n\tstderr: getSupportLevel(process.stderr)\n};\n\n\n//# sourceURL=webpack:///./node_modules/supports-color/index.js?");

/***/ }),

/***/ "./project/weatherControl.js":
/*!***********************************!*\
  !*** ./project/weatherControl.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nconst TagoAnalysis = __webpack_require__(/*! tago/analysis */ \"tago/analysis\");\nconst TagoDevice   = __webpack_require__(/*! tago/device */ \"tago/device\");\nconst TagoUtils    = __webpack_require__(/*! tago/utils */ \"tago/utils\");\nconst moment       = __webpack_require__(/*! moment-timezone */ \"moment-timezone\");\nconst axios        = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nasync function getCityKey(api_key, latitude, longitude) {\n  const route = {\n    url: 'http://dataservice.accuweather.com/locations/v1/cities/geoposition/search',\n    method: 'get',\n    params: {\n      apikey: api_key,\n      q: `${latitude},${longitude}`,\n    },\n  };\n  const req = await axios(route);\n  const location = req.data;\n\n  return location.Key;\n}\n\nasync function getWeather(api_key, city_key, device) {\n  const url = `http://dataservice.accuweather.com/currentconditions/v1/${city_key}?apikey=${api_key}&language=pt-BR&details=true`;\n  const req = await axios.get(url);\n  const weather = req.data[0];\n  const serie = weather.EpochTime;\n  const time = moment().format('YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');\n  const tagodata = [{\n    variable: 'temperature',\n    value: weather.Temperature.Metric.Value,\n    unit: '°C',\n    serie,\n    time,\n  }, {\n    variable: 'humidity',\n    value: weather.RelativeHumidity,\n    unit: '%',\n    serie,\n    time,\n  }, {\n    variable: 'wind',\n    value: weather.Wind.Speed.Metric.Value,\n    unit: 'km/h',\n    serie,\n    time,\n  }];\n\n  device.insert(tagodata).then(console.log);\n}\n\nasync function UpdateDeviceWeather(api_key, token) {\n  const device = new TagoDevice(token);\n\n  let [location] = await device.find({ variable: 'location', qty: 1 });\n  if (!location) return;\n\n  location = location.location.coordinates;\n  const city_key = await getCityKey(api_key, location[1], location[0]);\n\n  await getWeather(api_key, city_key, device);\n}\n\nasync function handler(context) {\n  context.log('Running');\n\n  const environment = TagoUtils.env_to_obj(context.environment);\n  if (!environment.config_token) throw 'Missing config_token environment var';\n\n  const config_dev = new TagoDevice(environment.config_token);\n\n  const all_devices = await config_dev.find({ variable: 'pole_token', qty: 999 });\n  all_devices.forEach(x => UpdateDeviceWeather(environment.api_key, x.value));\n}\n\nasync function startAnalysis(context, scope) {\n  await handler(context, scope).then(() => {\n    context.log('Script end.');\n  }).catch((e) => {\n    console.log(e);\n    context.log(e.message || JSON.stringify(e));\n  });\n}\nmodule.exports = new TagoAnalysis(startAnalysis, 'your analysis token');\n\n\n//# sourceURL=webpack:///./project/weatherControl.js?");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"assert\");\n\n//# sourceURL=webpack:///external_%22assert%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"https\");\n\n//# sourceURL=webpack:///external_%22https%22?");

/***/ }),

/***/ "moment-timezone":
/*!***********************************************!*\
  !*** external "require(\"moment-timezone\")" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"moment-timezone\");\n\n//# sourceURL=webpack:///external_%22require(\\%22moment-timezone\\%22)%22?");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"os\");\n\n//# sourceURL=webpack:///external_%22os%22?");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"stream\");\n\n//# sourceURL=webpack:///external_%22stream%22?");

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

/***/ "tago/utils":
/*!******************************************!*\
  !*** external "require(\"tago/utils\")" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"tago/utils\");\n\n//# sourceURL=webpack:///external_%22require(\\%22tago/utils\\%22)%22?");

/***/ }),

/***/ "tty":
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"tty\");\n\n//# sourceURL=webpack:///external_%22tty%22?");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"url\");\n\n//# sourceURL=webpack:///external_%22url%22?");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"util\");\n\n//# sourceURL=webpack:///external_%22util%22?");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"zlib\");\n\n//# sourceURL=webpack:///external_%22zlib%22?");

/***/ })

/******/ });