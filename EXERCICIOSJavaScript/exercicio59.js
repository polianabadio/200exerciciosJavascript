/*Escreva uma função que receba um array de números e retorne um novo array com todos os 
números duplicados.*/

function valoresDuplicados(numeros){
    let numerosDuplicados = numeros.map(valor=> valor*2);
    return numerosDuplicados;
}

valoresDuplicados([2,6,9,1,3,5])