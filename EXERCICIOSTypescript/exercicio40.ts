//Usando um laço while, crie um programa que inverta uma string.

let texto:string = "Poliana";
let textoInvertido:string = "";
let contador:number = texto.length - 1;

while(contador>=0){
    textoInvertido+=texto[contador];
    contador--;
}

console.log(textoInvertido)