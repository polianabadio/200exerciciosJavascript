/*Declare duas variáveis e atribua valores booleanos a elas. Use os operadores lógicos AND, OR e NOT para 
realizar operações lógicas entre as variáveis. Imprima os resultados.*/

let usuario = true;
let senha = false;

if(usuario && senha){
    console.log("Usuário logado!");
} else if(!usuario || !senha){
    console.log("Usuário ou Senha inválidos!");
}