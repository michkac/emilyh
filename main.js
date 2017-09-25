$(function() {
	$('.hamburger').on('click', function(){
		$('ul.mainNav').slideToggle();
		// If hamburger (this means the thing we clicked on) has the class of fa-bars then remove the class of bars and add the class of times (to get the x)
		if ($(this).hasClass('fa-bars')) {
			$(this).removeClass('fa-bars').addClass('fa-times');
		} else {
			// else means the if above was not true. We know if hamburger does not have class of bars then it must have the class of times. So remove times and add bars!
			$(this).removeClass('fa-times').addClass('fa-bars');
		}
	});

	$('.nav__link').on('click', function() {
		var $hamburger = $('.hamburger');
		if ($('.hamburger').hasClass('fa-bars')) {
			$($hamburger).removeClass('fa-bars').addClass('fa-times');
		} else {
			$($hamburger).removeClass('fa-times').addClass('fa-bars')
		}
	});

	$('.close').on('click', function () {
			$('ul.mainNav').hide()
			$('ul.mainNav').removeClass('show')
		})
});