//change the style of the navbar on scroll
$(window).on('scroll', function() {
    let scrollTop = $(document).scrollTop();
    
    if(scrollTop > 0){
        $('nav').addClass('shrink');
        $('nav img').addClass('change-height');
    } else {
        $('nav').removeClass('shrink');
        $('nav img').removeClass('change-height');
    }
});

//drop down responsive menu
$('nav i').on('click', function() {
    //increase the hight of the navbar when menu icon is clicked
    $('.mobile-ul').toggleClass('nav-grow');
    $('nav ul').toggleClass('show');
});

//close mobile dropdown if link is clicked
$('nav a').on('click', function() {
    $('.mobile-ul').toggleClass('nav-grow');
    $('nav ul').toggleClass('show');
});