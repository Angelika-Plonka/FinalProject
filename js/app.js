$(document).ready(function () {

    /* hamburger menu */

    let hamburgerMenu = $(".hamburger");
    let menuDesktop = $(".desktopMenu");

    hamburgerMenu.on("click", function () {
        menuDesktop.slideToggle();
    });

    menuDesktop.on("click", function(){
        if (window.innerWidth < 640) {
            menuDesktop.slideToggle();
        }
    });

    let resize = function () {
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
    let upButton = $(".upButton");
    upButton.fadeOut();

    function checkPosition () {
        if ($(window).scrollTop() > 100) {
            upButton.fadeIn();
        } else {
            upButton.fadeOut();
        }
    };

    checkPosition();

    $(window).scroll(function(){
        checkPosition();
    })

    upButton.on("click", function(){
        $("html").animate({
            scrollTop: 0
        }, 800);
    })


    /* form validation */
    let submitBtn = $("input[type=submit]");
    let form = $("form");


    submitBtn.on("click", function(){
        event.preventDefault();
        let name= $("input[name=user]");
        let email = $("input[type=email]");
        let message = $("textarea");

        if(name.val().length <=2 || message.val().length ===0 ||  email.val().indexOf("@") < 0) {
            event.preventDefault();
            alert("Prosimy uzupełnić wszystkie pola. Adres email powinien zawierać znak @!");
        } else {
            alert("Dziękujemy, Twoja wiadomość została wysłana");
            name.val("");
            email.val("");
            message.val("");
        }
    })





});