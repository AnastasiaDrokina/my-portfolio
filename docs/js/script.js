(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default() {
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
};

exports.default = _default;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default() {
  var btnToggle = document.querySelector(".js-header-toggle");
  var menuNav = document.querySelector(".js-header-nav");
  var menuLinks = document.querySelectorAll(".js-header-link"); // Open and close menu

  btnToggle.addEventListener("click", function () {
    if (!menuNav.classList.contains("is-opened")) {
      menuNav.classList.add("is-opened");
      btnToggle.classList.add("is-opened");
    } else {
      menuNav.classList.remove("is-opened");
      btnToggle.classList.remove("is-opened");
    }
  }); // Active state on link

  menuLinks.forEach(function (menuLink) {
    menuLink.addEventListener("click", function () {
      menuLinks.forEach(function (link) {
        link.classList.remove("is-active");
      });
      menuLink.classList.add("is-active");
    });
  });
};

exports.default = _default;

},{}],3:[function(require,module,exports){
"use strict";

var _menu = _interopRequireDefault(require("./modules/menu.js"));

var _anchors = _interopRequireDefault(require("./modules/anchors.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _menu.default)();
(0, _anchors.default)();

},{"./modules/anchors.js":1,"./modules/menu.js":2}]},{},[3]);
