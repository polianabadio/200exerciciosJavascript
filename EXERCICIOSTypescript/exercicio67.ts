/*Escreva uma função que aceite uma função de callback e um array de arrays, e retorne um 
novo array que contém os resultados de aplicar a função de callback a cada array.*/

function nomeCompleto(dadosNome:string[]|undefined):string{
    const [nome, sobrenome] = dadosNome!;
    return `${nome} ${sobrenome}`;
}

function dadosNome(dadosNome:string[][],callback:(dadosNome:string[]|undefined)=>string)
:string[]{
    let nomesComplestos:string[]=[];
    for(let i:number=0;i<dadosNome.length;i++){
        nomesComplestos.push(callback(dadosNome[i]));
    }
    return nomesComplestos;
}

const listaDeNomes = [
    ["Poliana", "Abadio"],
    ["Vitor", "Fernandes"],
    ["Jorge", "Abadio"]
  ];
  
  const resultado = dadosNome(listaDeNomes, nomeCompleto);
  console.log(resultado);