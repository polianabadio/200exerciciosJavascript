//Escreva uma função que aceite três números como argumentos e retorne o maior deles.

function numMaior(num1:number,num2:number,num3:number):number{
    let maior:number = Math.max(num1, num2, num3);
    return maior;
}

numMaior(10,5,3);