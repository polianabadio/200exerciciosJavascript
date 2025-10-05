//Escreva uma função que verifique se um número é primo.

function ePrimo(num:number):boolean{
    let contador:number=0;
    for(let i:number=2;i<=num;i++){
        if(num%i===0){
            contador++;
        }
    }
    if(contador>1){
        return false;
    }else{
        return true;
    }
}

ePrimo(3);