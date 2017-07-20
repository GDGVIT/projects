$(document).ready(function(){
	$("#myRange").change(function(){
		var x = document.getElementById("myRange").value;
		console.log(x);
	})
	$('.project-card').click(function(){
		$(this).addClass('card-animation');
		$('.content-holder').fadeOut(500);
		$('.info').delay(2000).fadeIn(200);
	})

})
