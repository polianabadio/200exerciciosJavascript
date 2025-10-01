//Escreva um programa que verifica as cores de um semáforo.

let cor:string = "vermelho";

let corAtualizada = cor.toLocaleLowerCase();

if(corAtualizada==="vermelho"){
    console.log("PARE!");
}else if(corAtualizada==="amarelo"){
    console.log("Atenção!");
}else if(corAtualizada==="verde"){
    console.log("Siga!");
}else{
    console.log("Cor inválida!")
}