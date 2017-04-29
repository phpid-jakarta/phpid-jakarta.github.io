'use strict';

window.onload = function(){    

//SLIDER CAROUSEL
        if(typeof $('.slider').slick !== "undefined"){
            $('.slider').slick({
                autoplay: true,
                arrows: true,
                prevArrow: '<a class="slick-prev"><i class="ion-chevron-left"></i></a>',
                nextArrow: '<a class="slick-next"><i class="ion-chevron-right"></i></a>'
            });
        }

}
