/*Escreva uma função de alta ordem que aceite um número, um array de funções de 
callback e um valor inicial, e retorne o resultado final após a aplicação de todas 
as funções de callback no valor inicial, a cada "n" milissegundos.*/

const tabuada:((num:number) => number)[] = [
    (num) => num*0,
    (num) => num*1,
    (num) => num*2,
    (num) => num*3,
    (num) => num*4,
    (num) => num*5,
    (num) => num*6,
    (num) => num*7,
    (num) => num*8,
    (num) => num*9,
    (num) => num*10,
]

function executarTabuada(num:number,segundos:number,callbacks:(num:number[])=>number){
    setTimeout(() => {
        
      }, segundos*1000);
}