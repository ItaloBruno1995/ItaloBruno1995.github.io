// Adicione interações aqui usando jQuery, se necessário

// Exemplo de interação simples: esconder e mostrar um elemento ao clicar em um botão
$(document).ready(function(){
    $('.show-form').click(function(){
        $('iframe').toggleClass('show'); // Adiciona ou remove a classe 'show' no iframe
    });
});

// Mostrar a imagem de fundo da cerimônia quando o usuário rolar para baixo
$(document).ready(function() {
    $(window).scroll(function() {
        var ceremonySection = $('#ceremony').offset().top;
        var windowHeight = $(window).height();
        var scrollTop = $(this).scrollTop();
        
        if (scrollTop >= ceremonySection - windowHeight / 2) {
            $('.ceremony-background').fadeIn(); // Mostra a nova div com a imagem de fundo
        } else {
            $('.ceremony-background').fadeOut(); // Oculta a nova div quando o usuário rolar para cima
        }
    });
});

$(document).ready(function() {
    $(window).scroll(function() {
        var videoSection = $('#video').offset().top;
        var fotosSection = $('#fotos').offset().top;
        var windowHeight = $(window).height();
        var scrollTop = $(this).scrollTop();
        
        // Verifica se a seção de vídeo está visível na tela
        if (scrollTop >= videoSection - windowHeight / 2) {
            $('#video').css('opacity', '1'); // Mostra a seção de vídeo
        } else {
            $('#video').css('opacity', '0'); // Oculta a seção de vídeo
        }

        // Verifica se a seção de fotos dos pais está visível na tela
        if (scrollTop >= fotosSection - windowHeight / 2) {
            $('#fotos').css('opacity', '1'); // Mostra a seção de fotos dos pais
        } else {
            $('#fotos').css('opacity', '0'); // Oculta a seção de fotos dos pais
        }
    });
});




$(document).ready(function() {
    $(window).scroll(function() {
        var gallerySection = $('#gallery').offset().top;
        var windowHeight = $(window).height();
        var scrollTop = $(this).scrollTop();
        
        // Verifica se a seção de Padrinhos e Madrinhas está visível na tela
        if (scrollTop >= gallerySection - windowHeight / 2) {
            $('#gallery').css('opacity', '1'); // Mostra a seção de Padrinhos e Madrinhas
        } else {
            $('#gallery').css('opacity', '0'); // Oculta a seção de Padrinhos e Madrinhas
        }
    });
});



