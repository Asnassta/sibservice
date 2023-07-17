function tabs(n)
{
  $('.tabs-nav a').removeClass('active');
  $('.tabs-nav a.t'+n).addClass('active');
  $('.tabs-block').fadeOut(0);
  $('.tabs-block.tab_'+n).fadeIn(222);

  let i = 1;
while (i <= 10) { // выводит 0, затем 1, затем 2

   $('.tab_'+i+' .photo-slider-for').slick('refresh');
i++;
 }
   $('.photo-slider-nav').slick('refresh');

   let j = 1;
while (j <= 10) { // выводит 0, затем 1, затем 2

   $('.tab_'+j+' .team__slider').slick('refresh');
j++;
 }
};

$(document).ready(function() {

  /*===============Popup=================*/
    $(".open-popup").on("click", function (event) {
        name_pop = $(this).attr('data-popup');
        event.preventDefault();
        $(".popup."+name_pop).fadeIn(111);
        $(".popup."+name_pop+" .popup__inner").fadeIn(111);
        $('body').addClass("hidden");
    });
    $(".popup-close,  .closex").on("click", function (event) {
        event.preventDefault();
        $(".popup").fadeOut('111');
        $(".popup__inner").fadeOut(111);
        $('body').removeClass("hidden");
    });
  /*==============/popup=================*/

  /*======menu-map=============*/
  $(".menu__adress").on("click", function() {
    $(this).toggleClass("active");
    if ($(window).width() > 760) {
      $(".menu-map").fadeToggle();   
    }
      if ($(window).width() <= 760) {
        $(".menu-map").slideToggle();   
    }  
  });
  /*==========/menu-map=========*/

    /*=========Smooth scroll=============*/
  $("[data-scroll]").on("click", function(event) {
  event.preventDefault();
 
      blockID = $(this).data('scroll');
     
      blockOffset = $('#'+blockID).offset().top;

      $(".header__nav").removeClass('active');
      $(".burger").removeClass('active');
 
    $("html, body").animate ({
      scrollTop: blockOffset - 50
    }, 500);
  });
/*=========/smooth scroll=============*/


/*==================Intro__slider==========*/
$('.intro__slider').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
      //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
      var i = (currentSlide ? currentSlide : 0) + 1;
       z = 0
      v = 0
      if (i >= 10)
      {
        z = ''
      }
      if (slick.slideCount >= 10)
      {
        v = ''
      }
      $('.intro .slider-navigation__counter').html( '<span class="i_1">'+z +''+ i + '</span> <span class="i_2">/</span><span class="i_3"> ' + v + '' + slick.slideCount+'</span>');
  });

$('.intro__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  //fade: true,
  dots: true,
  autoplay: true,
  autoplaySpeed: 4500,
  prevArrow: $('.intro .slider-navigation__arrow_prev'),
  nextArrow: $('.intro .slider-navigation__arrow_next'),
  });
/*==================/intro__slider==========*/

/*==================Team__slider==========*/
$('.team__slider').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
      //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
      var i = (currentSlide ? currentSlide : 0) + 1;
       z = 0
      v = 0
      if (i >= 10)
      {
        z = ''
      }
      if (slick.slideCount >= 10)
      {
        v = ''
      }
      $('.team .slider-navigation__counter').html( '<span class="i_1">'+z +''+ i + '</span> <span class="i_2">/</span><span class="i_3"> ' + v + '' + slick.slideCount+'</span>');
  });

let j = 1;
while (j <= 10) { // выводит 0, затем 1, затем 2
  
  $('.tab_'+j+' .team__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    //fade: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4500,
    prevArrow: $('.tab_'+j+' .slider-navigation__arrow_prev'),
    nextArrow: $('.tab_'+j+' .slider-navigation__arrow_next'),
  });
  j++;
}
/*==================/team__slider==========*/

/*==================Clients__slider==========*/
$('.clients__slider').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
      //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
      var i = (currentSlide ? currentSlide : 0) + 1;
       z = 0
      v = 0
      if (i >= 10)
      {
        z = ''
      }
      if (slick.slideCount >= 10)
      {
        v = ''
      }
      $('.clients .slider-navigation__counter').html( '<span class="i_1">'+z +''+ i + '</span> <span class="i_2">/</span><span class="i_3"> ' + v + '' + slick.slideCount+'</span>');
  });

$('.clients__slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  //fade: true,
  dots: true,
  autoplay: true,
  autoplaySpeed: 4500,
  prevArrow: $('.clients .slider-navigation__arrow_prev'),
  nextArrow: $('.clients .slider-navigation__arrow_next'),
  responsive: [
    {
      breakpoint: 761,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
  ]
  });
/*==================/team__slider==========*/

/*==================Photo-slider==========*/
$('.photo-slider-for').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
      //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
      var i = (currentSlide ? currentSlide : 0) + 1;
       z = 0
      v = 0
      if (i >= 10)
      {
        z = ''
      }
      if (slick.slideCount >= 10)
      {
        v = ''
      }
      $('.photo-slider .slider-navigation__counter').html( '<span class="i_1">'+z +''+ i + '</span> <span class="i_2">/</span><span class="i_3"> ' + v + '' + slick.slideCount+'</span>');
  });


let i = 1;
while (i <= 10) { // выводит 0, затем 1, затем 2
  
  $('.tab_'+i+' .photo-slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.tab_'+i+' .slider-navigation__arrow_prev'),
    nextArrow: $('.tab_'+i+' .slider-navigation__arrow_next'),
    fade: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4500,
    asNavFor: '.photo-slider-nav'
  });
  i++;
}


$('.photo-slider-nav').slick({
  infinite: false,
  slidesToShow: 8,
  slidesToScroll: 1,
  asNavFor: '.photo-slider-for',
  centerMode: false,
  focusOnSelect: true,
  arrows: false,
  });
/*==================/photo-slider==========*/

/*==================Photo-slider==========*/
$('.partners-slider-for').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
      //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
      var i = (currentSlide ? currentSlide : 0) + 1;
       z = 0
      v = 0
      if (i >= 10)
      {
        z = ''
      }
      if (slick.slideCount >= 10)
      {
        v = ''
      }
      $('.partners-slider .slider-navigation__counter').html( '<span class="i_1">'+z +''+ i + '</span> <span class="i_2">/</span><span class="i_3"> ' + v + '' + slick.slideCount+'</span>');
  });

  
  $('.partners-slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.partners-slider .slider-navigation__arrow_prev'),
    nextArrow: $('.partners-slider .slider-navigation__arrow_next'),
    fade: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4500,
    asNavFor: '.partners-slider-nav',
  });


$('.partners-slider-nav').slick({
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.partners-slider-for',
  centerMode: false,
  focusOnSelect: true,
  arrows: false,
  });
/*==================/photo-slider==========*/

});




  /*=========Scroll=========*/
  window.onload = function () {
          var scr = $(".tabs-nav");
          scr.mousedown(function () {
              var startX = this.scrollLeft + event.pageX;
              var startY = this.scrollTop + event.pageY;

              scr.mousemove(function () {

                  this.scrollLeft = startX - event.pageX;

                  this.scrollTop = startY - event.pageY;

                  return false;

              });

          });

          $(window).mouseup(function () {
              scr.off("mousemove");
          });
      }

  /*=========/Scroll=========*/