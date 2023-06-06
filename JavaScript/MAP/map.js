/*
    MAP
     - CRIA UM NOVO ARRAY, A PARTIR DO ARRAY PERCORRIDO (ARRAY ORIGINAL)
     - CRIA UM NOVO ARRAY, COM A MESMA QUANTIDADE DE ITENS DO ARRAY ORIGINAL
     - ACEITA 3 PARÂMETROS
        - ITEM DO ARRAY
        - INDEX
        - ARRAY COMPLETO
*/

const numbers = [1, 2, 3, 4]

const newArray = numbers.map((number) => {
    newNumber = number * 5 / 2
    return newNumber
})

// Outras maneiras de fazer esse código

const newArray1 = numbers.map(function (number){
    newNumber = number * 5 / 2
    return newNumber
})

const newArray2 = numbers.map(number => number * 5 / 2)

console.log(numbers)
console.log(newArray2)

// Outras maneiras de fazer esse código

const double = number => number * 2 
const newArray3 = numbers.map(double)

console.log(newArray3)