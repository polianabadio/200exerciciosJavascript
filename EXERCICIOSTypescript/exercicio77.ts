/*Crie um objeto que represente um livro, com propriedades para o título, autor e 
número de páginas. Em seguida, adicione um método ao objeto que imprima uma
 descrição do livro.*/

 const livro = {
    titulo:"",
    autor:"",
    numeroPaginas:200,
    
    dadosLivro(){
        console.log(`O livro ${this.titulo} do autor ${this.autor} tem ${this.numeroPaginas} páginas.`)
    }
 }