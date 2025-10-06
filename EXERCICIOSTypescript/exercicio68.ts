/*Escreva uma função de alta ordem que aceite um array de números e uma função de callback,
 e retorne um novo array que contém apenas os números do array original que satisfazem a
  condição da função de callback.*/

function numeroDuplicado(num:number|undefined):number{
    return num!*=2;
}

function duplicarLista(numeros:number[],callback:(numero:number|undefined)=>number){
    for(let n in numeros){
        callback(numeros[n]);
    }
    return numeros;
}

console.log(duplicarLista([2,4,3,10,50,14],numeroDuplicado));