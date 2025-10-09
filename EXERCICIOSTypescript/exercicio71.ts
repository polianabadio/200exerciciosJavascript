/*Escreva uma função que aceite uma função de callback e um número, e execute a 
função de callback após um certo número de milissegundos especificados pelo número.*/

function atraso(segundos:number): string {
    return `Callback executado depois de ${segundos} segundos!`
  }  

function executarComAtraso(segundos:number,callback:(segundos:number)=>string):void{
    console.log("Iniciou aplicação!")
    setTimeout(() => {
        console.log(callback(segundos));
      }, segundos*1000);
}

executarComAtraso(10,atraso);

