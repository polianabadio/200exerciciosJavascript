/*Escreva uma função que aceite um número, um array de funções de callback e um 
valor inicial, e retorne o resultado final após a aplicação de todas as funções de 
callback no valor inicial, o número de vezes especificado.*/

const estudo: ((nivel:number) => number) [] = [
    (nivel) => nivel * 1.1,
    (nivel) => nivel + 5,
    (nivel) => nivel * 1.2,
];

function simularEstudo(vezes: number, callbacks: ((n: number) => number)[], 
valorInicial: number) {
    let nivel = valorInicial;

    for (let i = 0; i < vezes; i++) {
        for (let callback of callbacks) {
          nivel = callback(nivel);
        }
      }
    
      return nivel;
}

const resultado = simularEstudo(3, estudo, 10);

console.log(`Nível final de conhecimento após 3 ciclos: ${resultado.toFixed(2)}`);