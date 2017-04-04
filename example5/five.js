'use strict';

$(document).ready(function(){
   // jQuery methods go here...
	$('#clear').click(function(){
		$("#text").removeClass('classOne');
        $("#text").removeClass('classTwo');
	});
    $('#one').click(function(){
        $("#text").removeClass('classTwo');
        $("#text").addClass('classOne');
    });
    $('#two').click(function(){
        $("#text").removeClass('classOne');
        $("#text").addClass('classTwo');
    });
});
