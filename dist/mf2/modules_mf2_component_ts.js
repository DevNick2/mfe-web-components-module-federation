/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(window["webpackJsonpcustom_elements_module_federation"] = window["webpackJsonpcustom_elements_module_federation"] || []).push([["modules_mf2_component_ts"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./modules/mf2/styles.css":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./modules/mf2/styles.css ***!
  \**********************************************************************/
/*! namespace exports */
/*! export default [provided] [maybe used (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used (runtime-defined)] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"input[type=text] {\\n    width: 100%;\\n    max-width: 400px;\\n    box-sizing: border-box;\\n    border: none;\\n    border-bottom: 2px solid silver;\\n    font-size: 20px;\\n    margin-bottom:20px;\\n    margin-top:20px;\\n}\\n\\nbutton {\\n    border: 2px solid silver;\\n    background-color: white;\\n    font-size: 16px;\\n    padding:10px;\\n    padding-left: 40px;\\n    padding-right: 40px;\\n    border-radius: 10px;\\n    margin-bottom:20px;\\n    margin-top:20px;\\n    cursor: pointer;\\n}\\n\\nbutton:active {\\n    border-color:black;\\n}\\n\\n#container {\\n    border: 2px darkred dashed;\\n    padding:20px;\\n}\\n\");\n\n//# sourceURL=webpack://custom-elements-module-federation/./modules/mf2/styles.css?./node_modules/raw-loader/dist/cjs.js");

/***/ }),

/***/ "./modules/mf2/component.ts":
/*!**********************************!*\
  !*** ./modules/mf2/component.ts ***!
  \**********************************/
/*! namespace exports */
/*! export elementName [provided] [maybe used (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used (runtime-defined)] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"elementName\": () => /* binding */ elementName\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nclass MicroFrontend2 extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        return __awaiter(this, void 0, void 0, function* () {\n            const styleText = __webpack_require__(/*! !raw-loader!./styles.css */ \"./node_modules/raw-loader/dist/cjs.js!./modules/mf2/styles.css\");\n            this.shadowRoot.innerHTML = `\n            <style>${styleText.default}</style>\n            <div id=\"container\">\n                <h1>MF2</h1>\n            </div>\n        `;\n            const container = this.shadowRoot.getElementById('container');\n        });\n    }\n}\nconst elementName = 'micro-frontend-2';\ncustomElements.define(elementName, MicroFrontend2);\n\n\n\n//# sourceURL=webpack://custom-elements-module-federation/./modules/mf2/component.ts?");

/***/ })

}]);