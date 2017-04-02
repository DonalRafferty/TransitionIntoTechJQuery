
var bounceBall = function(){
	var time = 500;
	for (i = 0; i < 5; i++) { 
    	$(".ball").animate({
        	marginTop: '+=140px'
    	}, time);
    	$(".ball").animate({
        	marginTop: '-=140px'
    	}, time);
	}
};

var animatePug = function(){
	var time = 500;
	for (i = 0; i < 6; i++) { 
		$('#pug-img').animate({
		    width: '-=50px',
		    height: '-=50px'
		}, time);
		 $('#pug-img').animate({
		    width: '+=50px',
		    height: '+=50px'
		}, time);
	}
}

$(document).ready(function(){

   	// jQuery methods go here...
  	$('#pug-img').fadeIn(3000);
  	$('#pug-list').slideDown(3000);

  	$("#more").click(function(){
        $.get("./data/list.txt", function(data, status){
        	$('#more').hide();
            $("#food-list").html(data);
            $("#food-list").show();
            $(".ball").hide();
        });
    });

    $("#bounce").click(function(){
    	$(".ball").show();
    	$('#more').show();
    	$("#food-list").hide();
    	bounceBall();
    });

    $('#pug-img').click(function(){
    	animatePug();
    });

  	var date = new Date().getFullYear();
	$('footer').append(date);

});
