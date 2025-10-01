//Escreva um programa que determina o número de dias em um mês.

let mes:string = "fevereiro";

let nomeMes = mes.toLocaleLowerCase();

if(nomeMes==="janeiro" || nomeMes==="março" || nomeMes==="maio" || nomeMes==="julho" || nomeMes==="agosto" 
    || nomeMes==="outubro" || nomeMes==="dezembro"){
        console.log("O mês tem 31 dias!");
    } else if(nomeMes==="abril" || nomeMes==="junho" || nomeMes==="setembro" || nomeMes==="novembro"){
        console.log("O mês tem 30 dias!");
    }else if(nomeMes==="fevereiro"){
        console.log("O mês tem 29 dias se o ano for bissexto e 28 se o ano não for bissexto!");
    }else{
        console.log("Mês inválido!")
    }