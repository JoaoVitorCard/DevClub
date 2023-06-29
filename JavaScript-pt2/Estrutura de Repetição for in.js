/* 
  Estrutura de Repetição FOR IN

  - FOR IN

  Serve para iterar em objetos
*/

const users = { name: 'João Vitor', age: 22, street: 'Rua Mogno' }

for (let key in users) {
  console.log(key + ": " + users[key])
}