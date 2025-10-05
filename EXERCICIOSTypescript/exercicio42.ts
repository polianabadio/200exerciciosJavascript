//Usando um laço for, crie um programa que transforme um número binário em decimal.

let numBinario:number = 101101;
let numero:number = 0;
let numeros:any = numBinario.toString().split("");

for(let i:number=0;i<numeros.length;i++){
    numero+=numeros[i]*(2**i);
}

console.log(numero)