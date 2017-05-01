'use strict';

(function(){
  var swiper = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      spaceBetween: 0,
      autoplay: 4000,
      loop: true
  });

  swiper
    .on('onSlideChangeStart', function(e) {
      $('.swiper-inner').hide();
      var target = $(e.slides[e.activeIndex - 1]).find('.swiper-inner'),
          animate = target.data('animate');

      target.removeClass('animated ' + animate);
    })
    .on('onSlideChangeEnd', function(e) {
      $('.swiper-inner').show();
      var target = $(e.slides[e.activeIndex]).find('.swiper-inner'),
          animate = target.data('animate');

      target.addClass('animated ' + animate);
    });
})();