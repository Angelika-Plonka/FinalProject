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

});