/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(window["webpackJsonpcustom_elements_module_federation"] = window["webpackJsonpcustom_elements_module_federation"] || []).push([["modules_mf1_component_ts"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./modules/mf1/styles.css":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./modules/mf1/styles.css ***!
  \**********************************************************************/
/*! namespace exports */
/*! export default [provided] [maybe used (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used (runtime-defined)] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"input[type=text] {\\n    width: 100%;\\n    max-width: 400px;\\n    box-sizing: border-box;\\n    border: none;\\n    border-bottom: 2px solid silver;\\n    font-size: 20px;\\n    margin-bottom:20px;\\n    margin-top:20px;\\n}\\n\\nbutton {\\n    border: 2px solid silver;\\n    background-color: white;\\n    font-size: 16px;\\n    padding:10px;\\n    padding-left: 40px;\\n    padding-right: 40px;\\n    border-radius: 10px;\\n    margin-bottom:20px;\\n    margin-top:20px;\\n    cursor: pointer;\\n}\\n\\nbutton:active {\\n    border-color:black;\\n}\\n\\n#container {\\n    border: 2px darkred dashed;\\n    padding:20px;\\n}\\n\");\n\n//# sourceURL=webpack://custom-elements-module-federation/./modules/mf1/styles.css?./node_modules/raw-loader/dist/cjs.js");

/***/ }),

/***/ "./modules/mf1/component.ts":
/*!**********************************!*\
  !*** ./modules/mf1/component.ts ***!
  \**********************************/
/*! namespace exports */
/*! export elementName [provided] [maybe used (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.e, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"elementName\": () => /* binding */ elementName\n/* harmony export */ });\n/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ \"?dae6\");\n/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n// static imports do currently not work with shared libs,\n// hence the dynamic one inside an async IIFE below\n\nclass MicroFrontend1 extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        return __awaiter(this, void 0, void 0, function* () {\n            const styleText = __webpack_require__(/*! !raw-loader!./styles.css */ \"./node_modules/raw-loader/dist/cjs.js!./modules/mf1/styles.css\");\n            this.shadowRoot.innerHTML = `\n            <style>${styleText.default}</style>\n            <div id=\"container\">\n                <h1>MF1</h1>\n\n                <div>\n                    <input type=\"text\" placeholder=\"From\">\n                </div>\n                <div>\n                    <input type=\"text\" placeholder=\"To\">\n                </div>\n                <div>\n                    <button id=\"search\">Search</button>\n                    <button id=\"terms\">Terms...</button>\n                </div>\n            </div>\n        `;\n            const search = this.shadowRoot.getElementById('search');\n            const terms = this.shadowRoot.getElementById('terms');\n            const container = this.shadowRoot.getElementById('container');\n            // const rxjs = await require('rxjs');\n            rxjs__WEBPACK_IMPORTED_MODULE_0__.fromEvent(search, 'click').subscribe(() => {\n                alert('Not implemented for this demo!');\n            });\n            rxjs__WEBPACK_IMPORTED_MODULE_0__.fromEvent(terms, 'click').subscribe(() => __awaiter(this, void 0, void 0, function* () {\n                const module = yield __webpack_require__.e(/*! import() */ \"modules_mf1_lazy-load_ts\").then(__webpack_require__.bind(__webpack_require__, /*! ./lazy-load */ \"./modules/mf1/lazy-load.ts\"));\n                const elem = document.createElement(module.elementName);\n                container.appendChild(elem);\n            }));\n        });\n    }\n}\nconst elementName = 'micro-frontend-1';\ncustomElements.define(elementName, MicroFrontend1);\n\n\n\n//# sourceURL=webpack://custom-elements-module-federation/./modules/mf1/component.ts?");

/***/ })

}]);