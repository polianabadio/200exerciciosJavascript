/*Escreva um programa que recebe duas notas de um aluno, calcula a média e imprime se o aluno foi aprovado ou reprovado 
(considerando que a média para aprovação é 7).*/

let nota1:number = 7;
let nota2:number = 5;

let media = (nota1+nota2)/2;

if(media>=7){
    console.log("APROVADO!!")
}else{
    console.log("REPROVADO =(")
}