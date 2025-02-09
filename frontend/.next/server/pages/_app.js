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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/context/EventContext.js":
/*!*************************************!*\
  !*** ./src/context/EventContext.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EventContext: () => (/* binding */ EventContext),\n/* harmony export */   EventProvider: () => (/* binding */ EventProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api */ \"./src/services/api.js\");\n\n\n\nconst EventContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst EventProvider = ({ children })=>{\n    const [events, setEvents] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        recent: [],\n        upcoming: []\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getEvents = async ()=>{\n            try {\n                const data = await (0,_services_api__WEBPACK_IMPORTED_MODULE_2__.fetchEvents)();\n                setEvents({\n                    recent: data.filter((event)=>event.status === \"recent\"),\n                    upcoming: data.filter((event)=>event.status === \"upcoming\")\n                });\n            } catch (error) {\n                console.error(\"Error fetching events:\", error);\n            }\n        };\n        getEvents();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(EventContext.Provider, {\n        value: {\n            events\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Suraj Bhusare\\\\OneDrive\\\\Desktop\\\\Event Mangment\\\\frontend\\\\src\\\\context\\\\EventContext.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9FdmVudENvbnRleHQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBa0U7QUFDcEI7QUFFdkMsTUFBTUssNkJBQWVKLG9EQUFhQSxHQUFHO0FBRXJDLE1BQU1LLGdCQUFnQixDQUFDLEVBQUVDLFFBQVEsRUFBRTtJQUN4QyxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR1AsK0NBQVFBLENBQUM7UUFDbkNRLFFBQVEsRUFBRTtRQUNWQyxVQUFVLEVBQUU7SUFDZDtJQUVBUixnREFBU0EsQ0FBQztRQUNSLE1BQU1TLFlBQVk7WUFDaEIsSUFBSTtnQkFDRixNQUFNQyxPQUFPLE1BQU1ULDBEQUFXQTtnQkFDOUJLLFVBQVU7b0JBQ1JDLFFBQVFHLEtBQUtDLE1BQU0sQ0FBQ0MsQ0FBQUEsUUFBU0EsTUFBTUMsTUFBTSxLQUFLO29CQUM5Q0wsVUFBVUUsS0FBS0MsTUFBTSxDQUFDQyxDQUFBQSxRQUFTQSxNQUFNQyxNQUFNLEtBQUs7Z0JBQ2xEO1lBQ0YsRUFBRSxPQUFPQyxPQUFPO2dCQUNkQyxRQUFRRCxLQUFLLENBQUMsMEJBQTBCQTtZQUMxQztRQUNGO1FBRUFMO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNQLGFBQWFjLFFBQVE7UUFBQ0MsT0FBTztZQUFFWjtRQUFPO2tCQUNwQ0Q7Ozs7OztBQUdQLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ldmVudC1tYW5hZ2VtZW50LWZyb250ZW5kLy4vc3JjL2NvbnRleHQvRXZlbnRDb250ZXh0LmpzPzZiMzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGZldGNoRXZlbnRzIH0gZnJvbSAnLi4vc2VydmljZXMvYXBpJztcclxuXHJcbmV4cG9ydCBjb25zdCBFdmVudENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgY29uc3QgRXZlbnRQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbZXZlbnRzLCBzZXRFdmVudHNdID0gdXNlU3RhdGUoe1xyXG4gICAgcmVjZW50OiBbXSxcclxuICAgIHVwY29taW5nOiBbXSxcclxuICB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGdldEV2ZW50cyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hFdmVudHMoKTtcclxuICAgICAgICBzZXRFdmVudHMoe1xyXG4gICAgICAgICAgcmVjZW50OiBkYXRhLmZpbHRlcihldmVudCA9PiBldmVudC5zdGF0dXMgPT09ICdyZWNlbnQnKSxcclxuICAgICAgICAgIHVwY29taW5nOiBkYXRhLmZpbHRlcihldmVudCA9PiBldmVudC5zdGF0dXMgPT09ICd1cGNvbWluZycpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGV2ZW50czonLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZ2V0RXZlbnRzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEV2ZW50Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBldmVudHMgfX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvRXZlbnRDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07ICJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImZldGNoRXZlbnRzIiwiRXZlbnRDb250ZXh0IiwiRXZlbnRQcm92aWRlciIsImNoaWxkcmVuIiwiZXZlbnRzIiwic2V0RXZlbnRzIiwicmVjZW50IiwidXBjb21pbmciLCJnZXRFdmVudHMiLCJkYXRhIiwiZmlsdGVyIiwiZXZlbnQiLCJzdGF0dXMiLCJlcnJvciIsImNvbnNvbGUiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context/EventContext.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_EventContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/EventContext */ \"./src/context/EventContext.js\");\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_EventContext__WEBPACK_IMPORTED_MODULE_2__.EventProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Suraj Bhusare\\\\OneDrive\\\\Desktop\\\\Event Mangment\\\\frontend\\\\src\\\\pages\\\\_app.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Suraj Bhusare\\\\OneDrive\\\\Desktop\\\\Event Mangment\\\\frontend\\\\src\\\\pages\\\\_app.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQStCO0FBQ3lCO0FBRXhELFNBQVNDLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDckMscUJBQ0UsOERBQUNILGdFQUFhQTtrQkFDWiw0RUFBQ0U7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUc5QjtBQUVBLGlFQUFlRixLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXZlbnQtbWFuYWdlbWVudC1mcm9udGVuZC8uL3NyYy9wYWdlcy9fYXBwLmpzPzhmZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xyXG5pbXBvcnQgeyBFdmVudFByb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dC9FdmVudENvbnRleHQnO1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxFdmVudFByb3ZpZGVyPlxyXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICA8L0V2ZW50UHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7ICJdLCJuYW1lcyI6WyJFdmVudFByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/services/api.js":
/*!*****************************!*\
  !*** ./src/services/api.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchEvents: () => (/* binding */ fetchEvents),\n/* harmony export */   initiatePayment: () => (/* binding */ initiatePayment),\n/* harmony export */   submitFeedback: () => (/* binding */ submitFeedback)\n/* harmony export */ });\nconst fetchEvents = async ()=>{\n    const response = await fetch(`${\"https://your-api-url.com/api\"}/events`);\n    if (!response.ok) {\n        throw new Error(\"Failed to fetch events\");\n    }\n    const data = await response.json();\n    return data;\n};\nconst submitFeedback = async (feedback)=>{\n    const response = await fetch(`${\"https://your-api-url.com/api\"}/feedback`, {\n        method: \"POST\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify(feedback)\n    });\n    if (!response.ok) {\n        throw new Error(\"Failed to submit feedback\");\n    }\n    return response.json();\n};\nconst initiatePayment = async (eventId)=>{\n    const response = await fetch(`${\"https://your-api-url.com/api\"}/payment`, {\n        method: \"POST\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify({\n            eventId\n        })\n    });\n    if (!response.ok) {\n        throw new Error(\"Failed to initiate payment\");\n    }\n    return response.json();\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvYXBpLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFPLE1BQU1BLGNBQWM7SUFDekIsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLENBQUMsRUFBRUMsOEJBQStCLENBQUMsT0FBTyxDQUFDO0lBQ3hFLElBQUksQ0FBQ0YsU0FBU0ssRUFBRSxFQUFFO1FBQ2hCLE1BQU0sSUFBSUMsTUFBTTtJQUNsQjtJQUNBLE1BQU1DLE9BQU8sTUFBTVAsU0FBU1EsSUFBSTtJQUNoQyxPQUFPRDtBQUNULEVBQUU7QUFFSyxNQUFNRSxpQkFBaUIsT0FBT0M7SUFDbkMsTUFBTVYsV0FBVyxNQUFNQyxNQUFNLENBQUMsRUFBRUMsOEJBQStCLENBQUMsU0FBUyxDQUFDLEVBQUU7UUFDMUVTLFFBQVE7UUFDUkMsU0FBUztZQUNQLGdCQUFnQjtRQUNsQjtRQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUNMO0lBQ3ZCO0lBQ0EsSUFBSSxDQUFDVixTQUFTSyxFQUFFLEVBQUU7UUFDaEIsTUFBTSxJQUFJQyxNQUFNO0lBQ2xCO0lBQ0EsT0FBT04sU0FBU1EsSUFBSTtBQUN0QixFQUFFO0FBRUssTUFBTVEsa0JBQWtCLE9BQU9DO0lBQ3BDLE1BQU1qQixXQUFXLE1BQU1DLE1BQU0sQ0FBQyxFQUFFQyw4QkFBK0IsQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUN6RVMsUUFBUTtRQUNSQyxTQUFTO1lBQ1AsZ0JBQWdCO1FBQ2xCO1FBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztZQUFFRTtRQUFRO0lBQ2pDO0lBQ0EsSUFBSSxDQUFDakIsU0FBU0ssRUFBRSxFQUFFO1FBQ2hCLE1BQU0sSUFBSUMsTUFBTTtJQUNsQjtJQUNBLE9BQU9OLFNBQVNRLElBQUk7QUFDdEIsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2V2ZW50LW1hbmFnZW1lbnQtZnJvbnRlbmQvLi9zcmMvc2VydmljZXMvYXBpLmpzPzRjOGIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGZldGNoRXZlbnRzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTH0vZXZlbnRzYCk7XHJcbiAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggZXZlbnRzJyk7XHJcbiAgfVxyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc3VibWl0RmVlZGJhY2sgPSBhc3luYyAoZmVlZGJhY2spID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkx9L2ZlZWRiYWNrYCwge1xyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmZWVkYmFjayksXHJcbiAgfSk7XHJcbiAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gc3VibWl0IGZlZWRiYWNrJyk7XHJcbiAgfVxyXG4gIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhdGVQYXltZW50ID0gYXN5bmMgKGV2ZW50SWQpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkx9L3BheW1lbnRgLCB7XHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZXZlbnRJZCB9KSxcclxuICB9KTtcclxuICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBpbml0aWF0ZSBwYXltZW50Jyk7XHJcbiAgfVxyXG4gIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbn07ICJdLCJuYW1lcyI6WyJmZXRjaEV2ZW50cyIsInJlc3BvbnNlIiwiZmV0Y2giLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsIm9rIiwiRXJyb3IiLCJkYXRhIiwianNvbiIsInN1Ym1pdEZlZWRiYWNrIiwiZmVlZGJhY2siLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJpbml0aWF0ZVBheW1lbnQiLCJldmVudElkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/api.js\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();