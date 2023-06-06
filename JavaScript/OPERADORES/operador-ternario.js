/*
    OPERADOR TERNÁRIO OU CONDICIONAL   

    ? -> se
    : -> se não
*/

const rain = false

const umbrella = rain ? 'Levar guarda-chuva, pois irá chover' : 'Pode deixar o guarda-chuva em casa'

console.log(umbrella)



const bankBalance = true
const bankIsNotBlocked = true
const accountExistence = true

const transferOk = bankBalance && bankIsNotBlocked && accountExistence ? 'Tranfer Finished' : 'Tranfer denied'

console.log(transferOk)