/*Escreva um programa que calcula o IMC (Índice de Massa Corporal) de uma pessoa e imprime uma mensagem indicando se a 
pessoa está abaixo do peso, com peso normal, com sobrepeso ou obesa.*/

let peso = prompt("Digite seu peso:");
let altura = prompt("Digite sua altura:");

let imc = peso/altura;

if(imc<18.5){
    console.log("ABAIXO DO PESO");
}else if(imc>=18.5 && imc<25){
    console.log("NORMAL");
}else if(imc>=25 && imc<30){
    console.log("SOBREPESO");
}else if(imc>=30 && imc<40){
    console.log("OBESIDADE");
}else if(imc>=40){
    console.log("OBESIDADE SEVERA");
}
