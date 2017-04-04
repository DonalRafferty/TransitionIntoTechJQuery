'use strict';

$(document).ready(function(){
   	// jQuery methods go here...
   	var time = 0;
    $('.section-one').click(function(){
		$('.section-one').hide(time);
	});
	$('.section-two').click(function(){
		$('.section-two').hide(time);
	});
	$('#reset').click(function(){
		$('.section-one').show(time);
		$('.section-two').show(time);
	});
	$('#toggle').click(function(){
		$('.section-one').toggle(time);
		$('.section-two').toggle(time);
	});
});
