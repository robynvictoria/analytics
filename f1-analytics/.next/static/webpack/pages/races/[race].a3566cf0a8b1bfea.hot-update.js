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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js/auto */ \"./node_modules/chart.js/auto/auto.mjs\");\nvar _this = undefined;\n\n\n\nvar LineChart = function(param) {\n    var xAxisData = param.xAxisData, yAxisData = param.yAxisData, driver = param.driver;\n    var data = {\n        labels: xAxisData,\n        datasets: [\n            {\n                label: driver,\n                data: yAxisData,\n                fill: true,\n                backgroundColor: \"rgba(75,192,192,0.2)\",\n                borderColor: \"rgba(75,192,192,1)\"\n            }, \n        ]\n    };\n    var options = {\n        plugins: {\n            title: {\n                display: true,\n                text: \"Lap Times for \".concat(driver)\n            }\n        },\n        scales: {\n            y: [\n                {\n                    title: {\n                        display: true,\n                        text: \"Your Title\"\n                    }\n                }, \n            ]\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__.Line, {\n            options: options,\n            data: data\n        }, void 0, false, {\n            fileName: \"/Users/robynellison/Documents/GitHub/f1-analytics/f1-analytics/components/LineChart.js\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/robynellison/Documents/GitHub/f1-analytics/f1-analytics/components/LineChart.js\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, _this);\n};\n_c = LineChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LineChart);\nvar _c;\n$RefreshReg$(_c, \"LineChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xpbmVDaGFydC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUF1QztBQUNMO0FBRWxDLElBQU1FLFNBQVMsR0FBRyxnQkFBc0M7UUFBbkNDLFNBQVMsU0FBVEEsU0FBUyxFQUFFQyxTQUFTLFNBQVRBLFNBQVMsRUFBRUMsTUFBTSxTQUFOQSxNQUFNO0lBQy9DLElBQU1DLElBQUksR0FBRztRQUNYQyxNQUFNLEVBQUVKLFNBQVM7UUFDakJLLFFBQVEsRUFBRTtZQUNSO2dCQUNFQyxLQUFLLEVBQUVKLE1BQU07Z0JBQ2JDLElBQUksRUFBRUYsU0FBUztnQkFDZk0sSUFBSSxFQUFFLElBQUk7Z0JBQ1ZDLGVBQWUsRUFBRSxzQkFBc0I7Z0JBQ3ZDQyxXQUFXLEVBQUUsb0JBQW9CO2FBQ2xDO1NBQ0Y7S0FDRjtJQUVELElBQU1DLE9BQU8sR0FBRztRQUNkQyxPQUFPLEVBQUU7WUFDUEMsS0FBSyxFQUFFO2dCQUNMQyxPQUFPLEVBQUUsSUFBSTtnQkFDYkMsSUFBSSxFQUFFLGdCQUFlLENBQVMsT0FBUFosTUFBTSxDQUFFO2FBQ2hDO1NBQ0Y7UUFDRGEsTUFBTSxFQUFFO1lBQ05DLENBQUMsRUFBRTtnQkFDRDtvQkFDRUosS0FBSyxFQUFFO3dCQUNMQyxPQUFPLEVBQUUsSUFBSTt3QkFDYkMsSUFBSSxFQUFFLFlBQVk7cUJBQ25CO2lCQUNGO2FBQ0Y7U0FDRjtLQUNGO0lBRUQscUJBQ0UsOERBQUNHLEtBQUc7a0JBQ0YsNEVBQUNwQixpREFBSTtZQUFDYSxPQUFPLEVBQUVBLE9BQU87WUFBRVAsSUFBSSxFQUFFQSxJQUFJOzs7OztpQkFBSTs7Ozs7YUFDbEMsQ0FDTjtDQUNIO0FBdENLSixLQUFBQSxTQUFTO0FBd0NmLCtEQUFlQSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MaW5lQ2hhcnQuanM/ZTBhNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaW5lIH0gZnJvbSBcInJlYWN0LWNoYXJ0anMtMlwiO1xuaW1wb3J0IENoYXJ0IGZyb20gXCJjaGFydC5qcy9hdXRvXCI7XG5cbmNvbnN0IExpbmVDaGFydCA9ICh7IHhBeGlzRGF0YSwgeUF4aXNEYXRhLCBkcml2ZXIgfSkgPT4ge1xuICBjb25zdCBkYXRhID0ge1xuICAgIGxhYmVsczogeEF4aXNEYXRhLFxuICAgIGRhdGFzZXRzOiBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBkcml2ZXIsXG4gICAgICAgIGRhdGE6IHlBeGlzRGF0YSxcbiAgICAgICAgZmlsbDogdHJ1ZSxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoNzUsMTkyLDE5MiwwLjIpXCIsXG4gICAgICAgIGJvcmRlckNvbG9yOiBcInJnYmEoNzUsMTkyLDE5MiwxKVwiLFxuICAgICAgfSxcbiAgICBdLFxuICB9O1xuXG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgcGx1Z2luczoge1xuICAgICAgdGl0bGU6IHtcbiAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgdGV4dDogYExhcCBUaW1lcyBmb3IgJHtkcml2ZXJ9YCxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBzY2FsZXM6IHtcbiAgICAgIHk6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICAgICAgdGV4dDogXCJZb3VyIFRpdGxlXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8TGluZSBvcHRpb25zPXtvcHRpb25zfSBkYXRhPXtkYXRhfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGluZUNoYXJ0O1xuIl0sIm5hbWVzIjpbIkxpbmUiLCJDaGFydCIsIkxpbmVDaGFydCIsInhBeGlzRGF0YSIsInlBeGlzRGF0YSIsImRyaXZlciIsImRhdGEiLCJsYWJlbHMiLCJkYXRhc2V0cyIsImxhYmVsIiwiZmlsbCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwib3B0aW9ucyIsInBsdWdpbnMiLCJ0aXRsZSIsImRpc3BsYXkiLCJ0ZXh0Iiwic2NhbGVzIiwieSIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/LineChart.js\n"));

/***/ })

});