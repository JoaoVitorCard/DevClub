/*
    RETURN FUNCTION

    ELA VAI RETORNAR O QUE FOR SETATDA A FAZER. Ex:

    function sum(number1, number2){
        const result = number1 + number2
        return result
    }

    sum()

    O CÓDIGO NÃO SERÁ MAIS LIDO E EXECUTADO NA FUNÇÃO APÓS O RETURN
    E uma function que não possuir o return é chamada de VOID(vazia)
*/

function sum(number1, number2){
    console.log(number1 + number2)
}

const firstNumber = 5
const secondNumber = 10

sum(firstNumber, secondNumber)

// Usando o Return

function sum1(number1, number2){
    const result = number1 + number2
    return result
}

const numberOne = 55
const numberTwo = 23

console.log(`O primeiro número é ${numberOne}`)
console.log(`O segundo número é ${numberTwo}`)
console.log(`A soma dos dois é ${sum1(numberOne, numberTwo)}`)