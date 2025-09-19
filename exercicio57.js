/*Escreva uma função que retorne a soma de todos os números ímpares em um array de 
números.*/

function somaImpares(numeros){
    let impares = numeros.filter(num => num % 2 !==0);
    let somaimpares = impares.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
    return somaimpares;
}

somaImpares([3,2,5,9,8,17,20,21,33]);