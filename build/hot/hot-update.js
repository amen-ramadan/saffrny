"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatesaffrny"]("main",{

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_js_bootstrap_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap.min.js */ \"./node_modules/bootstrap/dist/js/bootstrap.min.js\");\n/* harmony import */ var bootstrap_dist_js_bootstrap_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap_min_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jquery_dist_jquery_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery/dist/jquery.min.js */ \"./node_modules/jquery/dist/jquery.min.js\");\n/* harmony import */ var jquery_dist_jquery_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery_dist_jquery_min_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fortawesome_fontawesome_free_js_all_min_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/all.min.js */ \"./node_modules/@fortawesome/fontawesome-free/js/all.min.js\");\n/* harmony import */ var _fortawesome_fontawesome_free_js_all_min_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_all_min_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scss/style.scss */ \"./src/scss/style.scss\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst darkModeToggle = document.getElementById('darkModeToggle');\r\n\r\ndarkModeToggle.addEventListener('change', () => {\r\n  document.body.classList.toggle('dark-mode');\r\n  if (document.body.classList.contains('dark-mode')) {\r\n    localStorage.setItem(\"darkMode\", \"dark\");\r\n  } else {\r\n    localStorage.setItem(\"darkMode\", \"light\");\r\n  }\r\n});\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n  const savedMode = localStorage.getItem(\"darkMode\");\r\n  if (savedMode === \"dark\") {\r\n    document.body.classList.add(\"dark-mode\");\r\n    darkModeToggle.checked = true;\r\n  } else {\r\n    document.body.classList.remove(\"dark-mode\");\r\n    darkModeToggle.checked = false;\r\n  }\r\n});\r\n\r\n\r\n\r\n// هذا الكود تم وضعه داخل الملف  the-tourist-tour-2.html\r\n\r\n// function enlargeImage(index) {\r\n//   // تكبير الصورة المختارة في الكاروسيل\r\n//   document.querySelectorAll('.carousel-item').forEach(item => {\r\n//     item.classList.remove('active');\r\n//   });\r\n//   document.querySelectorAll('.carousel-item')[index - 1].classList.add('active');\r\n// }\n\n//# sourceURL=webpack://saffrny/./src/js/index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("bb719ee43b1074a4652f")
/******/ })();
/******/ 
/******/ }
);