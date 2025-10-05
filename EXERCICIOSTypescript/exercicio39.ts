//Usando um laço for, crie um programa que calcule o fatorial de um número.

let num:number = 10;
let fatorial:number = 1;

for(let i:number=1;i<=num;i++){
    fatorial*=i;
}

console.log(`O fatorial de ${num} é: ${fatorial}`);
