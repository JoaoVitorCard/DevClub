/*
    CONTROLE DE FLUXO - CONDICIONAIS - SWITCH CASE
*/

const temperature = 33

switch(temperature) {
    case 30: 
    console.log('A temperatura está MUITO abaixo do normal')
        break;

    case 33: 
    console.log('A temperatura está abaixo do normal')
        break;

    case 36: 
    console.log('A temperatura está normal')
        break;

    case 39: 
    console.log('A temperatura está um pouco alta')
        break;

    case 43: 
    console.log('A temperatura está MUITO alta, procure um médico imediatamente')
        break;

    default: 
    console.log('Temperatura não encontrada')
        break;
}