/*Escreva uma função que receba um número e retorne uma string repetida aquele número
 de vezes.*/

 function loop(num:number):void{
    for(let i:number=0;i<num;i++){
        console.log(`${num} loop`);
    }
 }

 loop(3);