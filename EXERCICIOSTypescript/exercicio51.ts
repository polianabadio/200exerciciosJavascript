//Escreva uma função que calcule o fatorial de um número.

function calculoFatorial(num:number):number{
    let fatorial:number=1;
    for(let i:number=num; i>0; i--){
        fatorial*=i;
    }
    return fatorial;
}

calculoFatorial(3);