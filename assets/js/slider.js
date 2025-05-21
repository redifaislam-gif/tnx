  $(document).ready(function(){
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    

    autoplay: true,
    autoplayTimeout : 5000,
    autoplaySpeed:15000,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
       1500:{
            items:9
         
        }
    }
})


});


$('.redifa').owlCarousel({
    loop:true,
    margin:20,
     rtl:true,
    autoplay: true,
    autoplayTimeout : 5000,
    autoplaySpeed:15000,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
       1500:{
            items:9
         
        }
    }
})


$('.redifa2').owlCarousel({
    loop:true,
    margin:20,

    autoplay: true,
    autoplayTimeout : 5000,
    autoplaySpeed:15000,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
       1500:{
            items:9
         
        }
    }
})