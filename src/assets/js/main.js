$(function() {
    AOS.init();

    $('a.nav-link').click(function() {
        $('.nav-item.active').removeClass('active');
        $(this).parents().eq(0).addClass('active');
        $('.navbar-toggler').click();
    })

    $('.desktop-nav a').click(function() {
        $('.desktop-nav a.active').removeClass('active');
        $(this).addClass('active');
    })
})

function slick() {
    $('.slick').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
}