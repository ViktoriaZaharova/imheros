$('.article-slider1').slick({
    slidesToShow: 1,
    fade: true,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
    appendArrows: '.article-slider__nav1',
});

$('.article-slider2').slick({
    slidesToShow: 1,
    fade: true,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
    appendArrows: '.article-slider__nav2',
});

$('.btn-burger').on('click', function () {
   $('.mobile-menu').fadeToggle();
});

$('.btn-close').on('click', function () {
    $('.mobile-menu').fadeOut();
});

$('.btn-toggle-plus').on('click', function () {
   $(this).toggleClass('click').parents('.solider-box').find('.solider-box__body').slideToggle();
});

$('.dropdown-toggle').on('click', function (e) {
    e.preventDefault();
    $(this).find('.dropdown-toggle__icon').fadeToggle();
    $(this).siblings('.dropdown-menu').slideToggle();
});

$('.gallery-slider').slick({
    slidesToShow: 4,
    arrows: false,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                arrows: true
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                arrows: true
            }
        },
        {
            breakpoint: 420,
            settings: {
                slidesToShow: 1,
                arrows: true
            }
        }
    ]
});