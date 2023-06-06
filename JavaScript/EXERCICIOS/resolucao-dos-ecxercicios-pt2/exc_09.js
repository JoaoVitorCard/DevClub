// [ ] Faça um programa onde ele leia 4 números. Em cada caso, ele deve retornar a mensagem condizente: - Todos os números são impares => TODOS OS NÚMEROS SÃO IMPARES - Todos os números são pares => TODOS OS NÚMEROS SÃO PARES. Em caso negativo dos casos a cima, colocar uma mensagem => Há números pares e ímpares.

const numberFirst = 7
const numberSecond = 3
const numberThird = 1
const numberFourth = 9

if(numberFirst % 2 === 0 && numberSecond % 2 === 0 && numberThird % 2 === 0 && numberFourth % 2 === 0){
    console.log('Todos os números são pares!')
} else if(numberFirst % 2 !== 0 && numberSecond % 2 !== 0 && numberThird % 2 !== 0 && numberFourth % 2 !== 0){
    console.log('Todos são ímpares!')
} else {
    console.log('Há números pares e ímpares!')
}