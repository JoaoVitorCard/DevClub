/*
    CALCULADORA
*/

const calculate = (number1, number2, operador) => {

    let result

    switch (operador) {
        case "+":
            result = number1 + number2
            break;

        case "-":
            result = number1 - number2
            break;

        case "/":
            result = number1 / number2
            break;

        case "*":
            result = number1 * number2
            break;

        default: 
            result = 'Digite uma função válida'
            break;
    }

    return result
}

console.log(calculate(2,4,'+'))
console.log(calculate(2,4,'-'))
console.log(calculate(2,4,'/'))
console.log(calculate(2,4,'*'))
console.log(calculate(2,4,'^'))