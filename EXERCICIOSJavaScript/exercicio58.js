//Escreva uma função que retorne a soma de todos os números pares em um array de números.

function somaPares(numeros){
    let pares = numeros.filter(num => num % 2 ===0);
    let somapares = pares.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
    return somapares;
}

somaPares([3,2,5,9,8,17,20,21,33]);