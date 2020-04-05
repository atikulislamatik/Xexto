(function($) {
	// preloader
	$(window).load(function() {
		$("#loading").fadeOut(1200);
	}
	) // 
	$(document).on("scroll", function() {
		if ($(document).scrollTop() > 100) {
			$("header").addClass("black");
		}
		else {
			$("header").removeClass("black");
		}
	}
	);
	// wow js
	new WOW( {
		offset: 100, mobile: true
	}
	).init();
	// video popup
	$('.video-pop').magnificPopup( {
		type: 'iframe'
	}
	);
	// scroll top
	$(window).scroll(function() {
		if ($(this).scrollTop() > 300) {
			$('.scroll-top').fadeIn();
		}
		else {
			$('.scroll-top').fadeOut();
		}
	}
	);
	$('.scroll-top').click(function() {
		$('html, body').animate( {
			scrollTop: 0
		}
		, 800);
		return false;
	}
	);
	// //slicknav js
	$(document).ready(function() {
		$('#slick_nav_menu').slicknav( {
			'label': '', brand: ' <a href="#"><img src="assets/images/footer-logo.png" alt=""></a>'
		}
		);
	}
	);
	$('.work-slider').owlCarousel( {
		loop:true, margin:30, nav:false, dots: false, autoplay: true, autoplayHoverPause: true, responsive: {
			0: {
				items: 2,
			}
			, 576: {
				items: 3,
			}
			, 768: {
				items: 3,
			}
			, 1200: {
				items: 5,
			}
		}
	}
	) // Odometer JS    
	setTimeout(function() {
		odometer.innerHTML=5890;
		odometer1.innerHTML=10;
		odometer2.innerHTML=40;
		odometer3.innerHTML=30;
	}
	);
	// sidenav
}

(jQuery));