#RandomAnim

This is part of a collection of JQuery plugins that animate text in various random ways.

See a demo and find out more information about this work-in-progress:

http://eldub10.github.io/randomanim

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
