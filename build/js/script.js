(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default() {
  (function () {
    var anchors = document.querySelectorAll("a[href^=\"#\"]");
    anchors.forEach(function (anchor) {
      anchor.addEventListener("click", function (evt) {
        evt.preventDefault();
        var href = anchor.getAttribute("href");
        var target = document.querySelector(href);

        if (target) {
          target.scrollIntoView({
            behavior: "smooth"
          });
        }
      });
    });
  })();
};

exports.default = _default;

},{}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default() {
  var works = document.querySelectorAll(".work");
  works.forEach(function (work) {
    var workLink = work.querySelector(".work__link");
    var workContainer = work.querySelector(".work__container");

    var workOff = function workOff() {
      work.classList.remove("is-hover");
      workContainer.removeEventListener("transitionend", workOff);
    };

    var workOn = function workOn() {
      work.classList.add("is-hover");
    };

    var workTransitionEnd = function workTransitionEnd() {
      workContainer.addEventListener("transitionend", workOff);
    };

    workLink.addEventListener("mouseenter", workOn);
    workLink.addEventListener("focus", workOn);
    workLink.addEventListener("mouseleave", workTransitionEnd);
    workLink.addEventListener("blur", workTransitionEnd);
  });
};

exports.default = _default;

},{}],5:[function(require,module,exports){
"use strict";

var _menu = _interopRequireDefault(require("./modules/menu.js"));

var _logo = _interopRequireDefault(require("./modules/logo.js"));

var _work = _interopRequireDefault(require("./modules/work.js"));

var _anchors = _interopRequireDefault(require("./modules/anchors.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _menu.default)();
(0, _logo.default)();
(0, _work.default)();
(0, _anchors.default)();

},{"./modules/anchors.js":1,"./modules/logo.js":2,"./modules/menu.js":3,"./modules/work.js":4}]},{},[5]);
