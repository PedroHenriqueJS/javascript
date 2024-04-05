var agora = new Date()
var hora = agora.getHours()

var texto = window.document.querySelector('div#hora')
var img = window.document.querySelector('div#img')

if (hora < 5){
    texto.innerHTML = `Agora são ${hora} horas.`
    img.innerHTML = "<img src= './assets/noite.png'>"
    document.body.style.background = "rgb(2, 1, 80)"
}else if(hora < 12){
    texto.innerHTML = `Agora são ${hora} horas.`
    img.innerHTML = '<img src = ./assets/dia.png>'
    document.body.style.background = "rgb(247, 215, 112)"
}else if(hora < 19){
    texto.innerHTML = `Agora são ${hora} horas.`
    img.innerHTML ='<img src = ./assets/tarde.png>'
    document.body.style.background = "rgb(255, 185, 92)"
}
else{
    texto.innerHTML = `Agora são ${hora} horas.`
    img.innerHTML = "<img src= './assets/noite.png'>"
    document.body.style.background = "rgb(2, 1, 80)"
}