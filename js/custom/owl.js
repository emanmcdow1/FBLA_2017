$(document).ready(function() {

    $("#calendar").owlCarousel({

        navigation: false, // Show next and prev buttons
        slideSpeed: 50,
        paginationSpeed: 400,
        singleItem: true,
        autoPlay: false,
        stopOnHover: true,
        pagination: false,

        // "singleItem:true" is a shortcut for:
        // items : 1,
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false

    });
    $(document).ready(function() {
        $('.scrollspy').scrollSpy();
    });
});
