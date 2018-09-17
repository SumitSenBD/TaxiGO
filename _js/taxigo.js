$(document).ready(function(){
    new WOW().init();

    $("a.js-scroll-trigger").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    $('body').scrollspy({
        target: '#navigation',
        offset: 56
    });

    var navbarCollapse = function() {
        if ($("#navigation").offset().top > 100) {
            $("#navigation").addClass("navbar-shrink");
        } else {
            $("#navigation").removeClass("navbar-shrink");
        }
    };

    navbarCollapse();
    $(window).scroll(navbarCollapse);
});