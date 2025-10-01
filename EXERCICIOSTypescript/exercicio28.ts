//Usando um laço while, calcule e imprima a soma de todos os números de 1 a 100.
let soma:number=0;
let contador:number = 1;

while(contador<=100){
    soma = soma+contador;
    contador++;
}

console.log("A soma dos números de 1 a 100 é: " + soma);