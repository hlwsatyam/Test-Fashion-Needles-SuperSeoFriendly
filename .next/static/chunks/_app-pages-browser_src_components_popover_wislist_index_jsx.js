"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["_app-pages-browser_src_components_popover_wislist_index_jsx"],{

/***/ "(app-pages-browser)/./src/components/popover/wislist/index.jsx":
/*!**************************************************!*\
  !*** ./src/components/popover/wislist/index.jsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ WishlistPopover; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_nprogress_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-nprogress-bar */ \"(app-pages-browser)/./node_modules/next-nprogress-bar/dist/index.js\");\n/* harmony import */ var _barrel_optimize_names_Badge_IconButton_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Badge,IconButton!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/IconButton/IconButton.js\");\n/* harmony import */ var _barrel_optimize_names_Badge_IconButton_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Badge,IconButton!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Badge/Badge.js\");\n/* harmony import */ var _barrel_optimize_names_IoMdHeartEmpty_react_icons_io__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=IoMdHeartEmpty!=!react-icons/io */ \"(app-pages-browser)/./node_modules/react-icons/io/index.esm.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/es/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ \"(app-pages-browser)/./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);\n// react\n\nvar _s = $RefreshSig$();\n\n// next\n\n// mui\n\n\n\n\nWishlistPopover.propTypes = {\n    isAuth: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool).isRequired\n};\n// ----------------------------------------------------------------------\nfunction WishlistPopover(param) {\n    let { isAuth } = param;\n    _s();\n    const router = (0,next_nprogress_bar__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(true);\n    const { wishlist } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((param)=>{\n        let { wishlist } = param;\n        return wishlist;\n    });\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        setLoading(false);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Badge_IconButton_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            name: \"wishlist\",\n            color: \"default\",\n            onClick: ()=>{\n                if (!isAuth) {\n                    router.push(\"/auth/login\");\n                } else {\n                    router.push(\"/profile/wishlist\");\n                }\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Badge_IconButton_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                showZero: true,\n                badgeContent: loading || !isAuth ? 0 : wishlist === null || wishlist === void 0 ? void 0 : wishlist.length,\n                color: \"warning\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoMdHeartEmpty_react_icons_io__WEBPACK_IMPORTED_MODULE_7__.IoMdHeartEmpty, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\fashi\\\\OneDrive\\\\Desktop\\\\codecanyon-yj1ceCeE-commercehope-reactjs-ecommerce-script\\\\commercehope\\\\sss\\\\fasion-needles\\\\src\\\\components\\\\popover\\\\wislist\\\\index.jsx\",\n                    lineNumber: 42,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\fashi\\\\OneDrive\\\\Desktop\\\\codecanyon-yj1ceCeE-commercehope-reactjs-ecommerce-script\\\\commercehope\\\\sss\\\\fasion-needles\\\\src\\\\components\\\\popover\\\\wislist\\\\index.jsx\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\fashi\\\\OneDrive\\\\Desktop\\\\codecanyon-yj1ceCeE-commercehope-reactjs-ecommerce-script\\\\commercehope\\\\sss\\\\fasion-needles\\\\src\\\\components\\\\popover\\\\wislist\\\\index.jsx\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(WishlistPopover, \"a5yOMeZFDzdSgHhGVEUr0WqqXko=\", false, function() {\n    return [\n        next_nprogress_bar__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector\n    ];\n});\n_c = WishlistPopover;\nvar _c;\n$RefreshReg$(_c, \"WishlistPopover\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3BvcG92ZXIvd2lzbGlzdC9pbmRleC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxRQUFROzs7QUFDa0I7QUFFMUIsT0FBTztBQUN3QztBQUUvQyxNQUFNO0FBQzRDO0FBQ0Y7QUFDTjtBQUVQO0FBRW5DTyxnQkFBZ0JDLFNBQVMsR0FBRztJQUMxQkMsUUFBUUgsd0RBQWMsQ0FBQ0ssVUFBVTtBQUNuQztBQUVBLHlFQUF5RTtBQUMxRCxTQUFTSixnQkFBZ0IsS0FBVTtRQUFWLEVBQUVFLE1BQU0sRUFBRSxHQUFWOztJQUN0QyxNQUFNRyxTQUFTWCw2REFBU0E7SUFDeEIsTUFBTSxDQUFDWSxTQUFTQyxXQUFXLEdBQUdkLHFEQUFjLENBQUM7SUFDN0MsTUFBTSxFQUFFZ0IsUUFBUSxFQUFFLEdBQUdYLHdEQUFXQSxDQUFDO1lBQUMsRUFBRVcsUUFBUSxFQUFFO2VBQUtBOztJQUVuRGhCLHNEQUFlLENBQUM7UUFDZGMsV0FBVztJQUNiLEdBQUcsRUFBRTtJQUVMLHFCQUNFO2tCQUNFLDRFQUFDWCw0RkFBVUE7WUFDVGUsTUFBSztZQUNMQyxPQUFPO1lBQ1BDLFNBQVM7Z0JBQ1AsSUFBSSxDQUFDWCxRQUFRO29CQUNYRyxPQUFPUyxJQUFJLENBQUM7Z0JBQ2QsT0FBTztvQkFDTFQsT0FBT1MsSUFBSSxDQUFDO2dCQUNkO1lBQ0Y7c0JBRUEsNEVBQUNuQiw0RkFBS0E7Z0JBQUNvQixVQUFVO2dCQUFNQyxjQUFjVixXQUFXLENBQUNKLFNBQVMsSUFBSU8scUJBQUFBLCtCQUFBQSxTQUFVUSxNQUFNO2dCQUFFTCxPQUFNOzBCQUNwRiw0RUFBQ2YsZ0dBQWNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBS3pCO0dBNUJ3Qkc7O1FBQ1BOLHlEQUFTQTtRQUVISSxvREFBV0E7OztLQUhWRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9wb3BvdmVyL3dpc2xpc3QvaW5kZXguanN4P2FiNWMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVhY3RcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vIG5leHRcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC1ucHJvZ3Jlc3MtYmFyJztcclxuXHJcbi8vIG11aVxyXG5pbXBvcnQgeyBCYWRnZSwgSWNvbkJ1dHRvbiB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBJb01kSGVhcnRFbXB0eSB9IGZyb20gJ3JlYWN0LWljb25zL2lvJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuV2lzaGxpc3RQb3BvdmVyLnByb3BUeXBlcyA9IHtcclxuICBpc0F1dGg6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWRcclxufTtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2lzaGxpc3RQb3BvdmVyKHsgaXNBdXRoIH0pIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCB7IHdpc2hsaXN0IH0gPSB1c2VTZWxlY3RvcigoeyB3aXNobGlzdCB9KSA9PiB3aXNobGlzdCk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgIG5hbWU9XCJ3aXNobGlzdFwiXHJcbiAgICAgICAgY29sb3I9eydkZWZhdWx0J31cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICBpZiAoIWlzQXV0aCkge1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnL2F1dGgvbG9naW4nKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvcHJvZmlsZS93aXNobGlzdCcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8QmFkZ2Ugc2hvd1plcm89e3RydWV9IGJhZGdlQ29udGVudD17bG9hZGluZyB8fCAhaXNBdXRoID8gMCA6IHdpc2hsaXN0Py5sZW5ndGh9IGNvbG9yPVwid2FybmluZ1wiPlxyXG4gICAgICAgICAgPElvTWRIZWFydEVtcHR5IC8+XHJcbiAgICAgICAgPC9CYWRnZT5cclxuICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSb3V0ZXIiLCJCYWRnZSIsIkljb25CdXR0b24iLCJJb01kSGVhcnRFbXB0eSIsInVzZVNlbGVjdG9yIiwiUHJvcFR5cGVzIiwiV2lzaGxpc3RQb3BvdmVyIiwicHJvcFR5cGVzIiwiaXNBdXRoIiwiYm9vbCIsImlzUmVxdWlyZWQiLCJyb3V0ZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVzZVN0YXRlIiwid2lzaGxpc3QiLCJ1c2VFZmZlY3QiLCJuYW1lIiwiY29sb3IiLCJvbkNsaWNrIiwicHVzaCIsInNob3daZXJvIiwiYmFkZ2VDb250ZW50IiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/popover/wislist/index.jsx\n"));

/***/ })

}]);