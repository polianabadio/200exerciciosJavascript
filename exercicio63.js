/*Escreva uma função que receba um número e retorne um array com todos os números primos 
até aquele número.*/

function primo(num){
    if (num <= 1) return false;
    if (num === 2) return true;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
}
    }
    return true;
}

function listaPrimos(num){
    let listaNum = [];
    for(let i=0;i<num;i++){
        primo(i);
        if(primo(i)){
            listaNum.push(i);
        }
    }
    return listaNum;
}

listaPrimos(10);