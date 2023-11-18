function calc(){
    var numero1 = document.getElementById('num_inicial')  
    var numero2 = document.getElementById('num_fim')
    var pular = document.getElementById('passo')
    var res = document.getElementById('res')
    var i = Number(numero1.value)
    var f = Number(numero2.value)
    let p = Number(pular.value)


    if(numero1.value.lenght == 0 || numero2.value.length == 0 || pular.value.length == 0){
        window.alert('Passo inválido! Considerando PASSO 1')
        p = 1
    }else{
        res.innerHTML = 'Contando: <br>'
        if(i < f){ 
            //CONTAGEM CRESCENTE
            for(cont = i; cont <= f; cont += p){
                res.innerHTML += `${cont} \u{1f449}`
            }
        }else{
            //CONTAGEM REGRESSIVA
            for(cont = i; cont >= f; cont -= p){
                res.innerHTML += `${cont} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }

    
    
}



