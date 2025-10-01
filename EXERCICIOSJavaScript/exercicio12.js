//Escreva um programa que verifica a situação de um estudante de acordo com sua média final.

let media = Number(prompt("Digite a sua média final:"));

if(media>=7){
    console.log("Você está aprovado!!")
}else{
    let notaRecuperacao = 14 - media;
    if (notaRecuperacao <= 10) {
        console.log("Você está de recuperação! Precisa tirar pelo menos " + notaRecuperacao.toFixed(2) + " na prova de recuperação.");
    } else {
        console.log("Você está reprovado! Infelizmente, sua nota é muito baixa para passar mesmo com uma nota máxima na recuperação.");
    }
}