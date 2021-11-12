$(document).ready(function() {
    $("#slider").bxSlider({
        auto: true,
        randomStart: true,
        minSlides: 1,
        moveSlides: 1,
        slideWidth: 500,
        slideMargin: 20,
        captions: true,
        speed: 3000,

        pager: true,
        pagerType: 'short',
        pagerSelector: '#id_pager',
    });
});