function carregar(){
    var msg = document.getElementById('msg')
    var foto = document.getElementById('imagem')
    var data= new Date()
    var hora = data.getHours()

    if (hora <6){
        msg.innerHTML = `Agora são ${hora} horas. Boa madrugada!`
        foto.src = `fotomadrugada.png`
        document.body.style.background = "#0f212f"
    }else if (hora < 12){
        msg.innerHTML = `Agora são ${hora} horas. Bom dia!`
        foto.src = `fotomanha1.jpg`
        document.body.style.background = "#f7e5d1"
    }else if (hora < 18){
        msg.innerHTML= `Agora são ${hora} horas. Boa tarde!`
        foto.src = `fototarde.png`
        document.body.style.background = "#eaa378"
    }else if (hora < 23) {
        msg.innerHTML = `Agora são ${hora} horas. Boa noite!`
        foto.src = `fotonoite.png`
        document.body.style.background = "#0f212f"
    }
}
