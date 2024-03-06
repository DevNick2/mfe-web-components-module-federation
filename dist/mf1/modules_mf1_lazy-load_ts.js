/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(window["webpackJsonpcustom_elements_module_federation"] = window["webpackJsonpcustom_elements_module_federation"] || []).push([["modules_mf1_lazy-load_ts"],{

/***/ "./modules/mf1/lazy-load.ts":
/*!**********************************!*\
  !*** ./modules/mf1/lazy-load.ts ***!
  \**********************************/
/*! namespace exports */
/*! export LazyComponent [provided] [maybe used (runtime-defined)] [usage prevents renaming] */
/*! export elementName [provided] [maybe used (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used (runtime-defined)] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LazyComponent\": () => /* binding */ LazyComponent,\n/* harmony export */   \"elementName\": () => /* binding */ elementName\n/* harmony export */ });\nclass LazyComponent extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n        this.shadowRoot.innerHTML = `<small>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</small>`;\n    }\n}\nconst elementName = 'lazy-component';\ncustomElements.define(elementName, LazyComponent);\n\n\n\n//# sourceURL=webpack://custom-elements-module-federation/./modules/mf1/lazy-load.ts?");

/***/ })

}]);