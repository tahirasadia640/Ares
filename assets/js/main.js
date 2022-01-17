	// Header & ToTop Btn Handler
	jQuery(document).scroll(function() {
		var y = jQuery(this).scrollTop();
		if (y > 300) {
		  jQuery('#toTop').css('opacity', '1');	
		  jQuery('.main-header').addClass('inverted');
		} else {
		  jQuery('#toTop').css('opacity', '0');
		  jQuery('.main-header').removeClass('inverted');
		}
	});


// Hero Carousel Animations
	jQuery('#carouselExampleIndicators').on('slide.bs.carousel', function (event) {
		jQuery('#carouselExampleIndicators .carousel-inner .carousel-item').removeClass('current-showing');
		jQuery('#carouselExampleIndicators .carousel-inner .carousel-item:nth-child('+ (++event.to) +')').addClass('current-showing');
	})



// Owl Carousel
$(document).ready(function() {
  // Unsere Zimmer Slider
    $('.owl-carousel-custom').owlCarousel({
      loop: true,
      margin: 20,
      width: 100,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: true
        },
        600: {
          items: 2,
          nav: true
        },
        1000: {
          items: 3,
          nav: true,
          loop: false,
          margin: 30,
          dots: true,
        }
      }
    });
  // Neuigkeiten Slider
  $('.owl-carousel-custom-2').owlCarousel({
    loop: true,
    margin: 20,
    width: 100,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2,
        nav: true
      },
      600: {
        items: 3,
        nav: true
      },
      1000: {
        items: 4,
        nav: true,
        loop: false,
        margin: 30
      }
    }
  });
// Testimonial Slider
  $("#testimonial-slider").owlCarousel({
    items:1,
    pagination:true,
    navigation:false,
    autoPlay:true
});

});



// Tabs Plus Minus
$(".tabs-ilzes").find(".tab").click(function(){
  $(this).find(".description").toggle();
  $(this).find(".title-icon-plus").toggle();
  $(this).find(".title-icon-minus").toggle();
});

// Data Aos Script
AOS.init({
  duration: 3000,
})

// Celender Script
$(function() {
  $('input[name="daterange"]').daterangepicker({
    opens: 'left'
  }, function(start, end, label) {
    console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
  });
  //create a new date range picker
$('#daterange').daterangepicker({ startDate: '01/05/2005', endDate: '02/06/2005' });

//change the selected date range of that picker
// $('#daterange').data('daterangepicker').setStartDate('01/01/2014');
// $('#daterange').data('daterangepicker').setEndDate('02/31/2014');
});


