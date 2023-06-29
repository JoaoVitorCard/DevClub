/*
  ForEach(item, index, array)

  Serve para iteração em arrays.
*/

const users = [
  { name: 'João Vitor', phoneNumber: '(62) 99401-6098' },
  { name: 'Rodolfo', phoneNumber: '(62) 99434-4343' },
  { name: 'Anna', phoneNumber: '(62)99124-4875' },
  { name: 'Léa', phoneNumber: '(62)99147-8300' }
]

users.forEach((item, index) => {
  console.log(index + " " + item.name + " " + item.phoneNumber)
})