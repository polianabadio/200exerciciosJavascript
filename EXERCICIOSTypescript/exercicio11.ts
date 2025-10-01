//Escreva um programa que verifica se uma pessoa pode votar com base na idade.

let idade:number = 25;

if (idade >= 18 && idade < 70) {
    console.log("O seu voto é OBRIGATÓRIO!");
} else if (idade >= 16) {
    console.log("Você pode votar (Voto Facultativo).");
} else {
    console.log("Você ainda não tem idade para votar.");
}