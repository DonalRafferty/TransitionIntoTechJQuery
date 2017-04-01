'use strict';

$(document).ready(function(){
   // jQuery methods go here...
   var time = 3000;
	$('#in').click(function(){
		$('.section-one').fadeIn();
		$('.section-two').fadeIn('slow');
		$('.section-three').fadeIn(time);
	});
	$('#out').click(function(){
		$('.section-one').fadeOut();
		$('.section-two').fadeOut('slow');
		$('.section-three').fadeOut(time);
	});
	$('#slide-up').click(function(){
		$('.section-one').slideUp();
		$('.section-two').slideUp('slow');
		$('.section-three').slideUp(time);
	});
	$('#slide-down').click(function(){
		$('.section-one').slideDown();
		$('.section-two').slideDown('slow');
		$('.section-three').slideDown(time);
	});
});
