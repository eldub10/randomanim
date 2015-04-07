
function playAnimation() {
	$(".animation").randomAnim({
		duration: 6000,
		interval: 200
	}, function() {
		$(".tagline").fadeIn("slow");
	});
}

$(".animation").load(playAnimation());
$("#replay").click(playAnimation);
