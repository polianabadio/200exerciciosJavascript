//Escreva uma função que aceite uma string como argumento e retorne a string invertida.

function inversaoTexto(texto:string):string{
    let textoInvertido:string = texto.split("").reverse().join("");
    return textoInvertido;
}

inversaoTexto("Javascript");