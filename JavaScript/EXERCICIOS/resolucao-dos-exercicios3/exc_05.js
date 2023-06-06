// [ ] Escreva um programa onde, você chame uma função mandando dois argumentos, 2 números, e a função responde qual número é maior

function qualEMaior(number1, number2){
    var maior = Math.max(number1, number2)
    var menor = Math.min(number1, number2)

    console.log(`Dos valores ${number1} e ${number2} o maior é ${maior} e o menor é ${menor}.`)
}

qualEMaior(9,1)

//OU

const numbers = (numberOne, numberTwo) => {

    if(numberOne > numberTwo){console.log('O primeiro é maior')}
    else {console.log('O segundo é maior')}

}

numbers(5,9)