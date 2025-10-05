//Escreva uma função que aceite um número como argumento e retorne se ele é par ou ímpar.

function parOuImpar(num:number):string{
    let texto:string = ""
    if(num%2===0){
        texto = `O número ${num} é par`;
    }else{
        texto = `O número ${num} é ímpar`;
    }
    return texto;
}

parOuImpar(2);