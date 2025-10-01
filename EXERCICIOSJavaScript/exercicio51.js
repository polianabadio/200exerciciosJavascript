//Escreva uma função que calcule o fatorial de um número.

function calculoFatorial(num){
    let fatorial=1;
    for(let i=num; i>0; i--){
        fatorial*=i;
    }
    return fatorial;
}

calculoFatorial(3);