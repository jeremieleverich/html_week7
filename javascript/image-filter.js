	$("document").ready( function(){
		console.log("ready");
		//assign event bindings to all images.
		$("img").on("click", flipImage);
		$("img").on("mouseover mouseleave", highlightImage);
		//setub buttons for click for Robots
		$("#robots").on("click", filterRobotsFn);
		$("#no-figures").on("click", filterfiguresFn);
		$("#plus-3").on("click", filterPlus3Fn);

		$("#clear").on("click", filterClearFn);

		var allImages = $("#drawing img, #water-color img, #oil img");//Grab the images in the #drawing, #watercolor, and #oil divs that are not "robots"
			
		function flipImage(evt){
			
			// console.log(evt); //Gather all data that comes when the image has been clicked.
			// console.log(evt.target); //Gather only the data that comes when a particular image has been clicked.
			// console.log(evt.target.getAttribute("src")); //Gather all source that comes from the image that has been clicked.


			var currentImage = evt.target;

			//flip the image when clicked.
			TweenMax.to(
				currentImage, 1, 
				{scaleY: -1, alpha: .2} 
			);
			


		};

		//assign TWO events types to the image in the same line.
		function highlightImage(evt){
			console.log(evt.target);
			var currentImage = evt.target;
			//$(currentImage).toggleClass("highlightImage");
		}

		//Filter the images that have a class of "robots".
		function filterRobotsFn(evt){
			var selection = $("#drawing img, #water-color img, #oil img").not(".robots");//Grab the images in the #drawing, #watercolor, and #oil divs that are not "robots"
			filterClearFn();
			TweenMax.staggerTo(selection, 1, {alpha: .25}, .1);
		}
		//Filter the images that have a class of "no-figures".
		function filterfiguresFn(evt){
			var selection = $("#drawing img, #water-color img, #oil img").not(".no-figure");//Grab the images in the #drawing, #watercolor, and #oil divs that are not "no-figures"
			filterClearFn();
			TweenMax.staggerTo(selection, 1, {alpha: .25}, .1);
		}
		//Filter the images that have a class of "plus-3".
		function filterPlus3Fn(evt){			
			var selection = $("#drawing img, #water-color img, #oil img").not(".plus-3");//Grab the images in the #drawing, #watercolor, and #oil divs that are not "plus-3"
			filterClearFn();
			TweenMax.staggerTo(selection, 1, {alpha: .25}, .1);
		}

		//Filter the images that have a class of "clear".
		function filterClearFn(evt){
			//Clear all filters
			TweenMax.staggerTo(allImages, 1, {alpha: 1, ease:Bounce.easeOut}, .01);

			//var selection = $("#drawing img, #water-color img, #oil img").not(".clear");//Grab the images in the #drawing, #watercolor, and #oil divs that are not "plus-3"
			
		}
		
	});//closing document.ready
	



