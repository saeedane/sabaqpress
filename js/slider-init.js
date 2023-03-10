$(function() {

    var owl = $('.slide-one-item');

    $('.slide-one-item').owlCarousel({
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
        navText: ["<img src='assets/img/icons/chevron-right.svg' width='24' height='24' >","<img src='assets/img/icons/chevron-left.svg' width='24' height='24' >"]
    });

   


    $('.owl-carousel').owlCarousel({
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
        navText: ["<img src='assets/img/icons/chevron-left.svg' width='24' height='24'>","<img src='assets/img/icons/chevron-right.svg' width='24' height='24'>"]
    });



	
})