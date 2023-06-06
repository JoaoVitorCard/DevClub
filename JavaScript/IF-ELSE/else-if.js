/*
    CONTROLE DE FLUXA - CONDICIONAIS - IF / ELSE

    if = SE
    else = Se não
*/

const temperature = 35

if (temperature >= 36 && temperature <=39) {
    console.log('Você está com a temperatura normal.')
} else if (temperature > 39) {
    console.log('Você está com febre.')
} else {
    console.log('Você está com a temperatura muito baixa, procure um médico.')
}