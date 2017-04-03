'use strict';

$(document).ready(function(){
   // jQuery methods go here...
   var time = 1000;
	$('#animate').click(function(){
		$(".section-one").animate({
        	left: '400px',
        	opacity: '0.2',
        	height: '50px',
        	width: '50px'
    	});
    	$(".section-one").animate({
        	top: '100px',
        	opacity: '0.8',
        	height: '150px',
        	width: '150px',
        	borderRadius: '150px',
            backgroundColor: 'pink'
    	}, time);
    	$(".section-one").animate({
        	left: '15px',
        	top: '15px',
        	opacity: '1',
        	height: '300px',
        	width: '300px',
        	borderRadius: '0px'
    	}, time);
	});
});
