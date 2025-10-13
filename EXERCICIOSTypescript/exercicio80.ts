/*Crie um objeto que represente um estudante, com propriedades para o nome, notas
 de várias matérias e um método para calcular a média das notas.*/

 let estudante={
    nome:"Poliana",
    notas:[10,5,2,9,6,8],
    calcularMedia():number{
        let soma:number = this.notas.reduce((acumulador,valorAtual)=>{return acumulador+valorAtual;},0);
        const media:number=soma/this.notas.length;
        return media;
    }
 }