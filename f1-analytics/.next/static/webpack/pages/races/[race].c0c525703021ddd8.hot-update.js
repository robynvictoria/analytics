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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_DriverSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/DriverSelector */ \"./components/DriverSelector.js\");\n/* harmony import */ var _components_LineChart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/LineChart */ \"./components/LineChart.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar Race = function(param) {\n    var race = param.race;\n    _s();\n    console.log(race);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), raceData = ref[0], setRaceData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), lapTimes = ref1[0], setLapTimes = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), laps = ref2[0], setLaps = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"alonso\"), driver = ref3[0], setDriver = ref3[1];\n    var convertToSeconds = function(time) {\n        var a = time.split(\":\");\n        var seconds = a[0] * 60 + +a[1];\n        return seconds;\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        fetch(\"https://ergast.com/api/f1/2022/\".concat(race, \"/drivers/\").concat(driver, \"/laps.json\")).then(function(res) {\n            return res.json();\n        }).then(function(data) {\n            setRaceData(data);\n            console.log(data);\n            if (raceData) {\n                var lapTimesArr = [];\n                raceData.MRData.RaceTable.Races[0].Laps.map(function(lap) {\n                    return lap.Timings.map(function(time) {\n                        return lapTimesArr.push(convertToSeconds(time.time));\n                    });\n                });\n                setLapTimes(lapTimesArr);\n                setLaps(raceData.MRData.RaceTable.Races[0].Laps.map(function(lap) {\n                    return lap.number;\n                }));\n            }\n        });\n        console.log(raceData);\n    }, [\n        driver\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Race number: \",\n                    race\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/robynellison/Documents/GitHub/f1-analytics/f1-analytics/pages/races/[race].js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, _this),\n            raceData && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LineChart__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                xAxisData: laps,\n                yAxisData: lapTimes,\n                driver: driver\n            }, void 0, false, {\n                fileName: \"/Users/robynellison/Documents/GitHub/f1-analytics/f1-analytics/pages/races/[race].js\",\n                lineNumber: 55,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DriverSelector__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                race: race,\n                driver: driver,\n                setDriver: setDriver\n            }, void 0, false, {\n                fileName: \"/Users/robynellison/Documents/GitHub/f1-analytics/f1-analytics/pages/races/[race].js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/robynellison/Documents/GitHub/f1-analytics/f1-analytics/pages/races/[race].js\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, _this);\n};\n_s(Race, \"LmnaRSNPrLC5/eQC+NbTfIsSbW0=\");\n_c = Race;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Race);\nvar _c;\n$RefreshReg$(_c, \"Race\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yYWNlcy9bcmFjZV0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7QUFBNEM7QUFDaUI7QUFDVjtBQVVuRCxJQUFNSSxJQUFJLEdBQUcsZ0JBQWM7UUFBWEMsSUFBSSxTQUFKQSxJQUFJOztJQUNsQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLElBQUksQ0FBQyxDQUFDO0lBRWxCLElBQWdDSixHQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxDQUFDLEVBQXZDTyxRQUFRLEdBQWlCUCxHQUFjLEdBQS9CLEVBQUVRLFdBQVcsR0FBSVIsR0FBYyxHQUFsQjtJQUM1QixJQUFnQ0EsSUFBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksQ0FBQyxFQUF2Q1MsUUFBUSxHQUFpQlQsSUFBYyxHQUEvQixFQUFFVSxXQUFXLEdBQUlWLElBQWMsR0FBbEI7SUFDNUIsSUFBd0JBLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLENBQUMsRUFBL0JXLElBQUksR0FBYVgsSUFBYyxHQUEzQixFQUFFWSxPQUFPLEdBQUlaLElBQWMsR0FBbEI7SUFDcEIsSUFBNEJBLElBQWtCLEdBQWxCQSwrQ0FBUSxDQUFDLFFBQVEsQ0FBQyxFQUF2Q2EsTUFBTSxHQUFlYixJQUFrQixHQUFqQyxFQUFFYyxTQUFTLEdBQUlkLElBQWtCLEdBQXRCO0lBRXhCLElBQU1lLGdCQUFnQixHQUFHLFNBQUNDLElBQUksRUFBSztRQUNqQyxJQUFNQyxDQUFDLEdBQUdELElBQUksQ0FBQ0UsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUN6QixJQUFNQyxPQUFPLEdBQUdGLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQ0EsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQyxPQUFPRSxPQUFPLENBQUM7S0FDaEI7SUFFRHBCLGdEQUFTLENBQUMsV0FBTTtRQUNkcUIsS0FBSyxDQUFDLGlDQUFnQyxDQUFrQlAsTUFBTSxDQUF0QlQsSUFBSSxFQUFDLFdBQVMsQ0FBUyxPQUFVLENBQWpCUyxNQUFNLEVBQUMsWUFBVSxDQUFDLENBQUMsQ0FDeEVRLElBQUksQ0FBQyxTQUFDQyxHQUFHO21CQUFLQSxHQUFHLENBQUNDLElBQUksRUFBRTtTQUFBLENBQUMsQ0FDekJGLElBQUksQ0FBQyxTQUFDRyxJQUFJLEVBQUs7WUFDZGhCLFdBQVcsQ0FBQ2dCLElBQUksQ0FBQyxDQUFDO1lBQ2xCbkIsT0FBTyxDQUFDQyxHQUFHLENBQUNrQixJQUFJLENBQUMsQ0FBQztZQUNsQixJQUFJakIsUUFBUSxFQUFFO2dCQUNaLElBQU1rQixXQUFXLEdBQUcsRUFBRTtnQkFFdEJsQixRQUFRLENBQUNtQixNQUFNLENBQUNDLFNBQVMsQ0FBQ0MsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxTQUFDQyxHQUFHOzJCQUM5Q0EsR0FBRyxDQUFDQyxPQUFPLENBQUNGLEdBQUcsQ0FBQyxTQUFDZCxJQUFJOytCQUNuQlMsV0FBVyxDQUFDUSxJQUFJLENBQUNsQixnQkFBZ0IsQ0FBQ0MsSUFBSSxDQUFDQSxJQUFJLENBQUMsQ0FBQztxQkFBQSxDQUM5QztpQkFBQSxDQUNGLENBQUM7Z0JBQ0ZOLFdBQVcsQ0FBQ2UsV0FBVyxDQUFDLENBQUM7Z0JBRXpCYixPQUFPLENBQ0xMLFFBQVEsQ0FBQ21CLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLFNBQUNDLEdBQUc7MkJBQUtBLEdBQUcsQ0FBQ0csTUFBTTtpQkFBQSxDQUFDLENBQ2pFLENBQUM7YUFDSDtTQUNGLENBQUMsQ0FBQztRQUNMN0IsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFFBQVEsQ0FBQyxDQUFDO0tBQ3ZCLEVBQUU7UUFBQ00sTUFBTTtLQUFDLENBQUMsQ0FBQztJQUViLHFCQUNFLDhEQUFDc0IsS0FBRzs7MEJBQ0YsOERBQUNDLElBQUU7O29CQUFDLGVBQWE7b0JBQUNoQyxJQUFJOzs7Ozs7cUJBQU07WUFDM0JHLFFBQVEsa0JBQ1AsOERBQUNMLDZEQUFTO2dCQUFDbUMsU0FBUyxFQUFFMUIsSUFBSTtnQkFBRTJCLFNBQVMsRUFBRTdCLFFBQVE7Z0JBQUVJLE1BQU0sRUFBRUEsTUFBTTs7Ozs7cUJBQUk7MEJBRXJFLDhEQUFDWixrRUFBYztnQkFBQ0csSUFBSSxFQUFFQSxJQUFJO2dCQUFFUyxNQUFNLEVBQUVBLE1BQU07Z0JBQUVDLFNBQVMsRUFBRUEsU0FBUzs7Ozs7cUJBQUk7Ozs7OzthQUNoRSxDQUNOO0NBQ0g7R0EvQ0tYLElBQUk7QUFBSkEsS0FBQUEsSUFBSTs7QUFpRFYsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9yYWNlcy9bcmFjZV0uanM/MTRkZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRHJpdmVyU2VsZWN0b3IgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvRHJpdmVyU2VsZWN0b3JcIjtcbmltcG9ydCBMaW5lQ2hhcnQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGluZUNoYXJ0XCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyByZXEsIHF1ZXJ5LCBwYXJhbXMgfSkge1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICByYWNlOiBxdWVyeS5yYWNlLFxuICAgIH0sXG4gIH07XG59XG5cbmNvbnN0IFJhY2UgPSAoeyByYWNlIH0pID0+IHtcbiAgY29uc29sZS5sb2cocmFjZSk7XG5cbiAgY29uc3QgW3JhY2VEYXRhLCBzZXRSYWNlRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2xhcFRpbWVzLCBzZXRMYXBUaW1lc10gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2xhcHMsIHNldExhcHNdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtkcml2ZXIsIHNldERyaXZlcl0gPSB1c2VTdGF0ZShcImFsb25zb1wiKTtcblxuICBjb25zdCBjb252ZXJ0VG9TZWNvbmRzID0gKHRpbWUpID0+IHtcbiAgICBjb25zdCBhID0gdGltZS5zcGxpdChcIjpcIik7XG4gICAgY29uc3Qgc2Vjb25kcyA9IGFbMF0gKiA2MCArICthWzFdO1xuICAgIHJldHVybiBzZWNvbmRzO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2goYGh0dHBzOi8vZXJnYXN0LmNvbS9hcGkvZjEvMjAyMi8ke3JhY2V9L2RyaXZlcnMvJHtkcml2ZXJ9L2xhcHMuanNvbmApXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgc2V0UmFjZURhdGEoZGF0YSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICBpZiAocmFjZURhdGEpIHtcbiAgICAgICAgICBjb25zdCBsYXBUaW1lc0FyciA9IFtdO1xuXG4gICAgICAgICAgcmFjZURhdGEuTVJEYXRhLlJhY2VUYWJsZS5SYWNlc1swXS5MYXBzLm1hcCgobGFwKSA9PlxuICAgICAgICAgICAgbGFwLlRpbWluZ3MubWFwKCh0aW1lKSA9PlxuICAgICAgICAgICAgICBsYXBUaW1lc0Fyci5wdXNoKGNvbnZlcnRUb1NlY29uZHModGltZS50aW1lKSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICApO1xuICAgICAgICAgIHNldExhcFRpbWVzKGxhcFRpbWVzQXJyKTtcblxuICAgICAgICAgIHNldExhcHMoXG4gICAgICAgICAgICByYWNlRGF0YS5NUkRhdGEuUmFjZVRhYmxlLlJhY2VzWzBdLkxhcHMubWFwKChsYXApID0+IGxhcC5udW1iZXIpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgY29uc29sZS5sb2cocmFjZURhdGEpO1xuICB9LCBbZHJpdmVyXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPlJhY2UgbnVtYmVyOiB7cmFjZX08L2gxPlxuICAgICAge3JhY2VEYXRhICYmIChcbiAgICAgICAgPExpbmVDaGFydCB4QXhpc0RhdGE9e2xhcHN9IHlBeGlzRGF0YT17bGFwVGltZXN9IGRyaXZlcj17ZHJpdmVyfSAvPlxuICAgICAgKX1cbiAgICAgIDxEcml2ZXJTZWxlY3RvciByYWNlPXtyYWNlfSBkcml2ZXI9e2RyaXZlcn0gc2V0RHJpdmVyPXtzZXREcml2ZXJ9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSYWNlO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRHJpdmVyU2VsZWN0b3IiLCJMaW5lQ2hhcnQiLCJSYWNlIiwicmFjZSIsImNvbnNvbGUiLCJsb2ciLCJyYWNlRGF0YSIsInNldFJhY2VEYXRhIiwibGFwVGltZXMiLCJzZXRMYXBUaW1lcyIsImxhcHMiLCJzZXRMYXBzIiwiZHJpdmVyIiwic2V0RHJpdmVyIiwiY29udmVydFRvU2Vjb25kcyIsInRpbWUiLCJhIiwic3BsaXQiLCJzZWNvbmRzIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJsYXBUaW1lc0FyciIsIk1SRGF0YSIsIlJhY2VUYWJsZSIsIlJhY2VzIiwiTGFwcyIsIm1hcCIsImxhcCIsIlRpbWluZ3MiLCJwdXNoIiwibnVtYmVyIiwiZGl2IiwiaDEiLCJ4QXhpc0RhdGEiLCJ5QXhpc0RhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/races/[race].js\n"));

/***/ })

});