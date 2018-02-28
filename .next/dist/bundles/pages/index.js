module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);
var _jsxFileName = '/Users/jorah/programmer/project/next-js/pages/index.js';




/* harmony default export */ __webpack_exports__["default"] = (function () {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
            className: 'jsx-2741814447',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 4
            }
        },
        ' Welcome to next.js again!',
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_next_head___default.a,
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 5
                }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'title',
                {
                    className: 'jsx-2741814447',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 6
                    }
                },
                ' this is my first page '
            )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: '/static/tt.png', className: 'jsx-2741814447',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 8
            }
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
                className: 'jsx-2741814447',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 10
                }
            },
            '// here if you add replace attr when you click back button will not get before page',
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3_next_link___default.a,
                { prefetch: true, href: '/login', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 12
                    }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'a',
                    {
                        className: 'jsx-2741814447',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 13
                        }
                    },
                    ' to Login '
                )
            )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
            styleId: '2741814447',
            css: 'div.jsx-2741814447{background:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCb0IsQUFHZ0MsZUFDbkIiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pvcmFoL3Byb2dyYW1tZXIvcHJvamVjdC9uZXh0LWpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuZXhwb3J0IGRlZmF1bHQgKCkgPT5cbiAgICA8ZGl2PiBXZWxjb21lIHRvIG5leHQuanMgYWdhaW4hXG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPHRpdGxlPiB0aGlzIGlzIG15IGZpcnN0IHBhZ2UgPC90aXRsZT5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8aW1nIHNyYyA9ICcvc3RhdGljL3R0LnBuZycvPlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgIC8vIGhlcmUgaWYgeW91IGFkZCByZXBsYWNlIGF0dHIgd2hlbiB5b3UgY2xpY2sgYmFjayBidXR0b24gd2lsbCBub3QgZ2V0IGJlZm9yZSBwYWdlXG4gICAgICAgIDxMaW5rIHByZWZldGNoICBocmVmID0gJy9sb2dpbic+XG4gICAgICAgICAgICA8YT4gdG8gTG9naW4gPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgIDwvZGl2PlxuXG4iXX0= */\n/*@ sourceURL=pages/index.js */'
        })
    );
});

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map