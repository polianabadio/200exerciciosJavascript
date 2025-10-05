//Escreva uma função que receba uma string e retorne o número de palavras na string.

function numPalavras(texto:string):string{
    let palavras:string[] = texto.split(" ");
    return (`O número de palavras da frase é de ${palavras.length}`);
}

numPalavras("Olá mundo! Olá Javascript!")