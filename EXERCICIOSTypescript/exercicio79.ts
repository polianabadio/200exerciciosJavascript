/*Crie um objeto que represente um carro, com propriedades para a marca, modelo,
 ano e velocidade atual, e os seguintes métodos: acelerar, frear e obter velocidade
  atual.*/

  let carro = {
    marca:"Chevrolet",
    modelo:"Celta",
    ano:2020,
    velocidadeAtual:100,

    acelerar():number{
        return this.velocidadeAtual+10;
    },

    frear():number{
        return this.velocidadeAtual-10;
    },

    obterVelocidadeAtual():string{
        return `O carro está a ${this.velocidadeAtual} KM/h`;
    }
  }