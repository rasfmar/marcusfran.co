$(function() {
    AOS.init();
})

function slick() {
    $('.slick').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1
    });
}