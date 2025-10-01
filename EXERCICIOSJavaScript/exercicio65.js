/*Escreva uma função que aceite um array de números e uma função de callback e retorne 
a soma de todos os números do array após a aplicação da função de callback.*/

function soma(numeros){
    let soma = numeros.reduce((acumulador,valorAtual) => acumulador + valorAtual,0);
    return soma;
}

function somaArray(numeros,callback){
    return callback(numeros);
}

somaArray([2,5,10,14,3,1],soma);