$(document).ready(function(){
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#button-cancel').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const enderecoDaNovaImagem = $('#new-image-id').val();
        const novoItem = $('<li style="display: none"></li>');
        $('<img src="' + enderecoDaNovaImagem + '" />').appendTo(novoItem);

        // Adiciona o link para visualizar a imagem em tamanho real
        $(
            '<div class="overlay-image-link">' +
            '<a href="' + enderecoDaNovaImagem + '" target="_blank" title="View image in full size">' +
            'View Image in full Size' +
            '</a>' +
            '</div>'
        ).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#new-image-id').val('')
    })
})