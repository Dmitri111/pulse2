$(document).ready(function(){
    $('.courousel__inner').slick({
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                arrows: false,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                arrows: false,
                dots: true
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                dots: true
              }
            }
          ]
    });
  });