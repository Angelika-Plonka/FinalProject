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
    //user validation
    $('#user').on('blur', function () {
        var input = $(this);
        var name_length = input.val().length;
        if (name_length >= 4 && name_length <= 15) {
            input.removeClass("invalid").addClass("valid");
            input.next('.prompt').text("").removeClass("error").addClass("right");
        } else {
            input.removeClass("valid").addClass("invalid");
            input.next('.prompt').text("Pole musi mieć więcej niż 3 i mniej niż 16 znaków!").addClass("error");
        }
    });

    //email validation
    $('#mail').on('blur', function () {
        var input = $(this);
        var pattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        var emailTest = pattern.test(input.val());
        if (emailTest) {
            input.removeClass("invalid").addClass("valid");
            input.next('.prompt').text("").removeClass("error").addClass("right");
        } else {
            input.removeClass("valid").addClass("invalid");
            input.next('.prompt').text("Wprowadź poprawny email!").addClass("error");
        }
    });

    //message validation
    $('#message').on('blur', function () {
        var input = $(this);
        var message = $(this).val();
        if (message) {
            input.removeClass("invalid").addClass("valid");
            input.next('.prompt').text("").removeClass("error").addClass("right");
        } else {
            input.removeClass("valid").addClass("invalid");
            input.next('.prompt').text("Wiadomość nie może być pusta!").addClass("error");
        }
    });

    var submitBtn = $("input[type=submit]");
    submitBtn.on("click", function (event) {
        event.preventDefault();
        var user = $('#user');
        var mail = $('#mail');
        var message = $('#message');

        if (user.hasClass('valid') && mail.hasClass('valid') && message.hasClass('valid')) {
            alert("Pomyślnie wysłano formularz.");
            user.val("");
            mail.val("");
            message.val("");
        } else {
            event.preventDefault();
            alert("Uzupełnij wszystkie pola!");
        }
    });
});

/***/ })
/******/ ]);