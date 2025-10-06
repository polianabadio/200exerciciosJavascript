//Escreva uma função que aceite um número e uma função de callback, e execute a função de callback o número de vezes especificado.

function impressao(num:number):void{
    console.log( `--${num}--`);
}

function loop(num:number,callback:(num:number)=>void):void{
    for(let i:number=0;i<num;i++){
        callback(num);
    }
}

console.log(loop(2,impressao));