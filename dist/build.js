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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/app.js":
/*!*******************************!*\
  !*** ./src/components/app.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /home/tarantini/dev/mweb3waves/src/components/app.js: Unexpected token (11:12)\\n\\n\\u001b[0m \\u001b[90m  9 | \\u001b[39m    render() {\\u001b[0m\\n\\u001b[0m \\u001b[90m 10 | \\u001b[39m        \\u001b[36mreturn\\u001b[39m (\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 11 | \\u001b[39m            \\u001b[33m<\\u001b[39m\\u001b[33mdiv\\u001b[39m className\\u001b[33m=\\u001b[39m\\u001b[32m\\\"container\\\"\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m            \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 12 | \\u001b[39m    \\t\\t    \\u001b[33m<\\u001b[39m\\u001b[33minput\\u001b[39m className\\u001b[33m=\\u001b[39m\\u001b[32m\\\"btn btn-primary\\\"\\u001b[39m type\\u001b[33m=\\u001b[39m\\u001b[32m\\\"submit\\\"\\u001b[39m value\\u001b[33m=\\u001b[39m\\u001b[32m\\\"Alert\\\"\\u001b[39m onClick\\u001b[33m=\\u001b[39m{() \\u001b[33m=>\\u001b[39m {alert(\\u001b[32m\\\"Alert button onClick\\\"\\u001b[39m)\\u001b[33m;\\u001b[39m}}\\u001b[33m/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 13 | \\u001b[39m    \\t    \\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mdiv\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 14 | \\u001b[39m        )\\u001b[0m\\n    at Parser.raise (/home/tarantini/dev/mweb3waves/node_modules/@babel/parser/lib/index.js:6322:17)\\n    at Parser.unexpected (/home/tarantini/dev/mweb3waves/node_modules/@babel/parser/lib/index.js:7638:16)\\n    at Parser.parseExprAtom (/home/tarantini/dev/mweb3waves/node_modules/@babel/parser/lib/index.js:8799:20)\\n    at Parser.parseExprSubscripts (/home/tarantini/dev/mweb3waves/node_modules/@babel/parser/lib/index.js:8385:23)\\n    at Parser.parseMaybeUnary (/home/tarantini/dev/mweb3waves/node_modules/@babel/parser/lib/index.js:8365:21)\\n    at Parser.parseExprOps (/home/tarantini/dev/mweb3waves/node_modules/@babel/parser/lib/index.js:8252:23)\\n    at Parser.parseMaybeConditional (/home/tarantini/dev/mweb3waves/node_modules/@babel/parser/lib/index.js:8225:23)\\n    at Parser.parseMaybeAssign (/home/tarantini/dev/mweb3waves/node_modules/@babel/parser/lib/index.js:8172:21)\\n    at Parser.parseParenAndDistinguishExpression (/home/tarantini/dev/mweb3waves/node_modules/@babel/parser/lib/index.js:8937:28)\\n    at Parser.parseExprAtom (/home/tarantini/dev/mweb3waves/node_modules/@babel/parser/lib/index.js:8731:21)\\n    at Parser.parseExprSubscripts (/home/tarantini/dev/mweb3waves/node_modules/@babel/parser/lib/index.js:8385:23)\\n    at Parser.parseMaybeUnary (/home/tarantini/dev/mweb3waves/node_modules/@babel/parser/lib/index.js:8365:21)\\n    at Parser.parseExprOps (/home/tarantini/dev/mweb3waves/node_modules/@babel/parser/lib/index.js:8252:23)\\n    at Parser.parseMaybeConditional (/home/tarantini/dev/mweb3waves/node_modules/@babel/parser/lib/index.js:8225:23)\\n    at Parser.parseMaybeAssign (/home/tarantini/dev/mweb3waves/node_modules/@babel/parser/lib/index.js:8172:21)\\n    at Parser.parseExpression (/home/tarantini/dev/mweb3waves/node_modules/@babel/parser/lib/index.js:8120:23)\\n    at Parser.parseReturnStatement (/home/tarantini/dev/mweb3waves/node_modules/@babel/parser/lib/index.js:10132:28)\\n    at Parser.parseStatementContent (/home/tarantini/dev/mweb3waves/node_modules/@babel/parser/lib/index.js:9811:21)\\n    at Parser.parseStatement (/home/tarantini/dev/mweb3waves/node_modules/@babel/parser/lib/index.js:9763:17)\\n    at Parser.parseBlockOrModuleBlockBody (/home/tarantini/dev/mweb3waves/node_modules/@babel/parser/lib/index.js:10340:25)\\n    at Parser.parseBlockBody (/home/tarantini/dev/mweb3waves/node_modules/@babel/parser/lib/index.js:10327:10)\\n    at Parser.parseBlock (/home/tarantini/dev/mweb3waves/node_modules/@babel/parser/lib/index.js:10311:10)\\n    at Parser.parseFunctionBody (/home/tarantini/dev/mweb3waves/node_modules/@babel/parser/lib/index.js:9382:24)\\n    at Parser.parseFunctionBodyAndFinish (/home/tarantini/dev/mweb3waves/node_modules/@babel/parser/lib/index.js:9352:10)\\n    at Parser.parseMethod (/home/tarantini/dev/mweb3waves/node_modules/@babel/parser/lib/index.js:9306:10)\\n    at Parser.pushClassMethod (/home/tarantini/dev/mweb3waves/node_modules/@babel/parser/lib/index.js:10743:30)\\n    at Parser.parseClassMemberWithIsStatic (/home/tarantini/dev/mweb3waves/node_modules/@babel/parser/lib/index.js:10668:12)\\n    at Parser.parseClassMember (/home/tarantini/dev/mweb3waves/node_modules/@babel/parser/lib/index.js:10607:10)\\n    at withTopicForbiddingContext (/home/tarantini/dev/mweb3waves/node_modules/@babel/parser/lib/index.js:10562:14)\\n    at Parser.withTopicForbiddingContext (/home/tarantini/dev/mweb3waves/node_modules/@babel/parser/lib/index.js:9657:14)\");\n\n//# sourceURL=webpack:///./src/components/app.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/app */ \"./src/components/app.js\");\n/* harmony import */ var _components_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_app__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/main.js */\"./src/main.js\");\n\n\n//# sourceURL=webpack:///multi_./src/main.js?");

/***/ })

/******/ });