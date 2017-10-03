$(window).on('load', function(){   	
	$('.member__img').each(function(){
		var _self = this;
		var imgUrl = 	$(_self).attr('src');
		var img = new Image();
		img.src = imgUrl;
		img.onerror = function (evt) {
			$(_self).attr('src', '/assets/images/member/default.png')
	  };
	});
});