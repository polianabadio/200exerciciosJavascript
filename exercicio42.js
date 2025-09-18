//Usando um laço for, crie um programa que transforme um número binário em decimal.

let numBinario = 101101;
let numero = 0;
let numeros = numBinario.toString().split("");

for(let i=0;i<numeros.length;i++){
    numero+=numeros[i]*(2**i);
}

console.log(numero)