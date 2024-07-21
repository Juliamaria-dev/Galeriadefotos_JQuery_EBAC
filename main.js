$(document).ready(function() {
    console.log($('header button'));
    console.log($('#botao-cancelar'));

    $('header button').on('click', function(e) {
        alert("Expandir formulário");
    });

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    });

    $('form').on('submit', function(e) {
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li></li>');
        
        $('<img>').attr('src', enderecoDaNovaImagem).appendTo(novoItem);
        
        $('<div class="overlay-imagem-link"></div>')
            .html('<a href="' + enderecoDaNovaImagem + '" target="_blank" title="Ver imagem em tamanho real">Ver imagem em tamanho real</a>')
            .appendTo(novoItem);
        
        $('ul').append(novoItem);
        $(novoItem).fadeIn(1000);
        $('endereco-imagem-nova').val('');
    });
});

