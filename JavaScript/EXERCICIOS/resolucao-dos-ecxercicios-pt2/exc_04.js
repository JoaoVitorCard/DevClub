// [ ] Faça um programa que receba 3 números inteiros, e deve imprimir, qual é o maior, qual é o menor.

/*const firstNumber = [1, 2, 3]
Array.min = function(array) {
    return Math.min.apply(Math, array);
}
Array.max = function(array) {
    return Math.max.apply(Math, array);
}

console.log('O menor número é:', Array.min(firstNumber))
console.log('O maior número é:', Array.max(firstNumber))*/

// OU

/*const number1 = 1
const number2 = 2
const number3 = 3

if(number1 > number2 && number1 > number3){
    console.log('O primeiro número é maior')
} else if (number2 > number3){
    console.log('O segundo número é maior')
} else {
    console.log('O terceiro número é maior')
}

if(number1 < number2 && number1 < number3){
    console.log('O primeiro número é menor')
} else if (number2 < number3){
    console.log('O segundo número é menor')
} else {
    console.log('O terceiro nnúmero é menor')
}*/

// OU

const numberFirst = 1
const numberSecond = 2
const numberThird = 3

if(numberFirst > numberSecond && numberFirst > numberThird){
    console.log('O Primeiro é maior')
}

if(numberFirst < numberSecond && numberFirst < numberThird){
    console.log('O Primeiro é menor')
}

if(numberSecond > numberFirst && numberSecond > numberThird){
    console.log('O Segundo é maior')
}

if(numberSecond < numberFirst && numberSecond < numberThird){
    console.log('O Segundo é menor')
}

if(numberThird > numberFirst && numberThird > numberSecond){
    console.log('O Terceiro é maior')
}

if(numberThird < numberFirst && numberThird < numberSecond){
    console.log('O Terceiro é menor')
}