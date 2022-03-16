$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
    items: 1
})


$(document).ready(function() {
    $('.chill1').click(function() {
        $('.chill1').addClass('active');
        $('.chill2').removeClass('active');
        $('.chill3').removeClass('active');
        $('.chill4').removeClass('active');
        $('.about__landscape_middle-title').text("Chill Adventure");
        $('.about__landscape_left-numberPage').text("01");
        $('.about__landscape_left-pageInfo').html("WONDERFUL <br> ADVENTURES");
    });
});

// $(document).ready(function() {
//     $('.chill2').click(function() {
//         $('.chill1').removeClass('active');
//         $('.chill2').addClass('active');
//         $('.chill3').removeClass('active');
//         $('.chill4').removeClass('active');
//         $('.about__landscape_middle-title').text("Spooky Times");
//         $('.about__landscape_left-numberPage').text("02");
//         //Поменяй здесь в конце текст
//         $('.about__landscape_left-pageInfo').html("SCARY AS HELL");

//     });
// });

// $(document).ready(function() {
//     $('.chill3').click(function() {
//         $('.chill1').removeClass('active');
//         $('.chill2').removeClass('active');
//         $('.chill3').addClass('active');
//         $('.chill4').removeClass('active');
//         $('.about__landscape_middle-title').text("Desert Madness");
//         $('.about__landscape_left-numberPage').text("03");
//         //Поменяй здесь в конце текст
//         $('.about__landscape_left-pageInfo').html("GRAND DUNES <br> LANDSCAPE");


//     });
// });

// $(document).ready(function() {
//     $('.chill4').click(function() {
//         $('.chill1').removeClass('active');
//         $('.chill2').removeClass('active');
//         $('.chill3').removeClass('active');
//         $('.chill4').addClass('active');
//         $('.about__landscape_middle-title').text("Out in the wild");
//         $('.about__landscape_left-numberPage').text("04");
//         //Поменяй здесь в конце текст
//         $('.about__landscape_left-pageInfo').html("BEAUTY OF <br> WILD NATURE");
//     });
// });