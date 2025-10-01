//Usando um laço for, imprima os primeiros 10 números da sequência de Fibonacci.
let num1=0;
let num2=1;

for(let i=0;i<10;i++){
    console.log(num1);
    
    let proximo = num1+num2;
    num1=num2;
    num2=proximo;
}