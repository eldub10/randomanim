
/****************************************************
* RandomAnim
* http://eldub10.github.io/randomanim
* Copyright (c) 2015 Larry Wright
*
****************************************************/

(function($) {

    $.fn.randomAnim = function(options, complete) {

    	var settings = $.extend({
    		duration: 10000,
    		interval: 250,
    		complete: complete
    	}, options);

    	return this.each( function() {
    		var duration = settings.duration;
    		var interval = settings.interval;
    		fnComplete = settings.complete;
			var maxX = $(this).height();
			var maxY = $(this).width();
			var maxH = $(this).height();

			// get the text from the element being animated
			var letters = $(this).text().split("");
			if(letters.length == 0) {
				return;
			}

			// split each letter into a span
			var str = "";
			$.each(letters, function(index, letter) {
				str += "<span>" + letter + "</span>";
			});

			// empty the parent element before creating the spans
			$(this).empty();

			// append the spans to the parent and set them invisible
			var children = $(this).append(str).children();
			$(children).css({
				visibility: 'hidden',
				position: 'absolute'
			});
			var parent = $(this);
			var next = 0;
			var countdown = 0;

			// set a timer for the animation
			var timer = setInterval( function() {
				// randomize the display while the duration is greater than the time needed to display the the non-random text string
				if(duration > interval * letters.length) {
					var h = getRandomInt(16, maxH);
					var x = getRandomInt(0, maxX - h);
					var y = getRandomInt(0, maxY - h);
					var z = Math.ceil(h/20);
					var c = getRandomInt(0, 0xffffff).toString(16);

					// set properties and display the span
					$(children.get(next)).css({
						color: "#" + c,
						fontSize: h,
						top: x,
						left: y,
						textShadow: z + 'px ' + z + 'px 8px rgba(0,0,0,0.5)',
						visibility: 'visible'
					});
					// console.log(letters[next] + " = top: "+x+", left: "+y+", size: "+h+", color: "+c);

					// loop through each span in the text sequentially
					if(++next == letters.length) {
						next = 0;
					}
				} else {
					// display each letter in final text sequentially
					$(children.get(countdown++)).css({
						top: 0,
						left: 0,
						visibility: 'visible',
						font: $(parent).css("font"),
						textShadow: '8px 8px 8px rgba(0,0,0,0.5)',
						position: 'relative'
					});
				}

				duration -= interval;

				if(duration < 0) {
					clearInterval(timer);
					fnComplete(this);
				}
			}, interval);
		});
    }

    // pseudo random number generator
    // for a better (and more interesting) implementation, see:
    // http://davidbau.com/archives/2010/01/30/random_seeds_coded_hints_and_quintillions.html
	function getRandomInt(min, max) {
	  return Math.floor(Math.random() * (max - min)) + min;
	}

}(jQuery));
