/*Escreva um programa que imprime uma classificação baseada na nota de um aluno.

A: Desempenho excelente ou ótimo.
B: Bom ou domínio adequado.
C: Desempenho médio, aprovado, ou indica alguma dificuldade.
D: Desempenho abaixo da média, ou alguma dificuldade.
F: Reprovação.*/

let nota:number = 7;

if(nota>=9 && nota<=10){
    console.log("Desempenho excelente ou ótimo.");
}else if(nota>=8 && nota<9){
    console.log("Bom ou domínio adequado.");
}else if(nota>=7 && nota<8){
    console.log("Desempenho médio, aprovado, ou indica alguma dificuldade.");
}else if(nota>=6 && nota<7){
    console.log("Desempenho abaixo da média, ou alguma dificuldade.");
}else if(nota>=0 && nota<6){
    console.log("Reprovação.");
}else{
    console.log("Nota inválida.");
}



