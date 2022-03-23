$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    lazyLoad:true,
    margin:10,
    nav:true,
    center: true,
    responsive:{
        0:{
            items:1
        },
        485:{
            items:1
        },
        960:{
            items:2
        },
        1200:{
            items:3
        }
    }
})

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
      margin:10,
      nav:true,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true,
      center: true,
      navText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>"
      ],
      responsive:{
        0:{
            items:1
        },
        485:{
            items:1
        },
        960:{
            items:2
        },
        1200:{
            items:3
        }
      }
    });
  });