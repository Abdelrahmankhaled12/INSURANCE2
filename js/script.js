
//  Owl Carousel
$('.owl-carousel').owlCarousel({
    autoplay: true,
    center: true,
    items:2,
    loop:true,
    margin:10,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        }
    }
});


// WOW JS 
new WOW().init();