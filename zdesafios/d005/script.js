function calc(){
    var text = window.document.getElementById('texto')
    var dist = parseFloat(window.prompt(`Digite uma distância em metros (m)\nOBS: Se precisar usar a vírgula, utilize o ponto ao invés`))
    var km = dist / 1000
    var hm = dist / 100
    var dam = dist / 10
    var dm = dist * 10
    var cm = dist * 100
    var mm = dist * 1000



    if(dist == 0){
        window.alert('[ERRO] Informe um número para converter')
    }else{
        text.innerHTML = `A distância de ${dist} metros, corresponde a...`

        quilo.innerHTML = `${km.toFixed(3).replace('.', ',')} quilômetros (Km)`
        hecto.innerHTML = `${hm.toFixed(3).replace('.', ',')} hectômetros (Hm)`
        deca.innerHTML = `${dam.toFixed(3).replace('.', ',')} decâmetros (Dam)`
        deci.innerHTML = `${dm.toFixed(3).replace('.', ',')} decímetros (dm)`
        centi.innerHTML = `${cm.toFixed(3).replace('.', ',')} centímetros (cm)`
        mili.innerHTML = `${mm.toFixed(3).replace('.', ',')} milímetros (mm)`
    }

}