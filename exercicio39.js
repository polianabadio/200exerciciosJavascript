//Usando um laço for, crie um programa que calcule o fatorial de um número.

let num = 10;
let fatorial = 1;

for(let i=1;i<=num;i++){
    fatorial*=i;
}

console.log(`O fatorial de ${num} é: ${fatorial}`);
