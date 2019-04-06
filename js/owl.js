
  $(document).ready(function() {

      $("#owl-demo").owlCarousel({
          navigation: false, // Show next and prev buttons
          slideSpeed: 250,
          paginationSpeed: 400,
          singleItem: true,
          autoPlay: true,
          stopOnHover: true,
          pagination: false,

          // "singleItem:true" is a shortcut for:
          // items : 1,
          // itemsDesktop : false,
          // itemsDesktopSmall : false,
          // itemsTablet: false,
          // itemsMobile : false

      });
  });
