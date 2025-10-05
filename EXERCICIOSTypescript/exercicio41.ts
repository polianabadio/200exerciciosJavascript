//Usando um laço do-while, crie um programa que transforme um número decimal em binário.

let num:number = 25;
let numBinario:string = "";

do{
if(num%2===0){
    numBinario = "0" + numBinario;
}else{
    numBinario = "1" + numBinario;
}
num = Math.floor(num / 2);
}while(num>0)

console.log(numBinario);