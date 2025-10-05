/*Escreva uma função que receba um array de números e retorne um novo array com todos 
os números ao quadrado.*/

function valoresAoQuadrado(numeros:number[]){
    let numerosAoQuadrado:number[] = numeros.map(valor=> valor**2);
    return numerosAoQuadrado;
}

valoresAoQuadrado([2,6,9,1,3,5])