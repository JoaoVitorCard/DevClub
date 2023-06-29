/* 
  Operadores Typeof e Delete

  Typeof -> Tipo do dado
  delete
*/

const myObject = {
  nome: 'João Vitor',
  idade: 22,
  endereco: 'Rua Mógno'
}

const myNumber = 20

const myString = '20'

console.log(typeof myObject)
console.log(typeof myNumber)
console.log(typeof myString)

delete myObject.endereco

console.log(myObject)