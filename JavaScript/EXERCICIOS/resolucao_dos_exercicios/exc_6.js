// Faça um programa que imprima na tela se um nome é diferente ao outro nome digitado. Ex: João e João, imprime false. João e Maria, imprime true.

let name1 = "João"
let name2 = "João"
let name3 = "Maria"

console.log(name1 !== name2)
console.log(name1 !== name3)

//OR

const compare = name1 !== name2
const compare1 = name1 !== name3

console.log(compare)
console.log(compare1)