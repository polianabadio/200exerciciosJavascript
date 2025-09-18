//Usando um laço do-while, crie um programa que transforme um número decimal em binário.

let num = 25;
let numBinario = "";

do{
if(num%2===0){
    numBinario+="0";
}else{
    numBinario+="1";
}
num = Math.floor(num / 2);
}while(num>0)

    console.log(numBinario);