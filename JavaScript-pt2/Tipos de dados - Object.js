/* 
  Object
*/

const name = "João Vitor"
const age = 22
const address = "Rua Mogno"

const JoaoVitor = {
  name: "João Vitor",
  age: 22,
  address: {
    street: "Mogno",
    number: "S/N",
    complement: "Qd: 29 Lt: 14",
    neighborhood: "Jardim dos Ipes",
    city: "Anápolis",
    country: "Brasil, GO"
  }
}

console.log(JoaoVitor)

JoaoVitor.address.number = 23

console.log(JoaoVitor)

JoaoVitor.heigth = 175

console.log(JoaoVitor)