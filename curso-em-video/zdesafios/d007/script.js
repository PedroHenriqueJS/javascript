var cot = window.prompt('Antes de mais nada. Digite o valor da cotação atual do dólar:')
function calc(){
    var text = window.document.getElementById('texto')
    var real = Number(window.prompt(`Quantos R$ você tem na carteira?`))
    
    var usd = Number(real / cot)

    if(real == 0){
        window.alert('[ERRO] Informe um número para converter')
    }else{
        text.innerHTML = `O valor de R$${real} em dólares corresponde a...`

        dolar.innerHTML = `US$${usd.toFixed(2).replace('.', ',')} se trocar em uma casa de câmbio`
    }

}