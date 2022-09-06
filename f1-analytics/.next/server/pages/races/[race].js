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
exports.id = "pages/races/[race]";
exports.ids = ["pages/races/[race]"];
exports.modules = {

/***/ "./components/DriverSelector.js":
/*!**************************************!*\
  !*** ./components/DriverSelector.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst DriverSelector = ({ setDriver , race , setLapInfo  })=>{\n    const { 0: drivers , 1: setDrivers  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(`http://ergast.com/api/f1/2022/${race}/drivers.json`).then((res)=>res.json()).then((data)=>setDrivers(data.MRData.DriverTable.Drivers.map((driver)=>driver.familyName)));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"my-5 text-xl font-bold\",\n                children: \"Select a Driver\"\n            }, void 0, false, {\n                fileName: \"/Users/robynellison/Documents/GitHub/f1-analytics/f1-analytics/components/DriverSelector.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4\",\n                children: drivers && drivers.map((driverName)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \" text-blue-600 my-2 cursor-pointer\",\n                        onClick: ()=>setDriver(driverName.toLowerCase()),\n                        children: driverName\n                    }, driverName, false, {\n                        fileName: \"/Users/robynellison/Documents/GitHub/f1-analytics/f1-analytics/components/DriverSelector.js\",\n                        lineNumber: 20,\n                        columnNumber: 13\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/robynellison/Documents/GitHub/f1-analytics/f1-analytics/components/DriverSelector.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/robynellison/Documents/GitHub/f1-analytics/f1-analytics/components/DriverSelector.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DriverSelector);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0RyaXZlclNlbGVjdG9yLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBNEM7QUFFNUMsTUFBTUUsY0FBYyxHQUFHLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxJQUFJLEdBQUVDLFVBQVUsR0FBRSxHQUFLO0lBQzFELE1BQU0sS0FBQ0MsT0FBTyxNQUFFQyxVQUFVLE1BQUlOLCtDQUFRLENBQUMsSUFBSSxDQUFDO0lBQzVDRCxnREFBUyxDQUFDLElBQU07UUFDZFEsS0FBSyxDQUFDLENBQUMsOEJBQThCLEVBQUVKLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUN4REssSUFBSSxDQUFDLENBQUNDLEdBQUcsR0FBS0EsR0FBRyxDQUFDQyxJQUFJLEVBQUUsQ0FBQyxDQUN6QkYsSUFBSSxDQUFDLENBQUNHLElBQUksR0FDVEwsVUFBVSxDQUNSSyxJQUFJLENBQUNDLE1BQU0sQ0FBQ0MsV0FBVyxDQUFDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxNQUFNLEdBQUtBLE1BQU0sQ0FBQ0MsVUFBVSxDQUFDLENBQ25FLENBQ0YsQ0FBQztLQUNMLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDUCxxQkFDRSw4REFBQ0MsS0FBRzs7MEJBQ0YsOERBQUNDLElBQUU7Z0JBQUNDLFNBQVMsRUFBQyx3QkFBd0I7MEJBQUMsaUJBQWU7Ozs7O3lCQUFLOzBCQUMzRCw4REFBQ0MsSUFBRTtnQkFBQ0QsU0FBUyxFQUFDLGdEQUFnRDswQkFDM0RmLE9BQU8sSUFDTkEsT0FBTyxDQUFDVSxHQUFHLENBQUMsQ0FBQ08sVUFBVSxpQkFDckIsOERBQUNDLElBQUU7d0JBRURILFNBQVMsRUFBQyxvQ0FBb0M7d0JBQzlDSSxPQUFPLEVBQUUsSUFBTXRCLFNBQVMsQ0FBQ29CLFVBQVUsQ0FBQ0csV0FBVyxFQUFFLENBQUM7a0NBRWpESCxVQUFVO3VCQUpOQSxVQUFVOzs7O2lDQUtaLENBQ0w7Ozs7O3lCQUNEOzs7Ozs7aUJBQ0QsQ0FDTjtDQUNIO0FBRUQsaUVBQWVyQixjQUFjLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mMS1hbmFseXRpY3MvLi9jb21wb25lbnRzL0RyaXZlclNlbGVjdG9yLmpzP2Y0MWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBEcml2ZXJTZWxlY3RvciA9ICh7IHNldERyaXZlciwgcmFjZSwgc2V0TGFwSW5mbyB9KSA9PiB7XG4gIGNvbnN0IFtkcml2ZXJzLCBzZXREcml2ZXJzXSA9IHVzZVN0YXRlKG51bGwpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoKGBodHRwOi8vZXJnYXN0LmNvbS9hcGkvZjEvMjAyMi8ke3JhY2V9L2RyaXZlcnMuanNvbmApXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+XG4gICAgICAgIHNldERyaXZlcnMoXG4gICAgICAgICAgZGF0YS5NUkRhdGEuRHJpdmVyVGFibGUuRHJpdmVycy5tYXAoKGRyaXZlcikgPT4gZHJpdmVyLmZhbWlseU5hbWUpXG4gICAgICAgIClcbiAgICAgICk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgyIGNsYXNzTmFtZT1cIm15LTUgdGV4dC14bCBmb250LWJvbGRcIj5TZWxlY3QgYSBEcml2ZXI8L2gyPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgc206Z3JpZC1jb2xzLTMgeGw6Z3JpZC1jb2xzLTRcIj5cbiAgICAgICAge2RyaXZlcnMgJiZcbiAgICAgICAgICBkcml2ZXJzLm1hcCgoZHJpdmVyTmFtZSkgPT4gKFxuICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgIGtleT17ZHJpdmVyTmFtZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIHRleHQtYmx1ZS02MDAgbXktMiBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldERyaXZlcihkcml2ZXJOYW1lLnRvTG93ZXJDYXNlKCkpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7ZHJpdmVyTmFtZX1cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRHJpdmVyU2VsZWN0b3I7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJEcml2ZXJTZWxlY3RvciIsInNldERyaXZlciIsInJhY2UiLCJzZXRMYXBJbmZvIiwiZHJpdmVycyIsInNldERyaXZlcnMiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsIk1SRGF0YSIsIkRyaXZlclRhYmxlIiwiRHJpdmVycyIsIm1hcCIsImRyaXZlciIsImZhbWlseU5hbWUiLCJkaXYiLCJoMiIsImNsYXNzTmFtZSIsInVsIiwiZHJpdmVyTmFtZSIsImxpIiwib25DbGljayIsInRvTG93ZXJDYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/DriverSelector.js\n");

/***/ }),

/***/ "./components/LineChart.js":
/*!*********************************!*\
  !*** ./components/LineChart.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartjs-2 */ \"react-chartjs-2\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js/auto */ \"chart.js/auto\");\n/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chart_js_auto__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst LineChart = ({ xAxisData , yAxisData , driver  })=>{\n    const data = {\n        labels: xAxisData,\n        datasets: [\n            {\n                label: driver,\n                data: yAxisData,\n                fill: true,\n                backgroundColor: \"rgba(75,192,192,0.2)\",\n                borderColor: \"rgba(75,192,192,1)\"\n            }, \n        ]\n    };\n    const options = {\n        plugins: {\n            title: {\n                display: true,\n                text: `Lap Times for ${driver}`\n            }\n        },\n        scales: {\n            y: [\n                {\n                    title: {\n                        display: true,\n                        text: \"Your Title\"\n                    }\n                }, \n            ]\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__.Line, {\n            options: options,\n            data: data\n        }, void 0, false, {\n            fileName: \"/Users/robynellison/Documents/GitHub/f1-analytics/f1-analytics/components/LineChart.js\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/robynellison/Documents/GitHub/f1-analytics/f1-analytics/components/LineChart.js\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LineChart);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xpbmVDaGFydC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBdUM7QUFDTDtBQUVsQyxNQUFNRSxTQUFTLEdBQUcsQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBRUMsTUFBTSxHQUFFLEdBQUs7SUFDdEQsTUFBTUMsSUFBSSxHQUFHO1FBQ1hDLE1BQU0sRUFBRUosU0FBUztRQUNqQkssUUFBUSxFQUFFO1lBQ1I7Z0JBQ0VDLEtBQUssRUFBRUosTUFBTTtnQkFDYkMsSUFBSSxFQUFFRixTQUFTO2dCQUNmTSxJQUFJLEVBQUUsSUFBSTtnQkFDVkMsZUFBZSxFQUFFLHNCQUFzQjtnQkFDdkNDLFdBQVcsRUFBRSxvQkFBb0I7YUFDbEM7U0FDRjtLQUNGO0lBRUQsTUFBTUMsT0FBTyxHQUFHO1FBQ2RDLE9BQU8sRUFBRTtZQUNQQyxLQUFLLEVBQUU7Z0JBQ0xDLE9BQU8sRUFBRSxJQUFJO2dCQUNiQyxJQUFJLEVBQUUsQ0FBQyxjQUFjLEVBQUVaLE1BQU0sQ0FBQyxDQUFDO2FBQ2hDO1NBQ0Y7UUFDRGEsTUFBTSxFQUFFO1lBQ05DLENBQUMsRUFBRTtnQkFDRDtvQkFDRUosS0FBSyxFQUFFO3dCQUNMQyxPQUFPLEVBQUUsSUFBSTt3QkFDYkMsSUFBSSxFQUFFLFlBQVk7cUJBQ25CO2lCQUNGO2FBQ0Y7U0FDRjtLQUNGO0lBRUQscUJBQ0UsOERBQUNHLEtBQUc7a0JBQ0YsNEVBQUNwQixpREFBSTtZQUFDYSxPQUFPLEVBQUVBLE9BQU87WUFBRVAsSUFBSSxFQUFFQSxJQUFJOzs7OztxQkFBSTs7Ozs7aUJBQ2xDLENBQ047Q0FDSDtBQUVELGlFQUFlSixTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mMS1hbmFseXRpY3MvLi9jb21wb25lbnRzL0xpbmVDaGFydC5qcz9lMGE0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpbmUgfSBmcm9tIFwicmVhY3QtY2hhcnRqcy0yXCI7XG5pbXBvcnQgQ2hhcnQgZnJvbSBcImNoYXJ0LmpzL2F1dG9cIjtcblxuY29uc3QgTGluZUNoYXJ0ID0gKHsgeEF4aXNEYXRhLCB5QXhpc0RhdGEsIGRyaXZlciB9KSA9PiB7XG4gIGNvbnN0IGRhdGEgPSB7XG4gICAgbGFiZWxzOiB4QXhpc0RhdGEsXG4gICAgZGF0YXNldHM6IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IGRyaXZlcixcbiAgICAgICAgZGF0YTogeUF4aXNEYXRhLFxuICAgICAgICBmaWxsOiB0cnVlLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSg3NSwxOTIsMTkyLDAuMilcIixcbiAgICAgICAgYm9yZGVyQ29sb3I6IFwicmdiYSg3NSwxOTIsMTkyLDEpXCIsXG4gICAgICB9LFxuICAgIF0sXG4gIH07XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBwbHVnaW5zOiB7XG4gICAgICB0aXRsZToge1xuICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICB0ZXh0OiBgTGFwIFRpbWVzIGZvciAke2RyaXZlcn1gLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHNjYWxlczoge1xuICAgICAgeTogW1xuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgICAgICB0ZXh0OiBcIllvdXIgVGl0bGVcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxMaW5lIG9wdGlvbnM9e29wdGlvbnN9IGRhdGE9e2RhdGF9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMaW5lQ2hhcnQ7XG4iXSwibmFtZXMiOlsiTGluZSIsIkNoYXJ0IiwiTGluZUNoYXJ0IiwieEF4aXNEYXRhIiwieUF4aXNEYXRhIiwiZHJpdmVyIiwiZGF0YSIsImxhYmVscyIsImRhdGFzZXRzIiwibGFiZWwiLCJmaWxsIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJvcHRpb25zIiwicGx1Z2lucyIsInRpdGxlIiwiZGlzcGxheSIsInRleHQiLCJzY2FsZXMiLCJ5IiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/LineChart.js\n");

/***/ }),

/***/ "./pages/races/[race].js":
/*!*******************************!*\
  !*** ./pages/races/[race].js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_DriverSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/DriverSelector */ \"./components/DriverSelector.js\");\n/* harmony import */ var _components_LineChart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/LineChart */ \"./components/LineChart.js\");\n\n\n\n\nasync function getServerSideProps({ req , query , params  }) {\n    return {\n        props: {\n            race: query.race\n        }\n    };\n}\nconst Race = ({ race  })=>{\n    const { 0: raceData , 1: setRaceData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { 0: lapTimes , 1: setLapTimes  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { 0: laps , 1: setLaps  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { 0: driver , 1: setDriver  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const convertToSeconds = (time)=>{\n        const a = time.split(\":\");\n        const seconds = a[0] * 60 + +a[1];\n        return seconds;\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (driver) {\n            fetch(`https://ergast.com/api/f1/2022/${race}/drivers/${driver}/laps.json`).then((res)=>res.json()).then((data)=>{\n                setRaceData(data);\n                console.log(raceData);\n                console.log(data);\n                if (raceData && raceData.MRData.RaceTable.Races[0].Laps) {\n                    setLapInfo();\n                }\n            });\n        }\n    }, [\n        driver\n    ]);\n    const setLapInfo = ()=>{\n        const lapTimesArr = [];\n        raceData.MRData.RaceTable.Races[0].Laps.map((lap)=>lap.Timings.map((time)=>lapTimesArr.push(convertToSeconds(time.time))));\n        setLapTimes(lapTimesArr);\n        setLaps(raceData.MRData.RaceTable.Races[0].Laps.map((lap)=>lap.number));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"my-5 text-2xl font-bold\",\n                children: [\n                    \"Race number: \",\n                    race\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/robynellison/Documents/GitHub/f1-analytics/f1-analytics/pages/races/[race].js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined),\n            raceData && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LineChart__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                xAxisData: laps,\n                yAxisData: lapTimes,\n                driver: driver\n            }, void 0, false, {\n                fileName: \"/Users/robynellison/Documents/GitHub/f1-analytics/f1-analytics/pages/races/[race].js\",\n                lineNumber: 57,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DriverSelector__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                race: race,\n                setDriver: setDriver\n            }, void 0, false, {\n                fileName: \"/Users/robynellison/Documents/GitHub/f1-analytics/f1-analytics/pages/races/[race].js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/robynellison/Documents/GitHub/f1-analytics/f1-analytics/pages/races/[race].js\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Race);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eUJBQXlCOztvQkFBQyxlQUFhO29CQUFDbkMsSUFBSTs7Ozs7O3lCQUFNO1lBQy9ERSxRQUFRLGtCQUNQLDhEQUFDUiw2REFBUztnQkFBQzBDLFNBQVMsRUFBRTlCLElBQUk7Z0JBQUUrQixTQUFTLEVBQUVqQyxRQUFRO2dCQUFFSSxNQUFNLEVBQUVBLE1BQU07Ozs7O3lCQUFJOzBCQUVyRSw4REFBQ2Ysa0VBQWM7Z0JBQUNPLElBQUksRUFBRUEsSUFBSTtnQkFBRVMsU0FBUyxFQUFFQSxTQUFTOzs7Ozt5QkFBSTs7Ozs7O2lCQUNoRCxDQUNOO0NBQ0g7QUFFRCxpRUFBZVIsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZjEtYW5hbHl0aWNzLy4vcGFnZXMvcmFjZXMvW3JhY2VdLmpzPzE0ZGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IERyaXZlclNlbGVjdG9yIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0RyaXZlclNlbGVjdG9yXCI7XG5pbXBvcnQgTGluZUNoYXJ0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xpbmVDaGFydFwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcmVxLCBxdWVyeSwgcGFyYW1zIH0pIHtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcmFjZTogcXVlcnkucmFjZSxcbiAgICB9LFxuICB9O1xufVxuXG5jb25zdCBSYWNlID0gKHsgcmFjZSB9KSA9PiB7XG4gIGNvbnN0IFtyYWNlRGF0YSwgc2V0UmFjZURhdGFdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtsYXBUaW1lcywgc2V0TGFwVGltZXNdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtsYXBzLCBzZXRMYXBzXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbZHJpdmVyLCBzZXREcml2ZXJdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgY29udmVydFRvU2Vjb25kcyA9ICh0aW1lKSA9PiB7XG4gICAgY29uc3QgYSA9IHRpbWUuc3BsaXQoXCI6XCIpO1xuICAgIGNvbnN0IHNlY29uZHMgPSBhWzBdICogNjAgKyArYVsxXTtcbiAgICByZXR1cm4gc2Vjb25kcztcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkcml2ZXIpIHtcbiAgICAgIGZldGNoKFxuICAgICAgICBgaHR0cHM6Ly9lcmdhc3QuY29tL2FwaS9mMS8yMDIyLyR7cmFjZX0vZHJpdmVycy8ke2RyaXZlcn0vbGFwcy5qc29uYFxuICAgICAgKVxuICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHNldFJhY2VEYXRhKGRhdGEpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJhY2VEYXRhKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICBpZiAocmFjZURhdGEgJiYgcmFjZURhdGEuTVJEYXRhLlJhY2VUYWJsZS5SYWNlc1swXS5MYXBzKSB7XG4gICAgICAgICAgICBzZXRMYXBJbmZvKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sIFtkcml2ZXJdKTtcblxuICBjb25zdCBzZXRMYXBJbmZvID0gKCkgPT4ge1xuICAgIGNvbnN0IGxhcFRpbWVzQXJyID0gW107XG5cbiAgICByYWNlRGF0YS5NUkRhdGEuUmFjZVRhYmxlLlJhY2VzWzBdLkxhcHMubWFwKChsYXApID0+XG4gICAgICBsYXAuVGltaW5ncy5tYXAoKHRpbWUpID0+IGxhcFRpbWVzQXJyLnB1c2goY29udmVydFRvU2Vjb25kcyh0aW1lLnRpbWUpKSlcbiAgICApO1xuICAgIHNldExhcFRpbWVzKGxhcFRpbWVzQXJyKTtcblxuICAgIHNldExhcHMocmFjZURhdGEuTVJEYXRhLlJhY2VUYWJsZS5SYWNlc1swXS5MYXBzLm1hcCgobGFwKSA9PiBsYXAubnVtYmVyKSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxIGNsYXNzTmFtZT1cIm15LTUgdGV4dC0yeGwgZm9udC1ib2xkXCI+UmFjZSBudW1iZXI6IHtyYWNlfTwvaDE+XG4gICAgICB7cmFjZURhdGEgJiYgKFxuICAgICAgICA8TGluZUNoYXJ0IHhBeGlzRGF0YT17bGFwc30geUF4aXNEYXRhPXtsYXBUaW1lc30gZHJpdmVyPXtkcml2ZXJ9IC8+XG4gICAgICApfVxuICAgICAgPERyaXZlclNlbGVjdG9yIHJhY2U9e3JhY2V9IHNldERyaXZlcj17c2V0RHJpdmVyfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmFjZTtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkRyaXZlclNlbGVjdG9yIiwiTGluZUNoYXJ0IiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicmVxIiwicXVlcnkiLCJwYXJhbXMiLCJwcm9wcyIsInJhY2UiLCJSYWNlIiwicmFjZURhdGEiLCJzZXRSYWNlRGF0YSIsImxhcFRpbWVzIiwic2V0TGFwVGltZXMiLCJsYXBzIiwic2V0TGFwcyIsImRyaXZlciIsInNldERyaXZlciIsImNvbnZlcnRUb1NlY29uZHMiLCJ0aW1lIiwiYSIsInNwbGl0Iiwic2Vjb25kcyIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIk1SRGF0YSIsIlJhY2VUYWJsZSIsIlJhY2VzIiwiTGFwcyIsInNldExhcEluZm8iLCJsYXBUaW1lc0FyciIsIm1hcCIsImxhcCIsIlRpbWluZ3MiLCJwdXNoIiwibnVtYmVyIiwiZGl2IiwiaDEiLCJjbGFzc05hbWUiLCJ4QXhpc0RhdGEiLCJ5QXhpc0RhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/races/[race].js\n");

/***/ }),

/***/ "chart.js/auto":
/*!********************************!*\
  !*** external "chart.js/auto" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("chart.js/auto");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-chartjs-2":
/*!**********************************!*\
  !*** external "react-chartjs-2" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("react-chartjs-2");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/races/[race].js"));
module.exports = __webpack_exports__;

})();