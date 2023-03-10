jQuery(function() {

    var owl = jQuery('.slide-one-item');

    jQuery('.slide-one-item').owlCarousel({
        center: false,
        rtl:true,
        items: 1,
        loop: false,
        stagePadding: 0,
        margin: 0,
        smartSpeed: 1500,
        autoplay: false,
        dots: false,
        nav: true,
        navText: ["<img src='https://cdn.statically.io/gh/saeedane/sabaqpress/41fcaed7/img/icons/chevron-right.svg' width='24' height='24' >","<img src='https://cdn.statically.io/gh/saeedane/sabaqpress/41fcaed7/img/icons/chevron-left.svg' width='24' height='24' >"]
    });


    jQuery('.owl-carousel').owlCarousel({
        center: false,
        rtl:true,
        items: 3,
        loop: false,
        stagePadding: 0,
        margin: 50,
        smartSpeed: 1500,
        autoplay: false,
        dots: false,
        nav: true,
        navText: ["<img src='https://cdn.statically.io/gh/saeedane/sabaqpress/41fcaed7/img/icons/chevron-right.svg' width='24' height='24'>","<img src='https://cdn.statically.io/gh/saeedane/sabaqpress/41fcaed7/img/icons/chevron-left.svg' width='24' height='24'>"]
    });


	
})