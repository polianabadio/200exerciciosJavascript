//Usando um laço while, crie um programa que inverta uma string.

let texto = "Poliana";
let textoInvertido = "";
let contador = texto.length - 1;

while(contador>=0){
    textoInvertido+=texto[contador];
    contador--;
}

console.log(textoInvertido)