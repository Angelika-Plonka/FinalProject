$(document).ready(function () {

    /* hamburger menu */

    let hamburger = $(".hamburger")
    let desktopMenu = $(".desktopMenu")

    hamburger.on("click", function () {
        desktopMenu.slideToggle();
    });

    desktopMenu.on("click", function(){
        if (window.innerWidth < 640) {
            desktopMenu.slideToggle();
        }
    })

    let resize = function () {
        if (window.innerWidth >= 640) {
            desktopMenu.fadeIn();
            hamburger.hide();
        } else {
            desktopMenu.hide();
            hamburger.fadeIn();
        }
    }
    resize();

    window.addEventListener("resize", function () {
        resize();
    });

});