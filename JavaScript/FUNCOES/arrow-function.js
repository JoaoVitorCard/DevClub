/*
    ARROW FUNCTIONS

    Estrutura:

    const sum1 = (number1, number2) => number1 + number2

    * Não preciso colocar 'function'
    * Se tiver um parâmetro, não preciso colocar os "()"
    * Se o código for maior eu posso colocar as "{}", só que toda vez que for utilizado eu preciso colocar o "return" Ex:
    
    const sum1 = (number1, number2) => {
        return number1 + number2
    }
*/

const sum1 = (number1, number2) => number1 + number2

const numberOne = 55
const numberTwo = 23

console.log(`O primeiro número é ${numberOne}`)
console.log(`O segundo número é ${numberTwo}`)
console.log(`A soma dos dois é ${sum1(numberOne, numberTwo)}`)