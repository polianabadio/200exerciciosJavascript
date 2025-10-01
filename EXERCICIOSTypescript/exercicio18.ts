//Escreva um programa que verifica se uma pessoa pode dirigir com base na idade.

function maiorIdade(idade:number){
    if(idade>=18){
        console.log("Você já pode tirar a sua habilitação para dirigir!")
    }else{
        console.log("Você não tem idade para tirar a sua habilitação para dirigir!")
    }
}

let idade = 27;
maiorIdade(idade);