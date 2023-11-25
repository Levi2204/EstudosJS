function Calcular(){
    var result= document.getElementById('result')
    var vel = Number (tn1.value)
    var mult = ((vel - 60)*2)
    if (vel >= 60){
        result.innerHTML = (`Sua velocidade era de ${vel}. Você será multado em ${mult} reais`)
    }else{
        result.innerHTML = (`Você estava andando em uma velocidade permitida`)
    }
}