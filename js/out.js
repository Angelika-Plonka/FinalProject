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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$(document).ready(function () {

    /* hamburger menu */

    var hamburgerMenu = $(".hamburger");
    var menuDesktop = $(".desktopMenu");

    hamburgerMenu.on("click", function () {
        menuDesktop.slideToggle();
    });

    menuDesktop.on("click", function () {
        if (window.innerWidth < 640) {
            menuDesktop.slideToggle();
        }
    });

    var resize = function resize() {
        if (window.innerWidth >= 640) {
            menuDesktop.fadeIn();
            hamburgerMenu.hide();
        } else {
            menuDesktop.hide();
            hamburgerMenu.fadeIn();
        }
    };
    resize();

    window.addEventListener("resize", function () {
        resize();
    });

    /* scrolling button */
    var upButton = $(".upButton");
    upButton.fadeOut();

    function checkPosition() {
        if ($(window).scrollTop() > 100) {
            upButton.fadeIn();
        } else {
            upButton.fadeOut();
        }
    };

    checkPosition();

    $(window).scroll(function () {
        checkPosition();
    });

    upButton.on("click", function () {
        $("html").animate({
            scrollTop: 0
        }, 800);
    });

    /* form validation */
    var submitBtn = $("input[type=submit]");
    var form = $("form");

    submitBtn.on("click", function () {
        event.preventDefault();
        var name = $("input[name=user]");
        var email = $("input[type=email]");
        var message = $("textarea");

        if (name.val().length <= 2 || message.val().length === 0 || email.val().indexOf("@") < 0) {
            event.preventDefault();
            alert("Prosimy uzupełnić wszystkie pola. Adres email powinien zawierać znak @!");
        } else {
            alert("Dziękujemy, Twoja wiadomość została wysłana");
            name.val("");
            email.val("");
            message.val("");
        }
    });
});

/***/ })
/******/ ]);