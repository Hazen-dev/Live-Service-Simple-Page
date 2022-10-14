/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/00/js/events.js":
/*!*****************************!*\
  !*** ./src/00/js/events.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ eventsMenager)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/* eslint-disable max-classes-per-file */

/* eslint-disable class-methods-use-this */

/* eslint-disable no-underscore-dangle */

/* eslint-disable no-restricted-globals */
// burger
var burger = document.getElementsByClassName('header__burger-span')[0];
var burger2 = document.getElementsByClassName('header__span');
var openBurger = document.getElementsByClassName('header__burger-open')[0];
var container = document.getElementsByClassName('container')[0]; // price buttons

var buttonsArea = document.getElementsByClassName('price__selector')[0];
var listArea = document.getElementsByClassName('price__list')[0]; // local variables

function contain() {
  if (event.target === burger || event.target === burger2[0] || event.target === burger2[1] || event.target === burger2[2]) {
    openBurger.classList.add('header__burger-animation');
  } else if (event.target === openBurger) {
    openBurger.classList.add('header__burger-animation');
  } else {
    openBurger.classList.remove('header__burger-animation');
  } // if clicked burger open menu, if cliked other burger remove

}

function eventsMenager() {
  container.addEventListener('click', contain); // event on all file
} // price buttons

var freePlan = document.getElementsByClassName('price__list-free')[0];
var orgPlan = document.getElementsByClassName('price__list-organization')[0];
var perosnalPlan = document.getElementsByClassName('price__list-personal')[0];
var className = '';

var PriceButtonStrategy = /*#__PURE__*/function () {
  function PriceButtonStrategy() {
    _classCallCheck(this, PriceButtonStrategy);

    this._strategy = null;
  }

  _createClass(PriceButtonStrategy, [{
    key: "strategy",
    set: function set(strategy) {
      // po wywołaniu strategy = X włącza się
      this._strategy = strategy;
    }
  }, {
    key: "doAction",
    value: function doAction() {
      this._strategy.doAction();
    }
  }]);

  return PriceButtonStrategy;
}(); // functions of buttons


var LeftButton = /*#__PURE__*/function () {
  function LeftButton() {
    _classCallCheck(this, LeftButton);
  }

  _createClass(LeftButton, [{
    key: "doAction",
    value: function doAction() {
      listArea.classList.remove("--price__list-move-right".concat(className)); // classes in css are modificators

      listArea.classList.add("--price__list-move-left".concat(className));
    }
  }]);

  return LeftButton;
}();

var MiddleButton = /*#__PURE__*/function () {
  function MiddleButton() {
    _classCallCheck(this, MiddleButton);
  }

  _createClass(MiddleButton, [{
    key: "doAction",
    value: function doAction() {
      listArea.classList.remove("--price__list-move-left".concat(className)); // remove movements class

      listArea.classList.remove("--price__list-move-right".concat(className));
      listArea.classList.remove("--price__list-move-right");
      listArea.classList.remove("--price__list-move-left");
    }
  }]);

  return MiddleButton;
}();

var RightButton = /*#__PURE__*/function () {
  function RightButton() {
    _classCallCheck(this, RightButton);
  }

  _createClass(RightButton, [{
    key: "doAction",
    value: function doAction() {
      listArea.classList.remove("--price__list-move-left".concat(className)); // classes in css are modificators

      listArea.classList.add("--price__list-move-right".concat(className));
    }
  }]);

  return RightButton;
}();

var strategymenager = new PriceButtonStrategy(); // new

var leftAnimation = new LeftButton();
var rightAnimation = new RightButton();
var middleAnimation = new MiddleButton();
buttonsArea.addEventListener('click', function () {
  var height = document.body.clientHeight;
  var width = document.body.clientWidth;

  if (height < 980 && width < 450) {
    // if is phone change ovement class
    className = '-ph';
  } else {
    className = '';
  } // explaining which button had been clicked


  if (event.target.classList[0].includes('first')) {
    strategymenager.strategy = leftAnimation;
  }

  if (event.target.classList[0].includes('second')) {
    strategymenager.strategy = middleAnimation;
  }

  if (event.target.classList[0].includes('third')) {
    strategymenager.strategy = rightAnimation;
  }

  strategymenager.doAction();
});

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
/*!**************************!*\
  !*** ./src/00/js/app.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events */ "./src/00/js/events.js");


function Start() {
  (0,_events__WEBPACK_IMPORTED_MODULE_0__["default"])();
}

Start();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map