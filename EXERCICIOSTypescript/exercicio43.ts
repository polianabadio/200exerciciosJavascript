/*Usando um laço while, crie um programa que determine se um número é palíndromo ou não 
(um número é palíndromo se for igual ao seu reverso).*/

let num:any = 1001;
num = num.toString();
let numArray:string[] = num.split("");
let palindromo:string = "";
let contador:number=0;

while(contador < numArray.length){
    palindromo=numArray[contador] + palindromo;
    contador++;
}

if(palindromo===num){
    console.log(`O número ${num} é palímdromo!`)
}else{
    console.log(`O número ${num} não é palímdromo!`)
}


