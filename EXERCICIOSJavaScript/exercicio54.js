//Escreva uma função que ordene um array de números em ordem decrescente.

function decrescente(numeros){
    let numerosDecrescentes = numeros.sort((a, b) => b - a);
    return numerosDecrescentes;
}

decrescente([10,5,20,14,9,3,6,1])