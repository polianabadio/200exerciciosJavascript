//Escreva um programa que verifica se uma palavra é um palíndromo.

function verificarPalindromo(palavra) {
      const palavraFormatada = palavra.toLowerCase();
      const palavraInvertida = palavraFormatada.split('').reverse().join('');

      if (palavraFormatada === palavraInvertida) {
        console.log("A palavra é um palíndromo.")
      } else {
        console.log("A palavra não é um palíndromo.")
      }
}

let palavra = prompt("Digite uma palavra:")
verificarPalindromo(palavra);

