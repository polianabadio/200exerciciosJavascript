/*Usando um laço while, crie um programa que determine se um número é palíndromo ou não 
(um número é palíndromo se for igual ao seu reverso).*/

let num = 1001;
num = num.toString();
let numArray = num.split("");
let palindromo = "";
contador=0;

while(contador < numArray.length){
    palindromo=numArray[contador] + palindromo;
    contador++;
}

if(palindromo===num){
    console.log(`O número ${num} é palímdromo!`)
}else{
    console.log(`O número ${num} não é palímdromo!`)
}


