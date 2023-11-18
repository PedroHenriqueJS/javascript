function calc(){
    var agora = new Date()
    var ano = agora.getFullYear()
    var nascim = window.document.getElementById('nasc')  
    var res = document.getElementById('idade')
    var sexo = document.getElementsByName('sexo')
    var idade = ano - nascim.value
    var genero = ''
    var img = window.document.getElementById('img')
    if (nasc.value.length == 0 || nasc.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }else{
        if(sexo[0].checked) {
            genero = "um homem"
            
        }else{
            genero = "uma mulher"
        }
        res.innerHTML = `Detectamos ${genero} de ${idade} anos`
        
        if(sexo[0] && idade <= 3){
            res.innerHTML = `Detectamos um menino de ${idade} anos`
            img.innerHTML = "<img src='./assets/bebeM.jpg'>"
        }
        else if(sexo[0] && idade <= 12){
            res.innerHTML = `Detectamos um menino de ${idade} anos`
            img.innerHTML = "<img src='./assets/criancaM.jpg'>"
        }else if(sexo[0] && idade <= 20){
            res.innerHTML = `Detectamos um menino de ${idade} anos`
            img.innerHTML = "<img src='./assets/adolescenteM.jpg'>"
        }
        else if(sexo[0] && idade <= 40){
            img.innerHTML = "<img src='./assets/adulto1M.jpg'>"
        }
        else if(sexo[0] && idade <= 60){
            img.innerHTML = "<img src='./assets/adulto2M.jpg'>"
        }else if(sexo[0] && idade <= 130){
            img.innerHTML = "<img src='./assets/idosoM.jpg'>"
        }else{
            window.alert('[ERRO] Verifique os dados e tente novamente')
            res.innerHTML = "Idade muito avançada"
        }
        
        if(sexo[1] && idade <= 3){
            res.innerHTML = `Detectamos uma menina de ${idade} anos`
            img.innerHTML = "<img src='./assets/bebeF.jpg'>"
        }
        else if(sexo[1] && idade < 12){
            res.innerHTML = `Detectamos uma menina de ${idade} anos`
            img.innerHTML = "<img src= './assets/criancaF.jpg'>"
        }else if(sexo[1] && idade <= 20){
            res.innerHTML = `Detectamos um adolescente de ${idade} anos`
            img.innerHTML = "<img src='./assets/adolescenteF.jpg'>"
        }
        else if(sexo[1] && idade <= 40){
            img.innerHTML = "<img src='./assets/adulto1F.jpg'>"
        }
        else if(sexo[1] && idade <= 60){
            img.innerHTML = "<img src='./assets/adulto2F.jpg'>"
        }else if(sexo[1] && idade <= 130){
            img.innerHTML = "<img src='./assets/idosoF.jpg'>"
        }else{
            window.alert('[ERRO] Verifique os dados e tente novamente')
            res.innerHTML = "Idade muito avançada"
        }

    }
}   



