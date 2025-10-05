//Escreva uma função que retorne o menor número em um array de números.

function menorValor(numeros:number[]){
    let menorNumero:number = Math.min(...numeros);
    return menorNumero;
}

menorValor([30,20,55,60,12,9]);
