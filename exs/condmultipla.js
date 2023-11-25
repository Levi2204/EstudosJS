var agora = new Date()
var hora = agora.getHours()
var minuto = agora.getMinutes()
var semana = agora.getDay()
/*
0 = domingo
1 = segunda
2 = terça
3 = quarta
4 = quinta
5 = sexta
6 = sábadp
*/
switch (semana){
    case 0:
        console.log('Hoje é domingo')
        break
    case 1:
        console.log('Hoje é segunda')
        break
    case 2:
        console.log('Hoje é terça')
        break
    case 3:
        console.log('Hoje é quarta')
        break
    case 4:
        console.log('Hoje é quinta')
        break
    case 5:
        console.log('Hoje é sexta')
        break
    case 6:
        console.log('Hoje é sábado')
        break
    default:
        console.log('[ERRO] Dia inválido')
        break
}
console.log(`${hora} horas e ${minuto} minutos`)

if (hora < 6){
    console.log('Boa madrugada!')
}else if( hora < 12){
    console.log('Bom dia!')
}else if (hora < 18){
    console.log('Boa tarde!')
}else if (hora < 23){
    console.log('Boa noite!')
} 