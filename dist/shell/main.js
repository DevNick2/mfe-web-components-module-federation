/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./shell/styles.css":
/*!**************************!*\
  !*** ./shell/styles.css ***!
  \**************************/
/*! unknown exports (runtime-defined) */
/*! exports [maybe provided (runtime-defined)] [unused] */
/*! runtime requirements:  */
/***/ (() => {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://custom-elements-module-federation/./shell/styles.css?");

/***/ }),

/***/ "./shell/main.ts":
/*!***********************!*\
  !*** ./shell/main.ts ***!
  \***********************/
/*! unknown exports (runtime-defined) */
/*! exports [maybe provided (runtime-defined)] [maybe used (runtime-defined)] */
/*! runtime requirements: top-level-this-exports, __webpack_require__.e, __webpack_require__.t, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// static imports do currently not work with shared libs,\n// hence the dynamic one inside an async IIFE below\n//import * as rxjs from 'rxjs';\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nconst container = document.getElementById('container');\nconst shellLink = document.getElementById('shell');\nconst mf1Link = document.getElementById('mf1');\nconst mf2Link = document.getElementById('mf2');\nfunction removeFirstChild() {\n    if (container.firstChild) {\n        container.firstChild.remove();\n    }\n}\nfunction displayWelcomeMessage() {\n    removeFirstChild();\n    container.innerHTML = `<h1>Shell App!</h1>`;\n}\n(function () {\n    return __awaiter(this, void 0, void 0, function* () {\n        const rxjs = yield __webpack_require__.e(/*! import() */ \"-_dae6\").then(__webpack_require__.t.bind(__webpack_require__, /*! rxjs */ \"?dae6\", 7));\n        displayWelcomeMessage();\n        rxjs.fromEvent(mf1Link, 'click').subscribe(() => __awaiter(this, void 0, void 0, function* () {\n            const module = yield __webpack_require__.e(/*! import() */ \"-_f5c0\").then(__webpack_require__.t.bind(__webpack_require__, /*! mf1/component */ \"?f5c0\", 7));\n            const elem = document.createElement(module.elementName);\n            removeFirstChild();\n            container.appendChild(elem);\n        }));\n        rxjs.fromEvent(mf2Link, 'click').subscribe(() => __awaiter(this, void 0, void 0, function* () {\n            const module = yield __webpack_require__.e(/*! import() */ \"-_59e3\").then(__webpack_require__.t.bind(__webpack_require__, /*! mf2/component */ \"?59e3\", 7));\n            const elem = document.createElement(module.elementName);\n            removeFirstChild();\n            container.appendChild(elem);\n        }));\n        rxjs.fromEvent(shellLink, 'click').subscribe(() => {\n            displayWelcomeMessage();\n        });\n    });\n})();\n\n\n//# sourceURL=webpack://custom-elements-module-federation/./shell/main.ts?");

/***/ }),

/***/ "container-reference/mf1":
/*!**********************!*\
  !*** external "mf1" ***!
  \**********************/
/*! unknown exports (runtime-defined) */
/*! exports [maybe provided (runtime-defined)] [maybe used (runtime-defined)] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = mf1;\n\n//# sourceURL=webpack://custom-elements-module-federation/external_%22mf1%22?");

/***/ }),

/***/ "container-reference/mf2":
/*!**********************!*\
  !*** external "mf2" ***!
  \**********************/
/*! unknown exports (runtime-defined) */
/*! exports [maybe provided (runtime-defined)] [maybe used (runtime-defined)] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = mf2;\n\n//# sourceURL=webpack://custom-elements-module-federation/external_%22mf2%22?");

/***/ }),

/***/ "?3195":
/*!***********************************************!*\
  !*** remote override container-reference/mf1 ***!
  \***********************************************/
/*! unknown exports (runtime-defined) */
/*! exports [maybe provided (runtime-defined)] [maybe used (runtime-defined)] */
/*! runtime requirements: module, __webpack_require__.e, __webpack_require__, __webpack_require__.* */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("var external = __webpack_require__(\"container-reference/mf1\");\nexternal.override(Object.assign({\n\t\"rxjs\": () => {\n\t\treturn __webpack_require__.e(\"-_dae6\").then(() => {\n\t\t\treturn () => __webpack_require__(\"?dae6\")\n\t\t})\n\t}\n}, __webpack_require__.O));\nmodule.exports = external;\n\n//# sourceURL=webpack://custom-elements-module-federation/remote_override_container-reference/mf1?");

/***/ }),

/***/ "?7212":
/*!***********************************************!*\
  !*** remote override container-reference/mf2 ***!
  \***********************************************/
/*! unknown exports (runtime-defined) */
/*! exports [maybe provided (runtime-defined)] [maybe used (runtime-defined)] */
/*! runtime requirements: module, __webpack_require__.e, __webpack_require__, __webpack_require__.* */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("var external = __webpack_require__(\"container-reference/mf2\");\nexternal.override(Object.assign({\n\t\"rxjs\": () => {\n\t\treturn __webpack_require__.e(\"-_dae6\").then(() => {\n\t\t\treturn () => __webpack_require__(\"?dae6\")\n\t\t})\n\t}\n}, __webpack_require__.O));\nmodule.exports = external;\n\n//# sourceURL=webpack://custom-elements-module-federation/remote_override_container-reference/mf2?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			if(mode & 2 && typeof value == 'object' && value) {
/******/ 				for(const key in value) def[key] = () => value[key];
/******/ 			}
/******/ 			def['default'] = () => value;
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/overridables */
/******/ 	(() => {
/******/ 		__webpack_require__.O = {};
/******/ 		var chunkMapping = {
/******/ 			"-_dae6": [
/******/ 				"?dae6"
/******/ 			]
/******/ 		};
/******/ 		var idToNameMapping = {
/******/ 			"?dae6": "rxjs"
/******/ 		};
/******/ 		var fallbackMapping = {
/******/ 			"?dae6": () => {
/******/ 				return __webpack_require__.e("vendors-node_modules_rxjs_dist_esm5_index_js").then(() => () => __webpack_require__("./node_modules/rxjs/dist/esm5/index.js"))
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.f.overridables = (chunkId, promises) => {
/******/ 			if(__webpack_require__.o(chunkMapping, chunkId)) {
/******/ 				chunkMapping[chunkId].forEach((id) => {
/******/ 					if(__webpack_modules__[id]) return;
/******/ 					promises.push(Promise.resolve((__webpack_require__.O[idToNameMapping[id]] || fallbackMapping[id])()).then((factory) => {
/******/ 						__webpack_modules__[id] = (module) => {
/******/ 							module.exports = factory();
/******/ 						}
/******/ 					}))
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "http://localhost:5000/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/remotes loading */
/******/ 	(() => {
/******/ 		var chunkMapping = {
/******/ 			"-_f5c0": [
/******/ 				"?f5c0"
/******/ 			],
/******/ 			"-_59e3": [
/******/ 				"?59e3"
/******/ 			]
/******/ 		};
/******/ 		var idToExternalAndNameMapping = {
/******/ 			"?f5c0": [
/******/ 				"?3195",
/******/ 				"component"
/******/ 			],
/******/ 			"?59e3": [
/******/ 				"?7212",
/******/ 				"component"
/******/ 			]
/******/ 		};
/******/ 		__webpack_require__.f.remotes = (chunkId, promises) => {
/******/ 			if(__webpack_require__.o(chunkMapping, chunkId)) {
/******/ 				chunkMapping[chunkId].forEach((id) => {
/******/ 					if(__webpack_modules__[id]) return;
/******/ 					var data = idToExternalAndNameMapping[id];
/******/ 					promises.push(Promise.resolve(__webpack_require__(data[0]).get(data[1])).then((factory) => {
/******/ 						__webpack_modules__[id] = (module) => {
/******/ 							module.exports = factory();
/******/ 						}
/******/ 					}))
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if("vendors-node_modules_rxjs_dist_esm5_index_js" == chunkId) {
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => {
/******/ 								installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 							});
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							var loadingEnded = () => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) return installedChunkData[1];
/******/ 								}
/******/ 							};
/******/ 							var script = document.createElement('script');
/******/ 							var onScriptComplete;
/******/ 		
/******/ 							script.charset = 'utf-8';
/******/ 							script.timeout = 120;
/******/ 							if (__webpack_require__.nc) {
/******/ 								script.setAttribute("nonce", __webpack_require__.nc);
/******/ 							}
/******/ 							script.src = url;
/******/ 		
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							onScriptComplete = (event) => {
/******/ 								onScriptComplete = () => {
/******/ 		
/******/ 								}
/******/ 								// avoid mem leaks in IE.
/******/ 								script.onerror = script.onload = null;
/******/ 								clearTimeout(timeout);
/******/ 								var reportError = loadingEnded();
/******/ 								if(reportError) {
/******/ 									var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 									var realSrc = event && event.target && event.target.src;
/******/ 									error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 									error.name = 'ChunkLoadError';
/******/ 									error.type = errorType;
/******/ 									error.request = realSrc;
/******/ 									reportError(error);
/******/ 								}
/******/ 							}
/******/ 							;
/******/ 							var timeout = setTimeout(() => {
/******/ 								onScriptComplete({ type: 'timeout', target: script })
/******/ 							}, 120000);
/******/ 							script.onerror = script.onload = onScriptComplete;
/******/ 							document.head.appendChild(script);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 		
/******/ 						// no HMR
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no deferred startup
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		function webpackJsonpCallback(data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 		
/******/ 			var runtime = data[3];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 		};
/******/ 		
/******/ 		var jsonpArray = window["webpackJsonpcustom_elements_module_federation"] = window["webpackJsonpcustom_elements_module_federation"] || [];
/******/ 		var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 		jsonpArray.push = webpackJsonpCallback;
/******/ 		var parentJsonpFunction = oldJsonpFunction;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module factories are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./shell/main.ts");
/******/ 	__webpack_require__("./shell/styles.css");
/******/ })()
;