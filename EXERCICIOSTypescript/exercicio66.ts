/*Escreva uma função que aceite uma função de callback que retorne verdadeiro ou falso e 
um array, e retorne um novo array que contém apenas os elementos para os quais a função de
 callback retornou verdadeiro.*/

 function par(num:number|undefined):boolean{
    if(num!%2===0){
        return true;
    } else{
        return false;
    }
 }
    
 function verificarNumerosPares(
    numeros:number[],
    callback:(num:number|undefined) => boolean):number[]{
    let pares:number[]=[];

    for(let i:number=0;i<numeros.length;i++){
        if(callback(numeros[i])){
            pares.push(numeros[i]!);
        }
    }

    return pares;
 }


 console.log(verificarNumerosPares([1,2,3,4,5,6,7,8,9,10], par));