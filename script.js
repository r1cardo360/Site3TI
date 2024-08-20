$(document).ready(function(){
    $('.slick-carousel').slick({
        dots: true, // Adiciona pontos de navegação
        infinite: false, // Permite loop infinito
        speed: 0, // Velocidade de transição
        slidesToShow: 3, // Quantos slides mostrar por vez
        slidesToScroll: 1 // Quantos slides rolar por vez
    });
});