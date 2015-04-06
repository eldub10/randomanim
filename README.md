#RandomAnim

This is part of a collection of JQuery plugins that will animate text in various random ways.

I created these plugins to:
* brush up on my JavaScript and CSS skills
* improve my JQuery
* learn new HTML5 and CSS3 technologies
* learn more about the Google Font API
* learn more about GitHub

There are 4 different plugins:
* [Random letter styles](http://github.com/eldub10/randomanim/)
* [Random font families](http://github.com/eldub10/fontanim/)
* Word zoom (TBA)
* Kaleidoscope letters (TBA)

These plugins are based on Director animations I made more than 20 years ago. You can see [animated gifs](http://github.com/eldub10/randomanim/img/aov.gif) of the original projects. I used these animations to get my first job as a multimedia developer in 1994 :)

See a demo and find out more information about this work-in-progress:

http://github.com/eldub10/randomanim

##Usage

Include `jquery.randomanim.js` after JQuery:
```html
<script src='jquery.min.js'></script>
<script src='jquery.randomanim.js'></script>
```

Create an HTML element that contains text. A div element works best:
```html
<div class="animation">Animated Text!</div>
````

Call `randomAnim` on the element:
```js
$(function () {
	$(".animation").randomAnim();
})
```

##Options
```js
$(".animation").randomAnim({

	// duration the animation will last
	duration: 10000,

	// update interval for each 'frame' of animation
	interval: 250,

	// function that will be called when animation is complete
	complete: function() { }
});
```
