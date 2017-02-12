$(document).ready(function () {
    $('.movie-block').slick({
        arrows: false,
        dots: true,
    });

    $('.read-more').on('click', function(event) {
        const sectionIndex = $('.read-more').index(this);
        $('.movie-block').addClass('open');
        $('.slick-dots').hide();
    })
});
