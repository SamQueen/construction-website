//change the style of the navbar on scroll
$(window).on('scroll', function() {
    let scrollTop = $(document).scrollTop();
    
    if(scrollTop > 0){
        $('nav').addClass('shrink');
    } else {
        $('nav').removeClass('shrink');
    }
});
