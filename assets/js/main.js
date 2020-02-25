
  (function($){
    var $testimonials = $('.hero_items');
  if ($testimonials.length && $.fn.owlCarousel) {
      $testimonials.owlCarousel({
        nav: false,
        center: true,
        loop: true,
        margin:10,
        autoplay: true,
        dots: true,
          responsive: {
            0: {
                items: 1
            },
            600 :{
                items: 1
            },
            768: {
                items: 1
            }
        }
         
      });
  }
    
  })(jQuery);