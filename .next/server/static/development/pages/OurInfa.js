module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./common/OurInfastructure/banner.js":
/*!*******************************************!*\
  !*** ./common/OurInfastructure/banner.js ***!
  \*******************************************/
/*! exports provided: Banner, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Banner", function() { return Banner; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\hp\\Desktop\\merged-code -nav\\Spineor-code\\common\\OurInfastructure\\banner.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

class Banner extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "jsx-4029196647" + " " + "inner_header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 16
      }
    }, "Our Infrastructure"), __jsx("div", {
      className: "jsx-4029196647" + " " + "inner_text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 16
      }
    }, "Our benefit is our team of skilled,", __jsx("br", {
      className: "jsx-4029196647",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 51
      }
    }), "hard-working and devoted staff ", __jsx("br", {
      className: "jsx-4029196647",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 48
      }
    }), "working to maintain the", __jsx("br", {
      className: "jsx-4029196647",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 40
      }
    }), "corporate ideals of excellence of", __jsx("br", {
      className: "jsx-4029196647",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 51
      }
    }), "Spineor Conceptions."), __jsx("div", {
      className: "jsx-4029196647" + " " + "button_outer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 16
      }
    }), __jsx("div", {
      className: "jsx-4029196647" + " " + "button-inner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 16
      }
    }, "Get in touch"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "4029196647",
      __self: this
    }, ".inner_header.jsx-4029196647{position:absolute;width:435px;height:186px;left:111px;top:298px;font-family:Roboto;font-style:normal;font-weight:bold;font-size:70px;line-height:82px;color:#333333;}.inner_text.jsx-4029196647{position:absolute;width:515px;height:223px;left:656px;top:246px;font-family:Roboto;font-style:normal;font-weight:300;font-size:36px;line-height:42px;color:#333333;}.button_outer.jsx-4029196647{position:absolute;width:158px;height:50px;left:658px;top:488px;background:#FFFFFF;border:2px solid #184A88;box-sizing:border-box;border-radius:4px;}.button_inner.jsx-4029196647{position:absolute;width:86px;height:19px;left:692px;top:503px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:16px;line-height:19px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;color:#184A88;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcaHBcXERlc2t0b3BcXG1lcmdlZC1jb2RlIC1uYXZcXFNwaW5lb3ItY29kZVxcY29tbW9uXFxPdXJJbmZhc3RydWN0dXJlXFxiYW5uZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUIyQixBQUdtQyxBQWFBLEFBYUEsQUFZQSxrQkFyQ04sQUFhQSxBQWFBLEFBWUQsV0FDQyxDQXRDQyxBQWFBLEFBYUQsV0FhRCxDQVpBLENBMUJBLEFBYUEsU0EwQkQsQ0FaQSxDQTFCQSxBQWFBLFFBMkJTLENBWkEsQ0EzQkEsQUFhQSxpQkEyQkQsQ0FaTyxDQTNCUCxBQWFBLGdCQTJCQyxFQXZDRixBQWFELE1BY00sVUFiUCxDQWJBLEFBdUNBLFdBWkcsR0FiRCxDQWJBLEFBdUNBLGNBWmxCLEVBYmUsQ0FiQSxBQXlDRCxhQTNCZCxDQWJBLDREQXlDb0IsNkZBQ0Qsa0JBRUosY0FDZiIsImZpbGUiOiJDOlxcVXNlcnNcXGhwXFxEZXNrdG9wXFxtZXJnZWQtY29kZSAtbmF2XFxTcGluZW9yLWNvZGVcXGNvbW1vblxcT3VySW5mYXN0cnVjdHVyZVxcYmFubmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhbm5lciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyX2hlYWRlclwiPlxyXG4gICAgICAgICAgICAgICBPdXIgSW5mcmFzdHJ1Y3R1cmVcclxuICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyX3RleHRcIj5cclxuICAgICAgICAgICAgICAgT3VyIGJlbmVmaXQgaXMgb3VyIHRlYW0gb2Ygc2tpbGxlZCw8YnIvPlxyXG4gICAgICAgICAgICAgICAgaGFyZC13b3JraW5nIGFuZCBkZXZvdGVkIHN0YWZmIDxici8+XHJcbiAgICAgICAgICAgICAgICB3b3JraW5nIHRvIG1haW50YWluIHRoZTxici8+XHJcbiAgICAgICAgICAgICAgICAgY29ycG9yYXRlIGlkZWFscyBvZiBleGNlbGxlbmNlIG9mPGJyLz5cclxuICAgICAgICAgICAgICAgICAgU3BpbmVvciBDb25jZXB0aW9ucy5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uX291dGVyXCI+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1pbm5lclwiPlxyXG4gICAgICAgICAgICAgICBHZXQgaW4gdG91Y2hcclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgLmlubmVyX2hlYWRlcntcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0MzVweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTg2cHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAxMTFweDtcclxuICAgICAgICAgICAgICAgIHRvcDogMjk4cHg7ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDcwcHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogODJweDsgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzMzMzOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAuaW5uZXJfdGV4dHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MTVweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjIzcHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiA2NTZweDtcclxuICAgICAgICAgICAgICAgIHRvcDogMjQ2cHg7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDJweDsgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzMzMzOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAuYnV0dG9uX291dGVye1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE1OHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogNjU4cHg7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDQ4OHB4O1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzE4NEE4ODtcclxuICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgLmJ1dHRvbl9pbm5lcntcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA4NnB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxOXB4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogNjkycHg7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDUwM3B4O1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMxODRBODg7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFubmVyXHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\hp\\\\Desktop\\\\merged-code -nav\\\\Spineor-code\\\\common\\\\OurInfastructure\\\\banner.js */"));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (Banner);

/***/ }),

/***/ "./pages/OurInfa/index.js":
/*!********************************!*\
  !*** ./pages/OurInfa/index.js ***!
  \********************************/
/*! exports provided: OurInfa, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurInfa", function() { return OurInfa; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_OurInfastructure_banner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/OurInfastructure/banner */ "./common/OurInfastructure/banner.js");
var _jsxFileName = "C:\\Users\\hp\\Desktop\\merged-code -nav\\Spineor-code\\pages\\OurInfa\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class OurInfa extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 13
      }
    }, __jsx(_common_OurInfastructure_banner__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }
    }));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (OurInfa);

/***/ }),

/***/ 4:
/*!**************************************!*\
  !*** multi ./pages/OurInfa/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\hp\Desktop\merged-code -nav\Spineor-code\pages\OurInfa\index.js */"./pages/OurInfa/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=OurInfa.js.map