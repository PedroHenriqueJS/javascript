function calc(){
    var qano = Number(window.prompt(`Qual é o ano que você quer verificar?`))

    if((qano % 4 == 0 && qano % 100 !== 0) || qano % 400 == 0){
        ano_esc.innerHTML = `O ano de ${qano} <mark id="green">É BISSEXTO</mark> ✅`
    }else{
        ano_esc.innerHTML = `O ano de ${qano} <mark id="red">NÃO É BISSEXTO</mark> ❌`
    }
}