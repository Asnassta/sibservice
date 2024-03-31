$(document).ready(function() {
/*========Product__slider==========*/
  $('.product__slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    asNavFor: '.product__slider-nav',
  });


$('.product__slider-nav').slick({
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.product__slider-for',
  centerMode: false,
  focusOnSelect: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 541,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
  ]
  });
/*==========/product-slider==========*/
});