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
		infinite:true,
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

	infinite:true,
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

	infinite:true,
	autoplay: true,
	autoplaySpeed: 1000,
	dots: false,
	fade: false,
	arrows: false,
	slidesToShow: 5,
	slidesToScroll: 1,
	responsive: [
		{ breakpoint: 991, settings: {
			 dots: false,
			  arrows: false,
			  slidesToShow:4,
			  slidesToScroll:1
			 } 
	},
		{ breakpoint: 767, settings: {
			 dots: false,
			  arrows: false,
			  slidesToShow:2,
			  slidesToScroll:1
			 } 
	},
		{ breakpoint: 575, settings: {
			 dots: false,
			  arrows: false,
			  slidesToShow:1,
			  slidesToScroll:1
			 } 
	}
	// 	{ breakpoint: 767, settings: { dots: false, arrows: false } 
	// }
	]
});


// owlCarousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
	items:1,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    nav:true,
	dots:false,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:3
        },
        992:{
            items:5
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
$('.grid').imagesLoaded( function() {
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
$('.portfolio-menu').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

//for menu active class
$('.portfolio-menu button').on('click', function(event) {
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
				"elementType": "labels",
				"stylers": [
					{
						"visibility": "off"
					},
					{
						"color": "#f49f53"
					}
				]
			},
			{
				"featureType": "landscape",
				"stylers": [
					{
						"color": "#f9ddc5"
					},
					{
						"lightness": -7
					}
				]
			},
			{
				"featureType": "road",
				"stylers": [
					{
						"color": "#813033"
					},
					{
						"lightness": 43
					}
				]
			},
			{
				"featureType": "poi.business",
				"stylers": [
					{
						"color": "#645c20"
					},
					{
						"lightness": 38
					}
				]
			},
			{
				"featureType": "water",
				"stylers": [
					{
						"color": "#1994bf"
					},
					{
						"saturation": -69
					},
					{
						"gamma": 0.99
					},
					{
						"lightness": 43
					}
				]
			},
			{
				"featureType": "road.local",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#f19f53"
					},
					{
						"weight": 1.3
					},
					{
						"visibility": "on"
					},
					{
						"lightness": 16
					}
				]
			},
			{
				"featureType": "poi.business"
			},
			{
				"featureType": "poi.park",
				"stylers": [
					{
						"color": "#645c20"
					},
					{
						"lightness": 39
					}
				]
			},
			{
				"featureType": "poi.school",
				"stylers": [
					{
						"color": "#a95521"
					},
					{
						"lightness": 35
					}
				]
			},
			{},
			{
				"featureType": "poi.medical",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#813033"
					},
					{
						"lightness": 38
					},
					{
						"visibility": "off"
					}
				]
			},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{
				"elementType": "labels"
			},
			{
				"featureType": "poi.sports_complex",
				"stylers": [
					{
						"color": "#9e5916"
					},
					{
						"lightness": 32
					}
				]
			},
			{},
			{
				"featureType": "poi.government",
				"stylers": [
					{
						"color": "#9e5916"
					},
					{
						"lightness": 46
					}
				]
			},
			{
				"featureType": "transit.station",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "transit.line",
				"stylers": [
					{
						"color": "#813033"
					},
					{
						"lightness": 22
					}
				]
			},
			{
				"featureType": "transit",
				"stylers": [
					{
						"lightness": 38
					}
				]
			},
			{
				"featureType": "road.local",
				"elementType": "geometry.stroke",
				"stylers": [
					{
						"color": "#f19f53"
					},
					{
						"lightness": -10
					}
				]
			},
			{},
			{},
			{}
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
	scrollText: '<i class="icofont icofont-long-arrow-up"></i>', // Text for element
	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});

// WOW active
new WOW().init();


})(jQuery);