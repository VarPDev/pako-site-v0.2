var carousel = true;
var carousel2 = true;
var description = true;
var intro = 0;

$(window).scroll(function () {
    appiar();
});

function appiar() {
    $('#carousel-team').each(function () {
        if (carousel) {
            if (isScrolledIntoView($(this))) {
                $('#carousel-team').css('opacity', '1');
                $('#carousel-team').addClass('zoomInUp');
                carousel = false;
            }
            else {
            }
        }
    });
    
    $('#carousel-team-2').each(function () {
        if (carousel2) {
            if (isScrolledIntoView($(this))) {
                $('#carousel-team-2').css('opacity', '1');
                $('#carousel-team-2').addClass('zoomInUp');
                carousel2 = false;
            }
            else {
            }
        }
    });

    $('#description').each(function () {
        if (description) {
            if (isScrolledIntoView($(this))) {
                $('#description').css('opacity', '1');
                $('#description').addClass('zoomInUp');
                carousel = false;
            }
            else {
            }
        }
    });
    
    $('.intro').each(function () {
        if (intro < 2) {
            if (isScrolledIntoView($(this))) {
                $(this).css('opacity', '1');
                $(this).addClass('zoomInUp');
                intro++;
            }
            else {
            }
        }
    });
}

function isScrolledIntoView(elem) {
    var $elem = $(elem);
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(document).ready(function () {
    appiar();
    $('.scrollspy').scrollSpy();
    $('.carousel.carousel-slider').carousel({});
});

