var carousel = true;
var carousel2 = true;
var description = true;
var intro = true;
var infoTitle = true;
var dev = true;
var justDestroyed = false;

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
        if (intro) {
            if (isScrolledIntoView($(this))) {
                $(this).css('opacity', '1');
                $(this).addClass('zoomInUp');
                intro = false;
            }
            else {
            }
        }
    });

    $('.info-title').each(function () {
        if (infoTitle) {
            if (isScrolledIntoView($(this))) {
                $(this).css('opacity', '1');
                $(this).addClass('zoomInUp');
                infoTitle = false;
            }
            else {
            }
        }
    });
    
    $('.chart--dev').each(function () {
        if (dev) {
            if (isScrolledIntoView($(this))) {
                $('.chart--dev-title').addClass('chart__title');
                $('.chart--dev-prod').addClass('chart__title');
                $('.chart--dev-design').addClass('chart__title');
                dev = false;
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
    $('.carousel.carousel-slider').carousel({ fullWidth: true });
    $('.carousel.works').carousel({
        noWrap: true,
        indicators: true,
        shift: 50,
        dist: -150
    });
    if ($(window).width() < 600) {
        $('#main').removeClass('z-depth-5');
        justDestroyed = false;
    } else {
        $('#main').addClass('z-depth-5');
        justDestroyed = true;
    }
});

$(window).resize(function () {
    if ($(window).width() < 600 && !justDestroyed) {
        $('.carousel').carousel('destroy');
        $('.carousel.works').carousel({
            noWrap: true,
            indicators: true,
            shift: 50,
            dist: -150
        });

        $('#main').removeClass('z-depth-5');

        justDestroyed = true;
    } else if ($(window).width() >= 600 && justDestroyed) {
        if (justDestroyed) {
            $('.carousel').carousel('destroy');
            $('.carousel.works').carousel({
                noWrap: true,
                indicators: true,
                shift: 50,
                dist: -150
            });

            $('#main').addClass('z-depth-5');

            justDestroyed = false;
        }
    }

});
