$(document).ready(function(){
  var scroll = $("#scroll");

  // initialize rangeinput
  $(":range").rangeinput({

  	// slide the DIV along with the range using jQuery's css() method
  	onSlide: function(ev, step)  {
  		scroll.css({left: -step});
  	},

  	// display progressbar
  	progress: true,

  	// initial value. also sets the DIV's initial scroll position
  	value: 0,

  	// this is called when the slider is clicked. we animate the DIV
  	change: function(e, i) {
  		scroll.animate({left: -i}, "fast");
  	},

  	// disable drag handle animation when when slider is clicked
  	speed: 0

  });
});
