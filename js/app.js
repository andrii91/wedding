$( document ).ready(function() {

/* 2. slick Nav */
// mobile_menu
var menu = $('ul#navigation');
if(menu.length){
  menu.slicknav({
    prependTo: ".mobile_menu",
    closedSymbol: '+',
    openedSymbol:'-'
  });
};


/* 3. MainSlider-1 */
function mainSlider() {
  var BasicSlider = $('.slider-active');
  BasicSlider.on('init', function (e, slick) {
    var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
    doAnimations($firstAnimatingElements);
  });
  BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
    var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
    doAnimations($animatingElements);
  });
  BasicSlider.slick({
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    fade: true,
    arrows: false,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  });

  function doAnimations(elements) {
    var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    elements.each(function () {
      var $this = $(this);
      var $animationDelay = $this.data('delay');
      var $animationType = 'animated ' + $this.data('animation');
      $this.css({
        'animation-delay': $animationDelay,
        '-webkit-animation-delay': $animationDelay
      });
      $this.addClass($animationType).one(animationEndEvents, function () {
        $this.removeClass($animationType);
      });
    });
  }

  $("[data-background]").each(function () {
    $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
  });
}

mainSlider();

$('.faq-item').click(function(){
  $(this).find('.title').toggleClass('active');
  $(this).find('.content').slideToggle(200);
})


  
  $(window).scroll(function () {
    return $('.main-header').toggleClass("fixed", $(window).scrollTop() > 0);
  });

  $('.scroll').click(function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;

    $('body,html').animate({
      scrollTop: top - 100
    }, 700);

  });

//   $('.testimonials-nav-item').click(function(){
//     $('.testimonials-nav-item').removeClass('active');
//     $(this).addClass('active');

//     $('.testimonials-item').removeClass('active');
//     $($(this).data('tab')).addClass('active');
//   })

//   $('.open-menu').click(function(){
//     $('#menu').slideToggle(200)
//   })

//   $('.faq-item .title').click(function(){
//     $(this).toggleClass('active');
//     $(this).parent().find('.content').slideToggle(200);
//   })


  /* form valid*/
  // let alertImage = '<svg class="absolute right-6 bottom-5 w-5 h-5 text-rose-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 286.1 286.1"><path d="M143 0C64 0 0 64 0 143c0 79 64 143 143 143 79 0 143-64 143-143C286.1 64 222 0 143 0zM143 259.2c-64.2 0-116.2-52-116.2-116.2S78.8 26.8 143 26.8s116.2 52 116.2 116.2S207.2 259.2 143 259.2zM143 62.7c-10.2 0-18 5.3-18 14v79.2c0 8.6 7.8 14 18 14 10 0 18-5.6 18-14V76.7C161 68.3 153 62.7 143 62.7zM143 187.7c-9.8 0-17.9 8-17.9 17.9 0 9.8 8 17.8 17.9 17.8s17.8-8 17.8-17.8C160.9 195.7 152.9 187.7 143 187.7z" fill="currentColor"/></svg>';
  // let error;
  // $('.submit').click(function (e) {
  //   e.preventDefault();
  //   let ref = $(this).closest('form').find('[required]');
  //   $(ref).each(function () {
  //     let thisFiled = $(this);

  //     if ($(this).val().trim() === '') {
  //         thisFiled.addClass('error').parent('.label').append('<div class="allert">' + alertImage + '</div>');
  //         error = 1;
  //         $(":input.error:first").focus();
  //         return false;
  //     } else {
  //       if (thisFiled.attr("type") === 'email') {
  //         let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //         if (!pattern.test(thisFiled.val())) {
  //           $("input[name=email]").val('');
  //           thisFiled.addClass('error').parent('.label').append('<div class="allert">' + alertImage + '</div>');
  //           error = 1;
  //           $(":input.error:first").focus();
  //           return false;
  //         }else{
  //           error = 0;
  //           thisFiled.removeClass('error').parent('.label').find('.allert').remove();
  //         }
  //       } else if (thisFiled.attr("type") === 'tel') {
  //         let patterntel = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  //         if (!patterntel.test(thisFiled.val())) {
  //           $("input[name=phone]").val('');
  //           thisFiled.addClass('error').parent('.label').append('<div class="allert">' + alertImage + '</div>');
  //           error = 1;
  //           $(":input.error:first").focus();
  //           return false;
  //         }else{
  //           error = 0;
  //           thisFiled.removeClass('error').parent('.label').find('.allert').remove();
  //         }

  //       }  else {
  //         error = 0;
  //         thisFiled.removeClass('error').parent('.label').find('.allert').remove();
  //       }
  //     }
  //   });
  //   if (error !== 1) {
  //     $(this).unbind('submit').submit();
  //   }
  // });

  $('#phone').inputmask("+38099 99 999 99")

  $('form').on('submit', function (e) {
    e.preventDefault();
    var $form = $(this);
    $form.find('.submit').addClass('inactive');
    $form.find('.submit').prop('disabled', true);

    $.ajax({
      url: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfVFjbukKUsSeSjnCiIyq54Nn3RX8hCbqA-FW2J38E6Cjy-Ng/formResponse?embedded=true',
      data: $form.serialize(),
      type: 'POST',
  });

    setTimeout(function () {
      
      // $form.find('.submit').removeClass('inactive');
      // $form.find('.submit').prop('disabled', false);
      // $form[0].reset();

      $form.parent().append(`
        <div class="mess-success text-center">
          <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="50" height="50"  viewBox="0 0 52 52"><path fill="#4ec794" d="M26 0C11.664 0 0 11.663 0 26s11.664 26 26 26 26-11.663 26-26S40.336 0 26 0zm14.495 17.329-16 18a1.997 1.997 0 0 1-2.745.233l-10-8a2 2 0 0 1 2.499-3.124l8.517 6.813L37.505 14.67a2.001 2.001 0 0 1 2.99 2.659z"/></svg>
          <h2>Дякуємо за підтвердження!</h2>
          <p>Ми зв'яжемось з вами)</p>
        </div>
      `);

      $form.remove();

    }, 1000);

  });


//   $('input[name="phone"]').inputmask("+9{1,15}");
//   $('#card_numbe').inputmask("9999 9999 9999 9999");
//   $('#exp_date').inputmask("99/99");
//   $('#cvv').inputmask("999");
//   $('#referral').inputmask("9999999");
  

//   function readURL(input) {
//     if (input.files && input.files[0]) {
//         var reader = new FileReader();

//         reader.onload = function (e) {
//             $('#profile-update-form-img').attr('src', e.target.result).addClass('change');
//         }

//         reader.readAsDataURL(input.files[0]);
//     }
// }

//   $('#avatar').change(function(){
//      readURL(this);
//   })

//   $('.password-icon').click(function(){
//     $(this).toggleClass('show-password');
//     if($(this).parent().find('input').attr('type') === "password") {
//       $(this).parent().find('input').attr('type', 'text');
//     }else{
//       $(this).parent().find('input').attr('type', 'password');
//     }
//   })

//   $('#check').change(function(){
//     if($(this).is(':checked')) {
//       $(this).parents('form').find('#check-success').removeAttr('disabled')
//     }else{
//       $(this).parents('form').find('#check-success').attr('disabled', 'disabled')
//     }
//   })

//   $(window).scroll(function () {
//     var $sections = $('.roadmap-list .large-title');


//     $sections.each(function (i, el) {
//       const top = $(el).offset().top - 500;
//       const bottom = top + $(el).height() + $(window).height()*3;
//       const scroll = $(window).scrollTop();
//       let heightBefore = $('.item'+i).height() - 10;

//       const topMenu = $(el).offset().top - 70;
//       const bottomMunu = topMenu + $(el).height() + $(window).height()/3;
//       //    var id = $(el).attr('id');
//       if (scroll > top && scroll < bottom && $(el).hasClass('large-title')) {
//         $(el).addClass('active');
//         $(el).find('.before').height(heightBefore);

//         // $(el).find('.before').animate({
//         //   opacity: 1,
//         //   height: heightBefore
//         // });

//       } else {
//         $(el).removeClass('active');
//       }

//       if (scroll > topMenu && scroll < bottomMunu) {
//         // $('.nav-btn').addClass('dark-mode');
//         // $('.logo').addClass('dark-mode');

//       } else {}
//     })


//   });


//   $('[data-modal]').click(function (e) {
//     e.preventDefault();

//     var $this = $(this),
//       modal = $(this).data('modal');

//       $('body').addClass('overflow-hidden')

//     $(modal).addClass('show');
//   })

//     $('.modal .close').click(function () {
//     var $this = $(this);
//     $this.parents('.modal').removeClass('show');
//     $('body').removeClass('overflow-hidden')
//     if ($this.parents('.modal').attr('id') === 'media') {
//       $this.parents('.modal').find('.modal-content').text('')
//     }
//   })

//   $(document).mouseup(function (e) {
//     var container = $(".modal-dialog");
//     if (container.has(e.target).length === 0) {
//       container.parents('.modal').removeClass('show');
//       $('body').removeClass('overflow-hidden');

//       $('#media').find('.modal-content').text('')
//     }
//   });


//   $(document).keydown(function (e) {
//     // ESCAPE key pressed 
//     if (e.keyCode == 27) {
//       if ($('.modal.show').attr('id') === 'media') {
//         $('#media').find('.modal-content').text('')
//       }
//       $('.modal').removeClass('show');
//       $('body').removeClass('overflow-hidden');
//     }
//   })

}) 


