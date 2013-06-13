//imageSwitcher.js v0.1
// A simple jQuery image gallery that allows a user to easily create a gallery of photographs.
//
// @author: M. Caputo

$(document).ready(function(){
	var imagesArray = null;
	var index=0;
	var incrementSize = 1;
	
	$.initImageSwitcher = function(opts) {
		imagesArray = opts.images;
		changeImage(0);
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
		var imagePath = "images/" + imagesArray[index].path;
		$('#picDisplay').attr('src', imagePath);
		$('#picDisplay').attr('title', imagesArray[index].title);
		$('#imageCaption').text(imagesArray[index].caption);
	};
});