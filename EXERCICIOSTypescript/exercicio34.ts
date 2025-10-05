/*Usando um laço while, imprima os números de 1 a 100, mas para múltiplos de 3 imprima 
"Fizz" e para múltiplos de 5 imprima "Buzz". Para números que são múltiplos de ambos, 
imprima "FizzBuzz" (Problema FizzBuzz).*/

let contador:number = 1;

while (contador <= 100) {
  if (contador % 15 === 0) {
    console.log("FizzBuzz");
  } else if (contador % 3 === 0) {
    console.log("Fizz");
  } else if (contador % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(contador);
  }

  contador++;
}
