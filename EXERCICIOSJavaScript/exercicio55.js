//Escreva uma função que retorne o menor número em um array de números.

function menorValor(numeros){
    let menorNumero = Math.min(...numeros);
    return menorNumero;
}

menorValor([30,20,55,60,12,9]);
