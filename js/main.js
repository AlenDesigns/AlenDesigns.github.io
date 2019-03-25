jQuery(document).ready(function($) {
    $scrollBtn = $('.scroll-top-btn');
    screenHeight = $(window).height();
    
    scrollBtnOffset = screenHeight / 2;

    $(document).scroll(function() {
        console.log($(document).scrollTop());
        if ($(document).scrollTop() >= scrollBtnOffset) {
            $scrollBtn.addClass('scrolled');
        } else {
            $scrollBtn.removeClass('scrolled');
        }
    });

    $scrollBtn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    });
});