//Usando um laço for, imprima todos os números primos de 1 a 100.

for (let num = 2; num <= 100; num++) {
    let primo = true;
  
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        primo = false;
        break;
      }
    }
  
    if (primo) {
      console.log(num);
    }
  }