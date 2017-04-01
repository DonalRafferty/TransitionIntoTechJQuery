$(document).ready(function(){

   // jQuery methods go here...
  	$('#pug-img').click(function(){
  		$('#pug-img').hide(1000, function(){
  			$('#pug-img').show();
  		});
	});

  	var date = new Date().getFullYear();

	$('footer').append(' ' + date);

});
