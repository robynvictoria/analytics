"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/races/[race]",{

/***/ "./components/LineChart.js":
/*!*********************************!*\
  !*** ./components/LineChart.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js/auto */ \"./node_modules/chart.js/auto/auto.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar LineChart = function(param) {\n    var xAxisData = param.xAxisData, yAxisData = param.yAxisData;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), data = ref[0], setData = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {}, [\n        xAxisData,\n        yAxisData\n    ]);\n    setData({\n        labels: xAxisData,\n        datasets: [\n            {\n                label: \"Alonso\",\n                data: yAxisData,\n                fill: true,\n                backgroundColor: \"rgba(75,192,192,0.2)\",\n                borderColor: \"rgba(75,192,192,1)\"\n            },\n            {\n                label: \"Hamilton\",\n                data: yAxisData,\n                fill: true,\n                backgroundColor: \"rgba(90,192,192,0.2)\",\n                borderColor: \"#742774\"\n            }, \n        ]\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__.Line, {\n            // options={...}\n            data: data\n        }, void 0, false, {\n            fileName: \"/Users/robynellison/Documents/GitHub/f1-analytics/f1-analytics/components/LineChart.js\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/robynellison/Documents/GitHub/f1-analytics/f1-analytics/components/LineChart.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, _this);\n};\n_s(LineChart, \"guVkFVVSew6hH2g/XBdZM40Ur3I=\");\n_c = LineChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LineChart);\nvar _c;\n$RefreshReg$(_c, \"LineChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xpbmVDaGFydC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7OztBQUF1QztBQUNMO0FBQ1U7QUFFNUMsSUFBTUksU0FBUyxHQUFHLGdCQUE4QjtRQUEzQkMsU0FBUyxTQUFUQSxTQUFTLEVBQUVDLFNBQVMsU0FBVEEsU0FBUzs7SUFDdkMsSUFBd0JILEdBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLENBQUMsRUFBL0JJLElBQUksR0FBYUosR0FBYyxHQUEzQixFQUFFSyxPQUFPLEdBQUlMLEdBQWMsR0FBbEI7SUFFcEJELGdEQUFTLENBQUMsV0FBTSxFQUFFLEVBQUU7UUFBQ0csU0FBUztRQUFFQyxTQUFTO0tBQUMsQ0FBQyxDQUFDO0lBRTVDRSxPQUFPLENBQUM7UUFDTkMsTUFBTSxFQUFFSixTQUFTO1FBQ2pCSyxRQUFRLEVBQUU7WUFDUjtnQkFDRUMsS0FBSyxFQUFFLFFBQVE7Z0JBQ2ZKLElBQUksRUFBRUQsU0FBUztnQkFDZk0sSUFBSSxFQUFFLElBQUk7Z0JBQ1ZDLGVBQWUsRUFBRSxzQkFBc0I7Z0JBQ3ZDQyxXQUFXLEVBQUUsb0JBQW9CO2FBQ2xDO1lBQ0Q7Z0JBQ0VILEtBQUssRUFBRSxVQUFVO2dCQUNqQkosSUFBSSxFQUFFRCxTQUFTO2dCQUNmTSxJQUFJLEVBQUUsSUFBSTtnQkFDVkMsZUFBZSxFQUFFLHNCQUFzQjtnQkFDdkNDLFdBQVcsRUFBRSxTQUFTO2FBQ3ZCO1NBQ0Y7S0FDRixDQUFDLENBQUM7SUFFSCxxQkFDRSw4REFBQ0MsS0FBRztrQkFDRiw0RUFBQ2YsaURBQUk7WUFDSCxnQkFBZ0I7WUFDaEJPLElBQUksRUFBRUEsSUFBSTs7Ozs7aUJBQ1Y7Ozs7O2FBQ0UsQ0FDTjtDQUNIO0dBakNLSCxTQUFTO0FBQVRBLEtBQUFBLFNBQVM7QUFtQ2YsK0RBQWVBLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xpbmVDaGFydC5qcz9lMGE0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpbmUgfSBmcm9tIFwicmVhY3QtY2hhcnRqcy0yXCI7XG5pbXBvcnQgQ2hhcnQgZnJvbSBcImNoYXJ0LmpzL2F1dG9cIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgTGluZUNoYXJ0ID0gKHsgeEF4aXNEYXRhLCB5QXhpc0RhdGEgfSkgPT4ge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge30sIFt4QXhpc0RhdGEsIHlBeGlzRGF0YV0pO1xuXG4gIHNldERhdGEoe1xuICAgIGxhYmVsczogeEF4aXNEYXRhLFxuICAgIGRhdGFzZXRzOiBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIkFsb25zb1wiLFxuICAgICAgICBkYXRhOiB5QXhpc0RhdGEsXG4gICAgICAgIGZpbGw6IHRydWUsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDc1LDE5MiwxOTIsMC4yKVwiLFxuICAgICAgICBib3JkZXJDb2xvcjogXCJyZ2JhKDc1LDE5MiwxOTIsMSlcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIkhhbWlsdG9uXCIsXG4gICAgICAgIGRhdGE6IHlBeGlzRGF0YSxcbiAgICAgICAgZmlsbDogdHJ1ZSxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoOTAsMTkyLDE5MiwwLjIpXCIsXG4gICAgICAgIGJvcmRlckNvbG9yOiBcIiM3NDI3NzRcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPExpbmVcbiAgICAgICAgLy8gb3B0aW9ucz17Li4ufVxuICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExpbmVDaGFydDtcbiJdLCJuYW1lcyI6WyJMaW5lIiwiQ2hhcnQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxpbmVDaGFydCIsInhBeGlzRGF0YSIsInlBeGlzRGF0YSIsImRhdGEiLCJzZXREYXRhIiwibGFiZWxzIiwiZGF0YXNldHMiLCJsYWJlbCIsImZpbGwiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/LineChart.js\n"));

/***/ })

});