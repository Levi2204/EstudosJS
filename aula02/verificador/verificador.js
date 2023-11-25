function verificar() {
    let data = new Date()
    let ano1= data.getFullYear()
    let fano = document.getElementById('ano')
    let resultado = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano1 || fano.value < 1900){
        window.alert ("Verifique os dados e tente novamente")
    } else{
        let fsex = document.getElementsByName("sexo")
        let idade = ano1 - Number(fano.value)
        let genero = ""
        let img = document.getElementById("foto")
        if (fsex[0].checked){
            genero = "Masculino"
            img.setAttribute('src','fotohomem.jpg')
        }else if (fsex[1].checked){
            genero = "Feminino"
            img.setAttribute('src','fotomulher.jpg')
        }
    }
    resultado.style.textAlign = 'center'
    resultado.innerHTML = `Você é do gênero ${genero} e tem ${idade} anos` 
    resultado.appendChild(img)
}