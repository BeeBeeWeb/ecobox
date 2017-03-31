'use strict';

$(document).ready(function() {

    $('.slider').slick({
      autoplay:false,
      autoplaySpeed:5000,
      arrows:true,
      dots:false,
      pauseOnFocus:false,
      pauseOnHover:false
  });


    $('.slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
      console.log(nextSlide);

      var lastSlide = $(".slick-slide:nth-child(5)").hasClass("slick-active");

      if (lastSlide==true) {
        $(".slick-prev").css({'background': 'url(./images/left-arrow-green.png) no-repeat'});
        $(".slick-next").css({'background': 'url(./images/left-arrow-green.png) no-repeat'});
        $(".sliderPx1, .sliderPx2, .sliderPx3, .sliderPx4").css({'background': 'green'});
      }else{
        $(".slick-prev").css({'background': 'url(./images/left_arrow.png) no-repeat'});
        $(".slick-next").css({'background': 'url(./images/left_arrow.png) no-repeat'});
        $(".sliderPx1, .sliderPx2, .sliderPx3, .sliderPx4").css({'background': 'url(./images/background.jpg) repeat-x'});
      }

    });


    $(".slick-prev").html("");
    $(".slick-next").html("");

    $(".slick-next").click(function(){

      var lastSlide = $(".slick-slide:nth-child(5)").hasClass("slick-active");

      if (lastSlide==true) {
        $(".slick-prev").css({'background': 'url(./images/left-arrow-green.png) no-repeat'});
        $(".slick-next").css({'background': 'url(./images/left-arrow-green.png) no-repeat'});
        $(".sliderPx1, .sliderPx2, .sliderPx3, .sliderPx4").css({'background': 'green'});
      }else{
        $(".sliderPx1, .sliderPx2, .sliderPx3, .sliderPx4").css({'background': 'url(./images/background.jpg) repeat-x'});
      }

    });


});