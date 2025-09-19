/*Escreva uma função que receba um array de números e retorne um novo array com a raiz quadrada 
de todos os números.*/

function valoresRaizQuadrada(numeros){
    let numerosRaizQuadrada = numeros.map(valor=> Math.sqrt(valor));
    return numerosRaizQuadrada;
}

valoresRaizQuadrada([4,36,25,121,144,2500])