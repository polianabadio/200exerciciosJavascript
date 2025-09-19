//Escreva uma função que receba uma string e retorne o número de palavras na string.

function numPalavras(texto){
    let palavras = texto.split(" ");
    return (`O número de palavras da frase é de ${palavras.length}`);
}

numPalavras("Olá mundo! Olá Javascript!")