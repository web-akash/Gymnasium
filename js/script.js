$('.banner-slider').slick({
	arrows:false,
	dots:true,
	autoplay:true,
	// responsive: [
	// 	{
	// 	  breakpoint: 992,
	// 	  settings: {
	// 		slidesToShow: 1,
	// 		slidesToScroll: 3,
	// 		infinite: true,
	// 		dots: true
	// 	  }
	// 	},
	// 	{
	// 	  breakpoint: 768,
	// 	  settings: {
	// 		slidesToShow: 1,
	// 		slidesToScroll: 2
	// 	  }
	// 	},
	// 	{
	// 	  breakpoint: 576,
	// 	  settings: {
	// 		slidesToShow: 1,
	// 		slidesToScroll: 1
	// 	  }
	// 	}
	//   ]
	 
})
$('.venobox').venobox()

$('.testi_slider').slick({
	slidesToShow: 2,
	arrows:false,
	dots:true,
	slidesToScroll: 1,
	autoplay:true,
	responsive: [
		{
		  breakpoint: 992,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 3,
			infinite: true,
			dots: true
		  }
		},
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 3
		  }
		},
		{
		  breakpoint: 576,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 3
		  }
		}
	  ]
})
 jQuery(document).ready(function($) {
            $('.counter').counterUp({
                delay: 10,
                time: 1000
            });
        });

$(".company_slider").slick({
	slidesToShow:5,
	slidesToScroll: 2,
	prevArrow:'<i class="fas fa-chevron-left prev"></i>',
	nextArrow:'<i class="fas fa-chevron-right next"></i>',
	autoplay:true,
	responsive: [
		{
			breakpoint: 1193,
			settings: {
			  slidesToShow: 4,
			  slidesToScroll: 1,
			  prevArrow: false,
			  nextArrow: false,
			}
		},
		{
		  breakpoint: 992,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 1,
			prevArrow: false,
			nextArrow: false,
		  }
		},
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
			prevArrow: false,
			nextArrow: false,
		  }
		},
		{
		  breakpoint: 578,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
	  ]
})
$('#colorful').colorfulTab();



window.addEventListener('scroll',function() {
	var nav = document.querySelector('nav')
	nav.classList.toggle('sticky' , window.scrollY > 0)
})

  