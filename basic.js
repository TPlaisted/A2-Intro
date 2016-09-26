$(document).ready(function() {

	$("p").hide();
	$("#topPicture").hide();

	$("h1").click(function() {

		$(this).next().fadeToggle(1000);

	});

	$("#testbutton").click(function() {
		/* $("#jq02").css("background-color", "red"); */
		$("strong, #testbutton").css("background-color", "red");
	});

	$("h3").mousedown(function() {
		$(this).css("background-color", "blue");
	});

	$("h3").mouseup(function() {
		$(this).css("background-color", "green");
	});

	$("h3").mouseenter(function() {
		$(this).css("font-size", "3em");
	});

	$("h3").mouseleave(function() {
		$(this).css("font-size", "2em");
		/*
		 * $(this).unbind(); makes it happen one time only
		 */
	});

});
