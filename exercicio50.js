//Escreva uma função que aceite uma string como argumento e retorne a string invertida.

function inversaoTexto(texto){
    let textoInvertido = texto.split("").reverse().join("");
    return textoInvertido
}

inversaoTexto("Javascript");