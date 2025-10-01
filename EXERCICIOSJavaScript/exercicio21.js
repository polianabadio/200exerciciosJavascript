//Escreva um programa que determina a estação do ano com base no mês.

let mes = prompt("Digite o mês:");

let nomeMes = mes.toLocaleLowerCase();

if(nomeMes==="dezembro" || nomeMes==="janeiro" || nomeMes==="fevereiro"){
    console.log("A estação do mês é Verão!");
}else if(nomeMes==="março" || nomeMes==="abril" || nomeMes==="maio"){
    console.log("A estação do mês é Outono!");
}else if(nomeMes==="junho" || nomeMes==="julho" || nomeMes==="agosto"){
    console.log("A estação do mês é Inverno!");
}else if(nomeMes==="setembro" || nomeMes==="outubro" || nomeMes==="novembro"){
    console.log("A estação do mês é Primavera!");
}else{
    console.log("Mês inválido!")
}