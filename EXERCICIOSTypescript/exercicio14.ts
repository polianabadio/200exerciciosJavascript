//Escreva um programa que verifica se um ano é bissexto.

let ano:number = 2024;

if(ano%400===0 ||ano%4===0){
    console.log("O ano é bissexto!");
}else{
    console.log("O ano não é bissexto!");
}