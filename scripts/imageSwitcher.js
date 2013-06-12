//imageSwitcher.js

//window.onload{function(){
$(document).ready(function(){
	var index=0;
	var imagesArray = {};
	var incrementSize = 1;
	
	window.setImageArray = function(images) {
		imagesArray = images;
	};
	
	$('#goNext').on('click', function() {
		changeImage(incrementSize);
	});
	
	$('#goPrevious').on('click', function() {
		changeImage(incrementSize * (-1));
	});
	
	function changeImage(increment) {
		index += increment;
		if (index >= imagesArray.length)
		{
			index=0;
		}
		else if (index < 0)
		{
			index=imagesArray.length - 1;
		}
		var imagePath = "images/" + imagesArray[index];
		$('#picDisplay').attr('src', imagePath);
	};
});