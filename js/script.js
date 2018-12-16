$(document).ready(function() {

	var menuButton = $('#menuButton');
	menuButton.on('click', function(e) {
		menuButton.toggleClass('is-active');
		e.preventDefault();
	})

	var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + ' slide' + index + '"></span>';
        },
      },
    });
	if($(window).width()>960){
		(function() {
			var delay = false;

			  $(document).on('mousewheel DOMMouseScroll', function(event) {
			    //event.preventDefault();
			    var scrollTop     = $(window).scrollTop(),
				    elementOffset = $('header').offset().top,
				    elementOffset2 = $('.slider-new').offset().top
				    if(elementOffset < scrollTop && scrollTop <= elementOffset2){
					    if(delay) return;

					    delay = true;
					    setTimeout(function(){delay = false},200)

					    var wd = event.originalEvent.wheelDelta || -event.originalEvent.detail;

					    var a = document.querySelectorAll('.region-featured, .slider-new');
					    if(wd < 0) {
					      for(var i = 0 ; i < a.length ; i++) {
					        var t = a[i].getClientRects()[0].top;
					        if(t >= 40) break;
					      }
					    }
					    else {
					      for(var i = a.length-1 ; i >= 0 ; i--) {
					        var t = a[i].getClientRects()[0].top;
					        if(t < -20) break;
					      }
					    }
					    if(i >= 0 && i < a.length) {
					      $('html,body').animate({
					        scrollTop: a[i].offsetTop
					      });
					    }
				    }
			  });
			  })();
	}
	

	var swiperNew = new Swiper('.slider-new .swiper-container-new', {
      slidesPerView: 4,
      spaceBetween: 30,
      loop: true,
      
      breakpoints: {
        1024: {
          slidesPerView: 3,
          spaceBetween: 5,
        },
        640: {
	      slidesPerView: 2,
	      spaceBetween: 5
	    },
        480: {
	      slidesPerView: 1,
	      spaceBetween: 5
	    }
      }

    });

    var swiperStock = new Swiper('.slider-stock .swiper-container-stock', {
      slidesPerView: 4,
      spaceBetween: 30,
      loop: true,

      breakpoints: {
        1024: {
          slidesPerView: 3,
          spaceBetween: 5,
        },
        640: {
	      slidesPerView: 2,
	      spaceBetween: 5
	    },
        480: {
	      slidesPerView: 1,
	      spaceBetween: 5
	    }
      }

    });

    $('.lang-block span:first-child').addClass('activeLink');
    $('.lang-block span').on('click', function(e) {
    	$(this).addClass('activeLink');
    	$(this).siblings('span').removeClass('activeLink')
    })

    $('.login').on('click', function(e) {
    	$('.reg-form').toggleClass('visible');
    })
	$('.to_login').on('click', function(e) {
		$('.reg-form').removeClass('visible');
	   	$('.log-form').toggleClass('visible');
	})
	$('.to_register').on('click', function(e) {
    	$('.log-form').removeClass('visible');
    	$('.reg-form').toggleClass('visible');
    })

    $('.cart').on('click', function(e) {
    	$('.cart-form').toggleClass('visible');
    })

    if($(window).width()<480){
    	$('.tab-featured img').attr('src', '/images/mob-feat.jpg')
	}

	window.onresize = function(event) {
	    if($(window).width()<480){
	    	$('.tab-featured img').attr('src', '/images/mob-feat.jpg')
		}else{
			$('.tab-featured img').attr('src', '/images/tab-feat.jpg')
		}
	};
});

