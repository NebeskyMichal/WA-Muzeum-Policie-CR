$(document).ready(function() {
	$('.popup-gallery').magnificPopup({
	  delegate: 'a',
	  type: 'image',
	  gallery: {
	    enabled: true,
	    navigateByImgClick: true,
	    preload: [0,1]
	  },
	  callbacks: {
	    elementParse: function(item) {
	      console.log(item.el[0].className);
	      if(item.el[0].className == 'video') {
	        item.type = 'iframe',
	        item.iframe = {
	           patterns: {
	             youtube: {
	               index: 'youtube.com/',
	               id: 'v=',
	               src: '//www.youtube.com/embed/%id%?autoplay=1'
	             },
	             vimeo: {
	               index: 'vimeo.com/',
	               id: '/',
	               src: '//player.vimeo.com/video/%id%?autoplay=1'
	             },
	             gmaps: {
	               index: '//maps.google.',
	               src: '%id%&output=embed'
	             }
	           }
	        }
	      } else {
	         item.type = 'image',
	         item.tLoading = 'Loading image #%curr%...',
	         item.mainClass = 'mfp-img-mobile',
	         item.image = {
	           tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
	         }
	      }
	    }
	  }
	});
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
      items: 1,
      loop: true,
      dots:false,
      autoplay:true,
      autoPlayTimeout: 5000,
    });
  });
  function rollOut() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
