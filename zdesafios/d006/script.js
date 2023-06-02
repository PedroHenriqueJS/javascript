function calc(){
    var text = window.document.getElementById('texto')
    var cel = parseFloat(window.prompt(`Digite uma temperatura em graus Celsius (°C)\nOBS: Se precisar usar a vírgula, utilize o ponto ao invés`))
    
    var kel = Number(cel + 273.15)
    var fah = Number((cel * 9/5) + 32)





    if(cel == 0){
        window.alert('[ERRO] Informe um número para converter')
    }else{
        text.innerHTML = `A temperatura em ${cel}°C corresponde a...`

        kelvin.innerHTML = `${kel.toFixed(2).replace('.', ',')}°K (Kelvin)`
        fahrenheit.innerHTML = `${fah.toFixed(2).replace('.', ',')}°F (Fahrenheit)`

    }

}