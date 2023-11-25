var data = new Date ()
var hora = data.getHours()
var minuto = data.getMinutes()
var dia = data.getDay()

switch (dia) {
    case 0:
        console.log ('Hoje é domingo')
        break
    case 1:
        console.log ('Hoje é segunda')
        break
    case 2:
        console.log ('Hoje é terça')
        break
    case 3:
        console.log ('Hoje é quarta')
        break
    case 4:
        console.log ('Hoje é quinta')
        break
    case 5:
        console.log ('Hoje é sexta')
        break
    case 6:
        console.log ('Hoje é sabádo')
        break
}
console.log(`São ${hora} horas e ${minuto} minutos`)

if (hora < 6){
    console.log ('Boa madrugada')
}else if (hora < 12){
    console.log ('Bom dia')
}else if (hora < 18){
    console.log('Boa tarde')
}else if (hora < 23){
    console.log('Boa noite')
}