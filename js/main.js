(function ($) {
	"use strict";

	// meanmenu
	$('.main-nav').slicknav();
	// One Page Nav
	var top_offset = $('.header-area').height() - 10;
	$('.main-menu nav ul').onePageNav({
		currentClass: 'active',
		scrollOffset: top_offset,
	});


	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 245) {
			$(".header-sticky").removeClass("sticky");
		} else {
			$(".header-sticky").addClass("sticky");
		}
	});



	// mainSlider
	function mainSlider() {
		var BasicSlider = $('.slider-active');
		BasicSlider.on('init', function (e, slick) {
			var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
			doAnimations($firstAnimatingElements);
		});
		BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
			var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
			doAnimations($animatingElements);
		});
		BasicSlider.slick({
			infinite: true,
			autoplay: true,
			autoplaySpeed: 1000,
			dots: false,
			fade: true,
			arrows: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			responsive: [
				{ breakpoint: 767, settings: { dots: false, arrows: false } }
			]
		});

		function doAnimations(elements) {
			var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			elements.each(function () {
				var $this = $(this);
				var $animationDelay = $this.data('delay');
				var $animationType = 'animated ' + $this.data('animation');
				$this.css({
					'animation-delay': $animationDelay,
					'-webkit-animation-delay': $animationDelay
				});
				$this.addClass($animationType).one(animationEndEvents, function () {
					$this.removeClass($animationType);
				});
			});
		}
	}
	mainSlider();
	// counter 
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});
	// testimonial area slider 

	$(".testimonial-active").slick({

		infinite: true,
		autoplay: true,
		autoplaySpeed: 1000,
		dots: true,
		fade: false,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
			{ breakpoint: 767, settings: { dots: true, arrows: false } }
		]
	});
	// client logo slider 
	$(".client-active").slick({

		infinite: true,
		autoplay: true,
		autoplaySpeed: 1000,
		dots: false,
		fade: false,
		arrows: false,
		slidesToShow: 5,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 991, settings: {
					dots: false,
					arrows: false,
					slidesToShow: 4,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 767, settings: {
					dots: false,
					arrows: false,
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 575, settings: {
					dots: false,
					arrows: false,
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			// 	{ breakpoint: 767, settings: { dots: false, arrows: false } 
			// }
		]
	});


	// owlCarousel
	$('.owl-carousel').owlCarousel({
		loop: true,
		margin: 0,
		items: 1,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		nav: true,
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			767: {
				items: 3
			},
			992: {
				items: 5
			}
		}
	})


	/* magnificPopup img view */
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	/* magnificPopup video view */
	$('.popup-video').magnificPopup({
		type: 'iframe'
	});


	// isotop
	$('.grid').imagesLoaded(function () {
		// init Isotope
		var $grid = $('.grid').isotope({
			itemSelector: '.grid-item',
			percentPosition: true,
			masonry: {
				// use outer width of grid-sizer for columnWidth
				columnWidth: '.grid-item',
			}
		});
	});

	// filter items on button click
	$('.portfolio-menu').on('click', 'button', function () {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
	});

	//for menu active class
	$('.portfolio-menu button').on('click', function (event) {
		$(this).siblings('.active').removeClass('active');
		$(this).addClass('active');
		event.preventDefault();
	});

	// google map design 

	function basicmap() {
		// Basic options for a simple Google Map
		// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
		var mapOptions = {
			// How zoomed in you want the map to start at (always required)
			zoom: 11,
			scrollwheel: false,
			// The latitude and longitude to center the map (always required)
			center: new google.maps.LatLng(24.098379, 90.328712), // New York
			// This is where you would paste any style found on Snazzy Maps.
			styles:[
				{
					"featureType": "all",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#202c3e"
						}
					]
				},
				{
					"featureType": "all",
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"gamma": 0.01
						},
						{
							"lightness": 20
						},
						{
							"weight": "1.39"
						},
						{
							"color": "#ffffff"
						}
					]
				},
				{
					"featureType": "all",
					"elementType": "labels.text.stroke",
					"stylers": [
						{
							"weight": "0.96"
						},
						{
							"saturation": "9"
						},
						{
							"visibility": "on"
						},
						{
							"color": "#000000"
						}
					]
				},
				{
					"featureType": "all",
					"elementType": "labels.icon",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "landscape",
					"elementType": "geometry",
					"stylers": [
						{
							"lightness": 30
						},
						{
							"saturation": "9"
						},
						{
							"color": "#29446b"
						}
					]
				},
				{
					"featureType": "poi",
					"elementType": "geometry",
					"stylers": [
						{
							"saturation": 20
						}
					]
				},
				{
					"featureType": "poi.park",
					"elementType": "geometry",
					"stylers": [
						{
							"lightness": 20
						},
						{
							"saturation": -20
						}
					]
				},
				{
					"featureType": "road",
					"elementType": "geometry",
					"stylers": [
						{
							"lightness": 10
						},
						{
							"saturation": -30
						}
					]
				},
				{
					"featureType": "road",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"color": "#193a55"
						}
					]
				},
				{
					"featureType": "road",
					"elementType": "geometry.stroke",
					"stylers": [
						{
							"saturation": 25
						},
						{
							"lightness": 25
						},
						{
							"weight": "0.01"
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "all",
					"stylers": [
						{
							"lightness": -20
						}
					]
				}
			]

		};
		// Get the HTML DOM element that will contain your map 
		// We are using a div with id="map" seen below in the <body>
		var mapElement = document.getElementById('contact-map');

		// Create the Google Map using our element and options defined above
		var map = new google.maps.Map(mapElement, mapOptions);

		// Let's also add a marker while we're at it
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(24.098379, 90.328712),
			map: map,
			title: 'Cryptox'
		});
	}
	if ($('#contact-map').length != 0) {
		google.maps.event.addDomListener(window, 'load', basicmap);
	}



	// scrollToTop
	$.scrollUp({
		scrollName: 'scrollUp', // Element ID
		topDistance: '300', // Distance from top before showing element (px)
		topSpeed: 300, // Speed back to top (ms)
		animation: 'fade', // Fade, slide, none
		animationInSpeed: 200, // Animation in speed (ms)
		animationOutSpeed: 200, // Animation out speed (ms)
		scrollText: '<i class="fas fa-angle-up"></i>', // Text for element
		activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	});

	// WOW active
	new WOW().init();


})(jQuery);