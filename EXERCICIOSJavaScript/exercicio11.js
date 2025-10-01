//Escreva um programa que verifica se uma pessoa pode votar com base na idade.

let idade = prompt("Digite sua idade:");

if(idade>=16 || idade>=70){
    console.log("Você pode votar!!")
}else if(idade>=18 && idade<70){
    console.log("O seu voto é obrigatório!")
}else{
    console.log("Você ainda não tem idade para votar!!")
}