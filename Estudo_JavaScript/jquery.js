//antes de tudo isso baixar o jquery 
//https://code.jquery.com/jquery-3.4.1.min.js
//Abre este link e copia o que estiver nele
//crie um novo jquery.js e cole o codigo lá

/*
$(document).ready(function(){ //seletor ve se o documento ta pronto assim começo a função
    $('button').click(function(){ //verifica se este botão no momento do click faça 
        $('h1').hide(); //o hide esconde o quq estiver escrito no h1
    });
});
*/

//MODO SIMPLIFICADO
$(function(){ 
   // $('button').click(function(){  
        //$('h1').hide(); 
        //$('h1').css("color","Blue");//modifica todos os h1
        //$('#uni').css("color","red");//modifica o h1 com id mudando a cor para red      
   // });
   /* $('#ver').click(function(){  
        $('p')
            .css("color","red")
            .fadeOut(); //mesmo efeito do hide mas de maneira suave
        $('#msg1')
            .text("Cor do texto alterado com sucesso")
            .css({color: 'red',border: '1px solid red'}) //é possivel juntar os elementos css em uma linha
            .fadeOut(3000)
            .addClass('green');
            
        $('button').removeClass('red'); // remoção de classe
        // encadeamento em bloco deminui o codigo como mostra a cima
    });
    $('#az').click(function(){  
        $('p').css("color","blue");
        $('p').fadeIn(); //mostra o que estiver oculto 
        $('p').delay(3000); //pausa a execução por um tempo pre estabelecido

    });
    */
   $('#l2').click(function(){
        $('#i1').hide();
        $('#i3').hide();
        $('#i2').show();
   });
    $('#l3').click(function(){
        $('#i2').hide();
        $('#i1').hide();
        $('#i3').show();
    });
    $('#l1').click(function(){
        $('#i2').hide();
        $('#i3').hide();
        $('#i1').show();
    });
});

