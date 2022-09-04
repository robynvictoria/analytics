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

/***/ "./pages/races/[race].js":
/*!*******************************!*\
  !*** ./pages/races/[race].js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_DriverSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/DriverSelector */ \"./components/DriverSelector.js\");\n/* harmony import */ var _components_LineChart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/LineChart */ \"./components/LineChart.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar Race = function(param) {\n    var race = param.race;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), raceData = ref[0], setRaceData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), lapTimes = ref1[0], setLapTimes = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), laps = ref2[0], setLaps = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), driver = ref3[0], setDriver = ref3[1];\n    var convertToSeconds = function(time) {\n        var a = time.split(\":\");\n        var seconds = a[0] * 60 + +a[1];\n        return seconds;\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (driver) {\n            fetch(\"https://ergast.com/api/f1/2022/\".concat(race, \"/drivers/\").concat(driver, \"/laps.json\")).then(function(res) {\n                return res.json();\n            }).then(function(data) {\n                setRaceData(data);\n                console.log(data);\n                setTimeout(function() {\n                    console.log(\"hi\");\n                    var lapTimesArr = [];\n                    raceData.MRData.RaceTable.Races[0].Laps.map(function(lap) {\n                        return lap.Timings.map(function(time) {\n                            return lapTimesArr.push(convertToSeconds(time.time));\n                        });\n                    });\n                    setLapTimes(lapTimesArr);\n                    setLaps(raceData.MRData.RaceTable.Races[0].Laps.map(function(lap) {\n                        return lap.number;\n                    }));\n                }, [\n                    1000\n                ]);\n            });\n        }\n    }, [\n        driver\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"my-5 text-2xl font-bold\",\n                children: [\n                    \"Race number: \",\n                    race\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/robynellison/Documents/GitHub/f1-analytics/f1-analytics/pages/races/[race].js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, _this),\n            raceData && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LineChart__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                xAxisData: laps,\n                yAxisData: lapTimes,\n                driver: driver\n            }, void 0, false, {\n                fileName: \"/Users/robynellison/Documents/GitHub/f1-analytics/f1-analytics/pages/races/[race].js\",\n                lineNumber: 57,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DriverSelector__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                race: race,\n                setDriver: setDriver\n            }, void 0, false, {\n                fileName: \"/Users/robynellison/Documents/GitHub/f1-analytics/f1-analytics/pages/races/[race].js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/robynellison/Documents/GitHub/f1-analytics/f1-analytics/pages/races/[race].js\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, _this);\n};\n_s(Race, \"UUYC9u4QEEGu8m7jcKdMqvQ7wOU=\");\n_c = Race;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Race);\nvar _c;\n$RefreshReg$(_c, \"Race\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxJQUFJOzs7Ozs7cUJBQU07WUFDL0RDLFFBQVEsa0JBQ1AsOERBQUNILDZEQUFTO2dCQUFDcUMsU0FBUyxFQUFFOUIsSUFBSTtnQkFBRStCLFNBQVMsRUFBRWpDLFFBQVE7Z0JBQUVJLE1BQU0sRUFBRUEsTUFBTTs7Ozs7cUJBQUk7MEJBRXJFLDhEQUFDVixrRUFBYztnQkFBQ0csSUFBSSxFQUFFQSxJQUFJO2dCQUFFUSxTQUFTLEVBQUVBLFNBQVM7Ozs7O3FCQUFJOzs7Ozs7YUFDaEQsQ0FDTjtDQUNIO0dBakRLVCxJQUFJO0FBQUpBLEtBQUFBLElBQUk7O0FBbURWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmFjZXMvW3JhY2VdLmpzPzE0ZGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IERyaXZlclNlbGVjdG9yIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0RyaXZlclNlbGVjdG9yXCI7XG5pbXBvcnQgTGluZUNoYXJ0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xpbmVDaGFydFwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcmVxLCBxdWVyeSwgcGFyYW1zIH0pIHtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcmFjZTogcXVlcnkucmFjZSxcbiAgICB9LFxuICB9O1xufVxuXG5jb25zdCBSYWNlID0gKHsgcmFjZSB9KSA9PiB7XG4gIGNvbnN0IFtyYWNlRGF0YSwgc2V0UmFjZURhdGFdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtsYXBUaW1lcywgc2V0TGFwVGltZXNdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtsYXBzLCBzZXRMYXBzXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbZHJpdmVyLCBzZXREcml2ZXJdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgY29udmVydFRvU2Vjb25kcyA9ICh0aW1lKSA9PiB7XG4gICAgY29uc3QgYSA9IHRpbWUuc3BsaXQoXCI6XCIpO1xuICAgIGNvbnN0IHNlY29uZHMgPSBhWzBdICogNjAgKyArYVsxXTtcbiAgICByZXR1cm4gc2Vjb25kcztcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkcml2ZXIpIHtcbiAgICAgIGZldGNoKFxuICAgICAgICBgaHR0cHM6Ly9lcmdhc3QuY29tL2FwaS9mMS8yMDIyLyR7cmFjZX0vZHJpdmVycy8ke2RyaXZlcn0vbGFwcy5qc29uYFxuICAgICAgKVxuICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHNldFJhY2VEYXRhKGRhdGEpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJoaVwiKTtcbiAgICAgICAgICAgIGNvbnN0IGxhcFRpbWVzQXJyID0gW107XG5cbiAgICAgICAgICAgIHJhY2VEYXRhLk1SRGF0YS5SYWNlVGFibGUuUmFjZXNbMF0uTGFwcy5tYXAoKGxhcCkgPT5cbiAgICAgICAgICAgICAgbGFwLlRpbWluZ3MubWFwKCh0aW1lKSA9PlxuICAgICAgICAgICAgICAgIGxhcFRpbWVzQXJyLnB1c2goY29udmVydFRvU2Vjb25kcyh0aW1lLnRpbWUpKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgc2V0TGFwVGltZXMobGFwVGltZXNBcnIpO1xuXG4gICAgICAgICAgICBzZXRMYXBzKFxuICAgICAgICAgICAgICByYWNlRGF0YS5NUkRhdGEuUmFjZVRhYmxlLlJhY2VzWzBdLkxhcHMubWFwKChsYXApID0+IGxhcC5udW1iZXIpXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0sIFsxMDAwXSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSwgW2RyaXZlcl0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJteS01IHRleHQtMnhsIGZvbnQtYm9sZFwiPlJhY2UgbnVtYmVyOiB7cmFjZX08L2gxPlxuICAgICAge3JhY2VEYXRhICYmIChcbiAgICAgICAgPExpbmVDaGFydCB4QXhpc0RhdGE9e2xhcHN9IHlBeGlzRGF0YT17bGFwVGltZXN9IGRyaXZlcj17ZHJpdmVyfSAvPlxuICAgICAgKX1cbiAgICAgIDxEcml2ZXJTZWxlY3RvciByYWNlPXtyYWNlfSBzZXREcml2ZXI9e3NldERyaXZlcn0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJhY2U7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJEcml2ZXJTZWxlY3RvciIsIkxpbmVDaGFydCIsIlJhY2UiLCJyYWNlIiwicmFjZURhdGEiLCJzZXRSYWNlRGF0YSIsImxhcFRpbWVzIiwic2V0TGFwVGltZXMiLCJsYXBzIiwic2V0TGFwcyIsImRyaXZlciIsInNldERyaXZlciIsImNvbnZlcnRUb1NlY29uZHMiLCJ0aW1lIiwiYSIsInNwbGl0Iiwic2Vjb25kcyIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInNldFRpbWVvdXQiLCJsYXBUaW1lc0FyciIsIk1SRGF0YSIsIlJhY2VUYWJsZSIsIlJhY2VzIiwiTGFwcyIsIm1hcCIsImxhcCIsIlRpbWluZ3MiLCJwdXNoIiwibnVtYmVyIiwiZGl2IiwiaDEiLCJjbGFzc05hbWUiLCJ4QXhpc0RhdGEiLCJ5QXhpc0RhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/races/[race].js\n"));

/***/ })

});