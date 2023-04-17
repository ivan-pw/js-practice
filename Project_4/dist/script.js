/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/lib/core.js":
/*!****************************!*\
  !*** ./src/js/lib/core.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// (() => {
//   const $ = function (selector) {
//     const elements = document.querySelectorAll(selector);
//     const obj = {};

//     obj.hide = () => {
//       elements.forEach((element) => {
//         element.style.display = 'none';
//       });
//       return obj;
//     };

//     obj.show = () => {
//       elements.forEach((element) => {
//         element.style.display = '';
//       });
//       return obj;
//     };

//     return obj;
//   };

//   window.$ = $;
// })();

const $ = function (selector) {
  return new $.prototype.init(selector);
};
$.prototype.init = function (selector) {
  if (!selector) {
    return this; // {}
  }

  if (selector.tagName) {
    this[0] = selector;
    this.length = 1;
    return this;
  }
  Object.assign(this, document.querySelectorAll(selector));
  this.length = document.querySelectorAll(selector).length;
  return this;
};
$.prototype.init.prototype = $.prototype;
window.$ = $;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ($);

/***/ }),

/***/ "./src/js/lib/lib.js":
/*!***************************!*\
  !*** ./src/js/lib/lib.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/js/lib/core.js");
/* harmony import */ var _modules_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/display */ "./src/js/lib/modules/display.js");
/* harmony import */ var _modules_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/classes */ "./src/js/lib/modules/classes.js");
/* harmony import */ var _modules_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/actions */ "./src/js/lib/modules/actions.js");
/* harmony import */ var _modules_handlers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/handlers */ "./src/js/lib/modules/handlers.js");
/* harmony import */ var _modules_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/effects */ "./src/js/lib/modules/effects.js");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_core__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/js/lib/modules/actions.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/actions.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

$.prototype.html = function (content) {
  for (let i = 0; i < this.length; i++) {
    if (content) {
      this[i].innerHTML = content;
    } else {
      return this[i].innerHTML;
    }
  }
  return this;
};
$.prototype.eq = function (i) {
  const swap = this[i];
  const objLength = Object.keys(this).length;
  for (let i = 0; i < objLength; i++) {
    delete this[i];
  }
  this[0] = swap;
  this.length = 1;
  return this;
};
$.prototype.index = function () {
  const parent = this[0].parentNode;
  const childs = [...parent.children];
  const findIndex = item => item == this[0];
  return childs.findIndex(findIndex);
};
$.prototype.find = function (selector) {
  let numberOfItems = 0;
  let counter = 0;
  const copy = {
    ...this
  };
  for (let i = 0; i < copy.length; i++) {
    const arr = copy[i].querySelectorAll(selector);
    if (arr.length === 0) {
      continue;
    }
    for (let j = 0; j < arr.length; j++) {
      this[counter] = arr[j];
      counter++;
    }
    numberOfItems += arr.length;
  }
  this.length = numberOfItems;
  const objLength = Object.keys(this).length;
  for (; numberOfItems < objLength; numberOfItems++) {
    delete this[numberOfItems];
  }
  return this;
};
$.prototype.closest = function (selector) {
  let counter = 0;
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i].closest(selector);
    counter++;
  }
  const objLength = Object.keys(this).length;
  for (; counter < objLength; counter++) {
    delete this[counter];
  }
  return this;
};
$.prototype.siblings = function () {
  let numberOfItems = 0;
  let counter = 0;
  const copy = {
    ...this
  };
  for (let i = 0; i < copy.length; i++) {
    const arr = copy[i].parentNode.children;
    for (let j = 0; j < arr.length; j++) {
      if (copy[i] === arr[j]) {
        continue;
      }
      this[counter] = arr[j];
      counter++;
    }
    numberOfItems += arr.length - 1;
  }
  this.length = numberOfItems;
  const objLength = Object.keys(this).length;
  for (; numberOfItems < objLength; numberOfItems++) {
    delete this[numberOfItems];
  }
  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/classes.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/classes.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.addClass = function () {
  for (var _len = arguments.length, classNames = new Array(_len), _key = 0; _key < _len; _key++) {
    classNames[_key] = arguments[_key];
  }
  for (let i = 0; i < this.length; i++) {
    this[i].classList?.add(...classNames);
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeClass = function () {
  for (var _len2 = arguments.length, classNames = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    classNames[_key2] = arguments[_key2];
  }
  for (let i = 0; i < this.length; i++) {
    this[i].classList?.remove(...classNames);
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleClass = function (classNames) {
  for (let i = 0; i < this.length; i++) {
    this[i].classList?.toggle(classNames);
  }
  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/display.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/display.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.show = function () {
  for (let i = 0; i < this.length; i++) {
    // this[i]
    if (!this[i].style) {
      continue;
    }
    this[i].style.display = '';
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.hide = function () {
  for (let i = 0; i < this.length; i++) {
    // this[i]
    if (!this[i].style) {
      continue;
    }
    this[i].style.display = 'none';
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggle = function () {
  for (let i = 0; i < this.length; i++) {
    // this[i]
    if (!this[i].style) {
      continue;
    }
    if (this[i].style.display === 'none') {
      this[i].style.display = '';
    } else {
      this[i].style.display = 'none';
    }
  }
  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/effects.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/effects.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.animateOverTime = function (duration, callback, finish) {
  let timeStart;
  function _animateOverTime(time) {
    if (!timeStart) timeStart = time;
    const timeElapsed = time - timeStart;
    const complection = Math.min(timeElapsed / duration, 1);
    callback(complection);
    if (timeElapsed < duration) {
      requestAnimationFrame(_animateOverTime);
    } else if (typeof finish === 'function') {
      fin();
    }
  }
  return _animateOverTime;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeIn = function (duration, display, finish) {
  for (let i = 0; i < this.length; i++) {
    this[i].style.display = display || 'block';
    const _fadeIn = complection => {
      this[i].style.opacity = complection;
    };
    const ani = this.animateOverTime(duration, _fadeIn, finish);
    requestAnimationFrame(ani);
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeOut = function (duration, finish) {
  for (let i = 0; i < this.length; i++) {
    const _fadeOut = complection => {
      this[i].style.opacity = 1 - complection;
      if (complection === 1) {
        this[i].style.display = 'none';
      }
    };
    const ani = this.animateOverTime(duration, _fadeOut, finish);
    requestAnimationFrame(ani);
  }
  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/handlers.js":
/*!****************************************!*\
  !*** ./src/js/lib/modules/handlers.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.on = function (eventName, callback) {
  if (!eventName || !callback) {
    return this;
  }
  for (let i = 0; i < this.length; i++) {
    this[i].addEventListener(eventName, callback);
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.off = function (eventName, callback) {
  if (!eventName || !callback) {
    return this;
  }
  for (let i = 0; i < this.length; i++) {
    this[i].removeEventListener(eventName, callback);
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.click = function (handler) {
  if (handler) {
    for (let i = 0; i < this.length; i++) {
      this[i].addEventListener('click', handler);
    }
  } else {
    for (let i = 0; i < this.length; i++) {
      this[i].click();
    }
  }
  return this;
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/lib */ "./src/js/lib/lib.js");

(0,_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('button').on('click', () => {
  // $(this).toggleClass('active');
  (0,_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('div').eq(2).toggleClass('active');
});
(0,_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('div').click(function () {
  console.log((0,_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])(this).index());
});
function hi() {
  console.log(5);
}

// $('.findme').fadeOut(1800);
(0,_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('.findme').fadeIn(1800);

// console.log($('.more').eq(0).siblings());
// console.log($('.more').eq(0).siblings());

console.log((0,_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('button').html('Hi'));
})();

/******/ })()
;
//# sourceMappingURL=script.js.map