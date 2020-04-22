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
    
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleClass(item) {
      $(item).each(function(i) {
        $(this).on('click', function(e) {
          e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
      });
    };

    toggleClass('.catalog-item__back');
    toggleClass('.catalog-item__link');

    //Modal 

    $('[data-modal=consultation]').on('click', function(){
      $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function(){
      $('.overlay, #consultation, #order, #thanks').fadeOut('fast');
    });

    $('.button__catalog-item').each(function(i){
      $(this).on('click', function(){
        $('#order .modal__desc').text($('.catalog-item__subtitle').eq(i).text());
        $('.overlay, #order').fadeIn('slow');
      })
    });

    function valideForms(form) {
      $(form).validate({
        rules: {
          name: "required",
          phone: "required",
          email: {
            required: true,
            email: true
            }
          },
          messages: {
            name: "Введите свое имя",
            phone: {
              required: "Введите свой номер телефона",
              phone: "Введите свой номер телефона"
            },
            email: {
              required: "Введите емайл для связи",
              email: "Введите верный формат емайл name@domain.com"
            }
        }
      });
    };

    valideForms('#consultation-form');
    valideForms('#consultation form');
    valideForms('#order form');


/*       $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
    }); */

    
  });

  