type Matriz = number[][];

const matrizA: Matriz = [
  [1, 2, 3],
  [4, 5, 6]
];

const matrizB: Matriz = [
  [7, 8, 9],
  [10, 11, 12]
];

const resultado: Matriz = [
  [0, 0, 0],
  [0, 0, 0]
];

let linha = 0;

do {
  const linhaA = matrizA[linha];
  const linhaB = matrizB[linha];
  const linhaR = resultado[linha];

  if (!linhaA || !linhaB || !linhaR) break;

  let coluna = 0;
  do {
    linhaR[coluna] = linhaA[coluna]! + linhaB[coluna]!;
    coluna++;
  } while (coluna < linhaA.length);

  linha++;
} while (linha < matrizA.length);

console.log("Matriz A:", matrizA);
console.log("Matriz B:", matrizB);
console.log("Soma das matrizes:", resultado);
