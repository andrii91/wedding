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

    $("[data-background]").each(function () {
      $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    });
  }
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


}) 


