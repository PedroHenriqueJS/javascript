function calc(){
    var text = window.document.getElementById('texto')
    var nome = window.prompt('Qual é o nome do funcionário')
    var salario = parseFloat(window.prompt(`Qual é o salario de ${nome}?\nOBS: Se precisar usar a vírgula, utilize o ponto ao invés`))
    var percent = Number(window.prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`))
    var aum = Number(salario * (percent/100))
    var res = Number(salario + aum )

    if(salario == 0){
        window.alert('[ERRO] Informe um valor para reajustar')
    }else{
        text.innerHTML = `${nome} recebeu um aumento salarial!`

        valorinicial.innerHTML = `O salário atual era R$${salario.toFixed(2).replace('.', ',')}.`
        perc.innerHTML = `Com um aumento de ${percent}%, o sálario vai aumentar ${aum}.`
        final.innerHTML = `E a partir daí, ${nome} vai passar a ganhar R$${res.toFixed(2).replace('.', ',')}.`
    }

}