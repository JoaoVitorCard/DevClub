/*
    FUNÇÃO ANONIMA / ANONIMOUS FUNCTION
*/

const sum1 = function (number1, number2){       // Anônima é quando coloca a function dentro de uma variável
    const result = number1 + number2
    return result
}

const numberOne = 55
const numberTwo = 23

console.log(`O primeiro número é ${numberOne}`)
console.log(`O segundo número é ${numberTwo}`)
console.log(`A soma dos dois é ${sum1(numberOne, numberTwo)}`)