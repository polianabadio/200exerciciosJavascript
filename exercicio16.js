//Escreva um programa que determina o maior entre três números.

let num1 = prompt("Digite um número:");
let num2 = prompt("Digite outro número:");
let num3 = prompt("Digite outro número:");

 if(num1>=num2 && num1>=num3){
    console.log(`${num1} é o maior número do grupo.`);
 } else if(num2>=num1 && num2>=num3){
    console.log(`${num2} é o maior número do grupo.`);
 } else if(num3>=num1 && num3>=num2){
    console.log(`${num2} é o maior número do grupo.`);
 }
