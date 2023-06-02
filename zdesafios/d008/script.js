function calc(){
    var text = window.document.getElementById('texto')
    var nome = window.prompt('Qual é o produto que está comprando?')
    var preco = parseFloat(window.prompt(`Qual é o preço do ${nome}?\nOBS: Se precisar usar a vírgula, utilize o ponto ao invés`))
    var desc = Number(preco * (10/100))
    var res = Number( preco - desc )

    if(preco == 0){
        window.alert('[ERRO] Informe um valor para converter')
    }else{
        text.innerHTML = `Calculando desconto de 10% para ${nome}`

        valorinicial.innerHTML = `O preço original era R$${preco.toFixed(2).replace('.', ',')}.`
        desconto.innerHTML = `Você acaba de ganhar ${desc.toFixed(2).replace('.', ',')} de desconto (-10%).`
        final.innerHTML = `No fim, você vai pagar R$${res.toFixed(2).replace('.', ',')} no produto ${nome}. `

    }

}