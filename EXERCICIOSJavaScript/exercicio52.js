//Escreva uma função que calcule o n-ésimo número de Fibonacci.

function numerosFibonacci(quantidade){
    let sequencia = [0,1];
    for(let i=2; i<quantidade;i++){
        let proximo = sequencia[i - 1] + sequencia[i - 2];
        sequencia.push(proximo);
    }
    return sequencia;
    }

numerosFibonacci(10);