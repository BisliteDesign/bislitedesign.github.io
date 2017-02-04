requirejs.config({
  baseURL: './public/js'
});

define (["jquery", "slick"], function($) {
  "use strict";

  var Page={
    init: function(){
      this.navigation();
      this.mobileMenu();
    },
    navigation: function(){
      var navLink = $('.has-children');
      navLink.on('mouseenter' , function(){
        $(this).find('.submenu').stop().slideDown('.4s');
      });
      navLink.on('mouseleave' , function(){
          $(this).find('.submenu').stop().slideUp('.4s');
      });
    },
    mobileMenu: function(){
      var mobMenu = $('.mobile-menu');
      mobMenu.on('click', function(){
        if(!mobMenu.hasClass('active')){
          $(this).addClass('active');
          $(this).next().slideDown('fast');
        } else {
          $(this).removeClass('active');
          $(this).next().slideUp('fast');
        }
      });
    }
  };
  var Homepage = {
    init: function (){
      this.slider();
      this.carousel();
    },
    slider: function(){
      $(".slider-slick").slick({
        dots: true,
        responsive: [
          {
            breakpoint: 640,
            settings: {
              dots: false,
            }
          },
        ]
      });
    },
    carousel: function(){
      $('.main__slick').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            }
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 450,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
    }
  };

  Page.init();
  Homepage.init();
});