//Escreva uma função que retorne o maior número em um array de números.

function maiorValor(numeros:number[]){
    let maiorNumero:number = Math.max(...numeros);
    return maiorNumero;
}

maiorValor([30,20,55,60,12,9]);
