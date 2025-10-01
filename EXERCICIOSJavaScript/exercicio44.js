//Usando um laço do-while, crie um programa que imprima a soma de duas matrizes.

let matrizA = [
    [1, 2, 3],
    [4, 5, 6]
  ];
  
  let matrizB = [
    [7, 8, 9],
    [10, 11, 12]
  ];
  
  let resultado = [
    [0, 0, 0],
    [0, 0, 0]
  ];
  
  let linha = 0;
  
  do {
    let coluna = 0;
    do {
      resultado[linha][coluna] = matrizA[linha][coluna] + matrizB[linha][coluna];
      coluna++;
    } while (coluna < matrizA[linha].length); 
  
    linha++;
  } while (linha < matrizA.length);
  
  console.log("Matriz A:", matrizA);
  console.log("Matriz B:", matrizB);
  console.log("Soma das matrizes:", resultado);
  