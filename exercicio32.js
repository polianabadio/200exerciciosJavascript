//Usando um laço do-while, crie um jogo de "Pedra, papel e tesoura" contra o computador.

let respostas = ["pedra","papel","tesoura"];

let respostaComputador = respostas[Math.floor(Math.random() * respostas.length)];

let respostaUsuario = prompt("Digite a sua escolha (pedra, papel ou tesoura):");

if((respostaUsuario==="pedra" && respostaComputador==="tesoura")||(respostaUsuario==="papel" && 
    respostaComputador==="pedra")||(respostaUsuario==="tesoura" && respostaComputador==="papel")){
        console.log("Parabéns, você GANHOU!!!")
    }

if((respostaUsuario==="tesoura" && respostaComputador==="pedra")||(respostaUsuario==="pedra" && 
    respostaComputador==="papel")||(respostaUsuario==="papel" && respostaComputador==="tesoura")){
    console.log("Tente novamente, você perdeu =(")
    }

if(respostaUsuario===respostaComputador){
    console.log("EMPATE")
}