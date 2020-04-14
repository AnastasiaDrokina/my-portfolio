(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default() {
  var logos = document.querySelectorAll(".header__logo");
  var logosLength = logos.length;
  var randomNumber = Math.floor(Math.random() * logosLength);
  logos[randomNumber].classList.add("header__logo--active");
};

exports.default = _default;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default() {
  var btnToggle = document.querySelector(".header__toggle");
  var menuNav = document.querySelector(".header__nav");
  var menuLinks = document.querySelectorAll(".header__link"); // Open and close menu

  btnToggle.addEventListener("click", function () {
    if (!menuNav.classList.contains("header__nav--opened")) {
      menuNav.classList.add("header__nav--opened");
      btnToggle.classList.add("header__toggle--opened");
    } else {
      menuNav.classList.remove("header__nav--opened");
      btnToggle.classList.remove("header__toggle--opened");
    }
  }); // Active state on link

  menuLinks.forEach(function (menuLink) {
    menuLink.addEventListener("click", function () {
      menuLinks.forEach(function (link) {
        link.classList.remove("header__link--active");
      });
      menuLink.classList.add("header__link--active");
    });
  });
};

exports.default = _default;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var slider = function slider() {
  return true;
};

var _default = slider;
exports.default = _default;

},{}],4:[function(require,module,exports){
"use strict";

var _slider = _interopRequireDefault(require("./modules/slider.js"));

var _menu = _interopRequireDefault(require("./modules/menu.js"));

var _logo = _interopRequireDefault(require("./modules/logo.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _slider.default)();
(0, _menu.default)();
(0, _logo.default)();

},{"./modules/logo.js":1,"./modules/menu.js":2,"./modules/slider.js":3}]},{},[4]);
