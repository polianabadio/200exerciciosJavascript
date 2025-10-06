//Usando um laço for, crie um programa que transforme um número binário em decimal.

let numBinario:number = 101101;
let numero:number = 0;
let numeros:any = numBinario.toString().split("");

for(let i:number=0;i<numeros.length;i++){
    numero+= parseInt(numeros[i])*(2**i);
}
// for(let n in numeros){    
//     numero += numeros[n]*(2**n);
// }


console.log(numero)