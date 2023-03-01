$(document).ready(function(){

    $('#btn').click(function(){

        $('form').slideDown();
    })

    $('#cancelar').click(function(){

        $('form').slideUp();
    })
    $('form').on('submit',function(e){

      
        e.preventDefault();
        const enderecoimagen=$('#endereco-imagen-nova').val();
        console.log(enderecoimagen);




    })






})


