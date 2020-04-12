/*Animation Bars, of the navigation*/
//($)Selector
$(document).ready(function () {
    $('.menu-toggler').on('click', function() {
        $('.menu-toggler').toggleClass('open');
       $('.top-nav').toggleClass('open');
    });

//Declaration to close the top-nav, when click on nav-link
    $('.top-nav .nav-link').on('click', function () {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

//Smooth Scrolling
                    //(*)To select all them HREF with ID
    $('nav a[href*="#"]').on('click', function () {
        $('html, body').animate( {
            //Inside my animated what i whant to do
                       //What ever ha been reference
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 2000);
    });
 
// Scroll to the top, when clicking the button to up
    $('#up').on('click', function(){
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
    });

// Animatios when all scrolls AOS ANIMATE - https://michalsnik.github.io/aos/
    AOS.init({
        easing: 'ease', // default easing for AOS animations
        duration: 1000 //values from 0 to 3000, with step 50ms
    });
});


