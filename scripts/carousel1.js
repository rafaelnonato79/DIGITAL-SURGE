$(document).ready(function(){
    $('.carousel').slick({
        slidesToShow: 3, // Quantidade de slides visíveis ao mesmo tempo
        slidesToScroll: 1,
        infinite: true,
        autoplay: true, // Opção de autoplay (se desejar)
        autoplaySpeed: 5000, // Velocidade do autoplay (se desejar)
        variableWidth: true, 


        prevArrow: '<div class="botao-esquerdo"><img src="imgs/seta-esquerda.png" alt="seta-esquerda"></div>',
        nextArrow: '<div class="botao-direito"><img src="imgs/seta-direita.png" alt="seta-direita"></div>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});
