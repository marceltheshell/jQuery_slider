$(document).ready(function() {
	var speed = 500;			// Fade speed
	var autoswitch = true;		// Autoslider options
	var autoswitch_speed = 4000; // Autoslider speed

	//Add initial active class
	$('.slide').first().addClass('active');

	//Hide all slides
	$('.slide').hide();

	//Show active slide
	$('.active').show();

	// Switch to next slide
	$('#next').on('click', nextSlide)

	// Switch to previous slide
	$('#prev').on('click', previousSlide)

	//Autoslider
	if (autoswitch === true) {
		setInterval(nextSlide, autoswitch_speed);
	}

	function nextSlide() {
		$('.active').removeClass('active').addClass('previousActive');
		if( $('.previousActive').is(':last-child') ) {
			$('.slide').first().addClass('active');
		}
		else {
			$('.previousActive').next().addClass('active');
		}
		$('.previousActive').removeClass('previousActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
	}

	function previousSlide() {
		$('.active').removeClass('active').addClass('previousActive');
		if( $('.previousActive').is(':first-child') ) {
			$('.slide').last().addClass('active');
		}
		else {
			$('.previousActive').prev().addClass('active');
		}
		$('.previousActive').removeClass('previousActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
	}

})