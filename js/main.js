

$(document).ready(function($) {

	console.log('hey');

    $(".navicon").click(function(event) {
    	event.stopPropagation();
    	event.preventDefault()

        $(".nav").slideToggle(200);
         return false;
    });

});