//Usando um laço while, crie um programa que adivinha um número que o usuário pensou, através do método de busca binária.

console.log("Pense em um número entre 1 e 100.");
console.log("Eu vou tentar adivinhar!");
console.log("Responda com: 'maior', 'menor' ou 'igual'.");

let min = 1;
let max = 100;

let chute;
let resposta = "";

while(resposta!=="igual"){

    chute = Math.floor((min + max) / 2);
    
    resposta = prompt(`O número é ${chute}? (Responda: maior, menor ou igual)`);

    if (resposta === 'maior') {
        min = chute + 1;
      } else if (resposta === 'menor') {
        max = chute - 1;
      } else if (resposta !== "igual") {
        console.log("Por favor, responda apenas: maior, menor ou igual.");
      }
    }

console.log(`Acertei! O número é ${chute}.`);
