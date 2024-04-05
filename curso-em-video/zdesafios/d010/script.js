function calc(){
    var text = window.document.getElementById('texto')
    var a = window.prompt('Qual é o valor de a?')
    var b = window.prompt('Qual é o valor de b?')
    var c = window.prompt('Qual é o valor de c?')
    var res = b**2 - 4 * a * c

    text.innerHTML = 'Calculando o &Delta;...'

    equaatual.innerHTML = `A equação atual é <strong>${a}x² + ${b} + ${c} = 0</strong>`
    calculo.innerHTML = `O cáculo realizado será <strong>&Delta; = ${b}² - 4 . ${a} . ${c}</strong>`
    final.innerHTML = `O valor cálculado foi <strong>&Delta; = ${res}</strong>`
    if(res < 0){
        cond.innerHTML = '<strong>O delta é negativo. Equação não possui raízes reais.</strong>'
    }


}