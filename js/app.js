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
          <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="30" height="30"  viewBox="0 0 52 52"><path fill="#4ec794" d="M26 0C11.664 0 0 11.663 0 26s11.664 26 26 26 26-11.663 26-26S40.336 0 26 0zm14.495 17.329-16 18a1.997 1.997 0 0 1-2.745.233l-10-8a2 2 0 0 1 2.499-3.124l8.517 6.813L37.505 14.67a2.001 2.001 0 0 1 2.99 2.659z"/></svg>
          <h2>Дякуємо за підтвердження!</h2>
          <p><a class="info2 d-block mb-2" href="https://t.me/+sTXpiV4dbxJiZmFi" target="_blank">Приєднуйтесь до телеграм групи нашого весілля!</a> <a class="info2 d-block mb-2" href="https://t.me/+sTXpiV4dbxJiZmFi" target="_blank">
          <svg width="48" height="48" viewBox="0 0 240 240"><defs><linearGradient id="a" x1="120" x2="120" y1="240" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1d93d2"></stop><stop offset="1" stop-color="#38b0e3"></stop></linearGradient></defs><circle cx="120" cy="120" r="120" fill="url(#a)"></circle><path fill="#c8daea" d="m81.229 128.772 14.237 39.406s1.78 3.687 3.686 3.687 30.255-29.492 30.255-29.492l31.525-60.89L81.737 118.6Z"></path><path fill="#a9c6d8" d="m100.106 138.878-2.733 29.046s-1.144 8.9 7.754 0 17.415-15.763 17.415-15.763"></path><path fill="#fff" d="M81.486 130.178 52.2 120.636s-3.5-1.42-2.373-4.64c.232-.664.7-1.229 2.1-2.2 6.489-4.523 120.106-45.36 120.106-45.36s3.208-1.081 5.1-.362a2.766 2.766 0 0 1 1.885 2.055 9.357 9.357 0 0 1 .254 2.585c-.009.752-.1 1.449-.169 2.542-.692 11.165-21.4 94.493-21.4 94.493s-1.239 4.876-5.678 5.043a8.13 8.13 0 0 1-5.925-2.292c-8.711-7.493-38.819-27.727-45.472-32.177a1.27 1.27 0 0 1-.546-.9c-.093-.469.417-1.05.417-1.05s52.426-46.6 53.821-51.492c.108-.379-.3-.566-.848-.4-3.482 1.281-63.844 39.4-70.506 43.607a3.21 3.21 0 0 1-1.48.09Z"></path></svg></a></p>
          <img class="w-100" src="images/cat.webp" />
        </div>
      `);

      $form.remove();

    }, 1000);

  });

}) 


