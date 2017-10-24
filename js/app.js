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
    //user validation
    $('#user').on('blur', function() {
        let input = $(this);
        let name_length = input.val().length;
        if(name_length >= 4 && name_length <= 15){
            input.removeClass("invalid").addClass("valid");
            input.next('.prompt').text("").removeClass("error").addClass("right");
        }
        else{
            input.removeClass("valid").addClass("invalid");
            input.next('.prompt').text("Pole musi mieć więcej niż 3 i mniej niż 16 znaków!").addClass("error");

        }
    });

    //email validation
    $('#mail').on('blur', function() {
        let input = $(this);
        let pattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        let emailTest = pattern.test(input.val());
        if(emailTest){
            input.removeClass("invalid").addClass("valid");
            input.next('.prompt').text("").removeClass("error").addClass("right");
        }
        else{
            input.removeClass("valid").addClass("invalid");
            input.next('.prompt').text("Wprowadź poprawny email!").addClass("error");
        }
    });

    //message validation
    $('#message').on('blur', function() {
        let input = $(this);
        let message = $(this).val();
        if(message){
            input.removeClass("invalid").addClass("valid");
            input.next('.prompt').text("").removeClass("error").addClass("right");
        }
        else{
            input.removeClass("valid").addClass("invalid");
            input.next('.prompt').text("Wiadomość nie może być pusta!").addClass("error");
        }
    });

    let submitBtn = $("input[type=submit]");
    submitBtn.on("click", function(event){
        event.preventDefault();
        let user = $('#user');
        let mail = $('#mail');
        let message = $('#message');

        if(user.hasClass('valid') && mail.hasClass('valid') && message.hasClass('valid')){
            alert("Pomyślnie wysłano formularz.");
            user.val("");
            mail.val("");
            message.val("");
        }
        else {
            event.preventDefault();
            alert("Uzupełnij wszystkie pola!");
        }
    })



});