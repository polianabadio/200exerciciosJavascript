//Escreva um programa que determina o maior entre três números.

const numeros:number[] = [1,5,10];

const maiorNumero: number = Math.max(...numeros);

console.log(`O maior número é: ${maiorNumero}`);