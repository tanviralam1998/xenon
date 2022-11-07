$(document).ready(function() {
    
    // magnificPopup 
    $('.projectPopup').magnificPopup({
        type:'image',
        gallery:{
        enabled:true
        }
    });

    // counterUp
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    $(".testimonials").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        nav: false,
        dots: true
    });
    
    // for stikey header

    $(window).load(function () {
        $(window).on('scroll', function(){
            if ($(this).scrollTop() > 1) {
                $('.header').addClass('fixed');
            } else{
                $('.header').removeClass('fixed');
            }
        });

        // scroll to Top button
        $('#scrollTop').click(function(){
            $('html, body').animate({
                scrollTop: 0
            }, '1000')
        });
    

        $(window).on('scroll', function(){
            if ($(this).scrollTop() > 600) {
                $('#scrollTop').css('opacity', '1');
            } else{
                $('#scrollTop').css('opacity', '0');
            }
        });
    });


});