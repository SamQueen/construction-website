//change the style of the navbar on scroll
$(window).on('scroll', function() {
    let scrollTop = $(document).scrollTop();
    
    if(scrollTop > 0){
        $('nav').addClass('style');
    } else {
        $('nav').removeClass('style');
    }
});

//mobile dropdown menu
$('.mobile-icon').on('click', function() {
    $('nav').toggleClass('drop-down');
    $('nav h1').toggleClass('move-top');
    $('nav .mobile-icon').toggleClass('move-top');
    $('nav ul').toggleClass('show-mobile-nav');
});