jQuery_Gallery 
==============
v0.1
Author: M. Caputo



jQuery_Gallery offers a simple solution to creating an image gallery on your website. With just a few lines,
jQuery_Gallery can be up and running, displaying any number of pictures in a simple ui.


How to use jQuery_Gallery
==============
jQuery_Gallery is very simple to use. Simply download the library and place it in the /scripts folder of your website.
Then, in the header of the page you would like to place the gallery in, make sure to include this code:

    jQuery(function($){
        $.initImageSwitcher(opts = {
            images : [  {path: "path/to/image.jpg", title: "Mouse hover title for image", caption: "A dexcription of the picture you want displayed"},
                {path: "path/to/second/image.jpg", title: "Picture 2 title", caption: "Picture 2 caption"}
            ]
        });
    });
  
  Any number of images can be included in the images array passed to the anonymous  function. jQuery_Gallery will automatically load the pictures, attaching
  the title and caption descriptions to them as well.
  
  The above jQuery simply lets jQuery_Gallery know where to find your pictures and a little detail about them to display. In order to actually display
  the images on you website, include the following div block:
  
    <div id="imageContainer">
			<img id ="picDisplay" width="300px" height="250px" style="display: inline-block;"/><br>
			<div id="goPrevious" style="display: inline-block"><img src="images/previous_button_green.png" width="50px" height="50px"/></div>
			<div id="imageCaption" style="display: inline-block"></div>
			<div id="goNext" style="display: inline-block"><img src="images/next_button_green.png" width="50px" height="50px"/></div>
		</div>
    
  jQuery_Gallery will update the imageContainer div by default with the various pictures supplied in the jQuery initialization you provided. Once these two
  blocks of code are in your html file, you are good to go! The next time you launch the site, you should be able to view your gallery!
