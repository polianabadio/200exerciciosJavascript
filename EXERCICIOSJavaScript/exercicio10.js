/*Escreva um programa que recebe duas notas de um aluno, calcula a média e imprime se o aluno foi aprovado ou reprovado 
(considerando que a média para aprovação é 7).*/

let nota1 = prompt("Digite o valor da primeira nota:");
let nota2 = prompt("Digite o valor da segunda nota:");

let media = (nota1+nota2)/2;

if(media>=7){
    console.log("APROVADO!!")
}else{
    console.log("REPROVADO =(")
}