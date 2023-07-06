/* 
  MAP => Mapear o nosso array.

    - Cria um novo array, a partir do array percorrido (array original).
    - Cria um novo array, com a mesma quantidade de itens do array original.
    - Aceita 3 parâmetros.
      - Item do array.
      - Index.
      - Arary completo.
*/

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const double = number.map(item => { return item * 2 })

const list = [
  { name: "Rodolfo", vip: true },
  { name: "Maria", vip: false },
  { name: "João Vitor", vip: true },
  { name: "Bruno", vip: true },
  { name: "Carla", vip: false },
  { name: "Ana", vip: true },
  { name: "Julio", vip: false }
]

const braceletColor = list.map(item => {
  if (item.vip === true) {
    item.bracelet = "Preto"
  } else {
    item.bracelet = "Verde"
  }

  return item
})

const newList = list.map(user => {
  const newUser = {
    name: user.name,
    braceletColor: user.vip === true ? "Preta" : "Verde"
  }

  return newUser
})

const students = [
  { name: "Rodolfo", testGrade: 7 },
  { name: "Maria", testGrade: 5 },
  { name: "João Vitor", testGrade: 8 },
  { name: "Bruno", testGrade: 9 },
  { name: "Carla", testGrade: 3 },
  { name: "Ana", testGrade: 2 },
  { name: "Julio", testGrade: 10 }
]

const approvedStudents = students.map(students => {
  const listOfStudents = {
    name: students.name,
    testGrade: students.testGrade,
    approved: students.testGrade >= 5 ? "Aprovado" : "Reprovado"
  }
  return listOfStudents
})

console.log(approvedStudents)