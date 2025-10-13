/*Crie um objeto "cachorro" com propriedades para raça, nome e idade. Adicione um 
método que retorne a idade do cachorro em anos humanos (idade do cachorro * 7).*/

let cachorro = {
    raca:'Pitbull',
    nome:'Amora',
    idade:7,

    idadeEmAnosHumanos():number{
        let idadeHumanos=this.idade*7;
        return idadeHumanos;
    }
}

