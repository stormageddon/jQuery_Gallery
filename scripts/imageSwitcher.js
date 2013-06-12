//imageSwitcher.js

$(document).ready(function(){
	var index=1;
	$('#goNext').on('click', function() {
		//index += 1;
		//if (index > 4)
		//{
		//	index=1;
		//}
		//var imagePath = "images/puppy"+index+".jpg";
		//$('#imageContainer img').attr('src', imagePath);
		changeImage(1);
	});
	
	$('#goPrevious').on('click', function() {
		changeImage(-1);
	});
	
	function changeImage(increment) {
		index += increment;
		if (index > 4)
		{
			index=1;
		}
		else if (index < 1)
		{
			index=4;
		}
		var imagePath = "images/puppy" + index + ".jpg";
		$('#picDisplay').attr('src', imagePath);
	};
});