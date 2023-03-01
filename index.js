$(document).ready(function () {

    $('#btn').click(function () {

        $('form').slideDown();
    })

    $('#cancelar').click(function () {

        $('form').slideUp();
    })
    $('form').on('submit', function (e) {

        e.preventDefault();
        const enderecoimagen = $('#endereco-imagen-nova').val();
        const novoiten = $('<li style="display: none"></li>');
        $(`<img src="${enderecoimagen}"/>`).appendTo(novoiten);

        $(`<div class="over">
       
       <a href="${enderecoimagen}" target="_blank" title="ver iamgen tamanho real">ver imagen tamanho real</a>
       
       
       </div>`).appendTo(novoiten)
        $(novoiten).appendTo('ul');
        $(novoiten).fadeIn(5000);
        $('#endereco-imagen-nova').val('');

    })






})


































































































































