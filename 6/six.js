'use strict';

$(document).ready(function(){
   // jQuery methods go here...
	$("#get").click(function(){
        $.get("data.txt", function(data, status){
            $("#data").text(data);
        });
    });
});
