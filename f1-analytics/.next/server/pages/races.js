"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/races";
exports.ids = ["pages/races"];
exports.modules = {

/***/ "./pages/races/index.js":
/*!******************************!*\
  !*** ./pages/races/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/outline */ \"@heroicons/react/outline\");\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Races = ()=>{\n    const { 0: raceData , 1: setRaceData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"http://ergast.com/api/f1/2022.json\").then((res)=>res.json()).then((data)=>setRaceData(data));\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold mb-5\",\n                children: \"2022 Season Races\"\n            }, void 0, false, {\n                fileName: \"/Users/robynellison/Documents/GitHub/f1-analytics/f1-analytics/pages/races/index.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: raceData && raceData.MRData.RaceTable.Races.map((race)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"my-2 flex items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.FlagIcon, {\n                                className: \"h-5 w-5 mr-2\"\n                            }, void 0, false, {\n                                fileName: \"/Users/robynellison/Documents/GitHub/f1-analytics/f1-analytics/pages/races/index.js\",\n                                lineNumber: 20,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"text-blue-600\",\n                                href: `/races/${race.round}`,\n                                children: [\n                                    race.raceName,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/robynellison/Documents/GitHub/f1-analytics/f1-analytics/pages/races/index.js\",\n                                lineNumber: 21,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, race.raceName, true, {\n                        fileName: \"/Users/robynellison/Documents/GitHub/f1-analytics/f1-analytics/pages/races/index.js\",\n                        lineNumber: 19,\n                        columnNumber: 13\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/robynellison/Documents/GitHub/f1-analytics/f1-analytics/pages/races/index.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/robynellison/Documents/GitHub/f1-analytics/f1-analytics/pages/races/index.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Races);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yYWNlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBNEM7QUFDUTtBQUVwRCxNQUFNRyxLQUFLLEdBQUcsSUFBTTtJQUNsQixNQUFNLEtBQUNDLFFBQVEsTUFBRUMsV0FBVyxNQUFJSiwrQ0FBUSxDQUFDLElBQUksQ0FBQztJQUU5Q0QsZ0RBQVMsQ0FBQyxJQUFNO1FBQ2RNLEtBQUssQ0FBQyxvQ0FBb0MsQ0FBQyxDQUN4Q0MsSUFBSSxDQUFDLENBQUNDLEdBQUcsR0FBS0EsR0FBRyxDQUFDQyxJQUFJLEVBQUUsQ0FBQyxDQUN6QkYsSUFBSSxDQUFDLENBQUNHLElBQUksR0FBS0wsV0FBVyxDQUFDSyxJQUFJLENBQUMsQ0FBQyxDQUFDO0tBQ3RDLENBQUMsQ0FBQztJQUVILHFCQUNFLDhEQUFDQyxLQUFHOzswQkFDRiw4REFBQ0MsSUFBRTtnQkFBQ0MsU0FBUyxFQUFDLHlCQUF5QjswQkFBQyxtQkFBaUI7Ozs7O3lCQUFLOzBCQUM5RCw4REFBQ0MsSUFBRTswQkFDQVYsUUFBUSxJQUNQQSxRQUFRLENBQUNXLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDYixLQUFLLENBQUNjLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLGlCQUN2Qyw4REFBQ0MsSUFBRTt3QkFBcUJOLFNBQVMsRUFBQyx3QkFBd0I7OzBDQUN4RCw4REFBQ1gsOERBQVE7Z0NBQUNXLFNBQVMsRUFBQyxjQUFjOzs7Ozt5Q0FBRzswQ0FDckMsOERBQUNPLEdBQUM7Z0NBQUNQLFNBQVMsRUFBQyxlQUFlO2dDQUFDUSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUVILElBQUksQ0FBQ0ksS0FBSyxDQUFDLENBQUM7O29DQUN0REosSUFBSSxDQUFDSyxRQUFRO29DQUFFLEdBQUc7Ozs7Ozt5Q0FDakI7O3VCQUpHTCxJQUFJLENBQUNLLFFBQVE7Ozs7aUNBS2pCLENBQ0w7Ozs7O3lCQUNEOzs7Ozs7aUJBQ0QsQ0FDTjtDQUNIO0FBRUQsaUVBQWVwQixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mMS1hbmFseXRpY3MvLi9wYWdlcy9yYWNlcy9pbmRleC5qcz84YmFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZsYWdJY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZVwiO1xuXG5jb25zdCBSYWNlcyA9ICgpID0+IHtcbiAgY29uc3QgW3JhY2VEYXRhLCBzZXRSYWNlRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoKFwiaHR0cDovL2VyZ2FzdC5jb20vYXBpL2YxLzIwMjIuanNvblwiKVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiBzZXRSYWNlRGF0YShkYXRhKSk7XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgbWItNVwiPjIwMjIgU2Vhc29uIFJhY2VzPC9oMT5cbiAgICAgIDx1bD5cbiAgICAgICAge3JhY2VEYXRhICYmXG4gICAgICAgICAgcmFjZURhdGEuTVJEYXRhLlJhY2VUYWJsZS5SYWNlcy5tYXAoKHJhY2UpID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e3JhY2UucmFjZU5hbWV9IGNsYXNzTmFtZT1cIm15LTIgZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPEZsYWdJY29uIGNsYXNzTmFtZT1cImgtNSB3LTUgbXItMlwiIC8+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtYmx1ZS02MDBcIiBocmVmPXtgL3JhY2VzLyR7cmFjZS5yb3VuZH1gfT5cbiAgICAgICAgICAgICAgICB7cmFjZS5yYWNlTmFtZX17XCIgXCJ9XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmFjZXM7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJGbGFnSWNvbiIsIlJhY2VzIiwicmFjZURhdGEiLCJzZXRSYWNlRGF0YSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiZGl2IiwiaDEiLCJjbGFzc05hbWUiLCJ1bCIsIk1SRGF0YSIsIlJhY2VUYWJsZSIsIm1hcCIsInJhY2UiLCJsaSIsImEiLCJocmVmIiwicm91bmQiLCJyYWNlTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/races/index.js\n");

/***/ }),

/***/ "@heroicons/react/outline":
/*!*******************************************!*\
  !*** external "@heroicons/react/outline" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@heroicons/react/outline");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/races/index.js"));
module.exports = __webpack_exports__;

})();