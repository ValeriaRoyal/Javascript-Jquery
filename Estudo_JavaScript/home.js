//alert("Olá mundo"); // mostra uma janela de olá mundo

//comentário de 1 linha

/* Na verificação do codigo (inspecionar) na aba Console 
podemos verificar se há algum erro no JavaScript */

//var msg = "Olá mundo" //Armazenando o texto na variavel msg.
//alert(msg); //Mostra a mensagem usando variavel. 

//var a = 2;
//var b = 3;

//var adi = a + b;
//var sub = a - b;
//var div = a / b;
//var mul = a * b;
//var mod = a % b;

// \n pula linha 

/*alert("Soma: "+ adi + "\nSubtração: "+ sub + "\nDivisão: "+ 
div + "\nMultiplicação: "+ mul + "\nResto: "+ mod)*/

// javaScript pode fechar com ; ou QUEBRA DE LINHA mas a boa pratica é usar o ;

//atalho para criar a estrutura if else é ifelse(ctrl + space) no VSCODE
/* curisidade: === é igual e do mesmo tipo 
este link pode informar mais sobre 
https://www.devmedia.com.br/javascript-como-e-quando-utilizar-os-operadores-e/37782 */

// NUMEROS PARES E IMPARES
/*if (msg%2 == 1) {
    alert("Número Impar: " + a);
} else if(msg%2 == 0) {
    alert("Número Par: " + a);
}else{
    alert("Valor invalido");
}*/

//WHILE
//var i = 0
/*while ( i < 3) {
    alert(i)
    i += 1; // mesma coisa de i = i + 1;
    // Operadores https://www.w3schools.com/js/js_operators.asp
}*/

//FOR
/*for(var j = 0; j < 3; j++){
    alert(j);
}*/

//var inteiro = 6;
//var decimal = 4.5;
//var texto = "Olá Mundo"; // No exemplo que mostra do curso ficaria var "olá mundo";
//var lista = ["azul" ,"violeta","laranja","bege"];

//alert(lista);
//alert(lista [2]);

/*for(i in lista){
    alert(i); //quantos valores tem no array 
}

for(i in lista){
    alert(lista[i]); // mostra cada valor dentro do array
}*/

/*console.log("Olá Mundo"); // Botão direito na pagina, vá até a opção 'inspecionar'... na guia Console pode ver o texto.

function soma(a,b){
    console.log(a+b);
}

soma(2,2);

function sub(a,b){
    return a - b; //retorna o valor da subtracao
};

sub(5,3); // não funciona

var s = sub(5,3); //bloco que será chamado quando executado
console.log(s);

function mul(a,b){
    return a * b;
}

console.log(mul(2,3)); //chamando a função como parametro dentro do console.log

function mens(nome){ // chama esta função lá no botão criado
    alert("Ei "+ nome);
}
*/

/*
//DOM

//https://www.devmedia.com.br/trabalhando-com-dom-em-javascript/29039

// interface que representa obj/pag -- Navegação como arvore

function mudar(cor){
    var elemento = document.getElementById("msgid"); // navegando pelo DOM e pegando o ele mento pelo id
    elemento.style.color = cor; //style muda o estilo e dentro dele o color muda a cor
}

*/
/*
function valida(){
    var nome = document.getElementById('nome');
    if (nome.value == "") {
        alert("insira o nome.");
    } else {
        alert("Formulario foi enviado com sucesso");
    }
    alert(nome.value); //imprime o atributo valor
}
*/