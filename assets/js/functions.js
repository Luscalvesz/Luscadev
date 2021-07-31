// function scrollToElement(){
//     var scrlMain = document.getElementById('main-scroll')
//     var scrlSobre = document.getElementById('sobre-scroll')
//     var scrlExp = document.getElementById('exp-scroll')
//     var scrlProj = document.getElementById('proj-scroll')
//     var scrlCtto = document.getElementById('ctto-scroll')

// };

function carousel(){
    $('.proj ul').slick({
        dots: false,
        infinite: true,
        arrows: true,
        // autoplay: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    })

    $('.drawingsBox-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.drawings-carousel'
    });
    $('.drawings-carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.drawingsBox-carousel',
        dots: false,
        centerMode: true,
        focusOnSelect: true
    });
};



$(document).ready( function(){

    carousel();

});