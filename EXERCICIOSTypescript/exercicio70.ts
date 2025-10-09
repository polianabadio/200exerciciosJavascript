/*Escreva uma função de alta ordem que aceite um array de funções de callback e um valor, e retorne um array de resultados de aplicar cada função de 
callback ao valor.*/

const funcoes: [(x: number) => number, (x: number) => number] = [
    (x) => x * 2,
    (x) => x / 2,
  ];

function dividirOperacao(
    numeros: number[],
    callbacks: [(valor: number) => number, (valor: number) => number]
  ): number[] | undefined {    
    const [paraPar, paraImpar] = callbacks;
    const resultados: number[] = [];
  
    for (const num of numeros) {
      if (num % 2 === 0) {
        resultados.push(paraPar(num));
      } else {
        resultados.push(paraImpar(num));
      }
    }
    return resultados;
  }

  console.log(dividirOperacao([2, 3, 8, 5], funcoes));