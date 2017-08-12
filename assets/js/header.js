/*
 Header sliding effect

 @Author @muhibbudins
 @Date 29 April 2017
*/

'use strict';

window.onload = function() {
  var header = $('.header'),
      content = $('.page-content');

  if (window.location.pathname !== '/') {
    header.addClass('--default');
    content.css('padding', '5em 0 2em');
    return;
  }

  $(window).scroll(function(e) {
    if ($(this).scrollTop() > 50) {
      header.addClass('--default');
    } else {
      header.removeClass('--default');
    }
  });
}