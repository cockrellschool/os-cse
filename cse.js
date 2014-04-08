


(function ($) {
  // Original JavaScript code.

  console.log('heya');


  var wide = $('.views_slideshow_slide img').width();
  $('.block-boxes-os_boxes_slideshow > div,.views-slideshow-controls-text,.views_slideshow_cycle_main,.views-slideshow-controls-bottom').css('width', wide);

  $('h1 a').click(function (e) {
  	e.preventDefault();
  	console.log('menu');
	// target = $('#block-os-primary-menu');
      
 //    $('html,body').animate({
 //       scrollTop: target.offset().top
 //    }, 1000);

  });


})(jQuery);