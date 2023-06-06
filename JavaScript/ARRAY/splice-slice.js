// MÉTODOS DE ARRAY - SPLICE (Unir/Ligar)

// Ele permite que a gente consiga tirar e colocar itens onde quisermos e o que tirar. EX: 
//Para eliiminar

const students = ['João', 'Maria', 'Ronaldo', 'Carlos', 'Stephanie']

// students.splice(2,1)

console.log(students)

//Para Adicionar

students.splice(1,0,'Eduarda')

console.log(students)

// MÉTODOS DE ARRAY - SLICE (FATIAR)

//Ele cria um array novo mostrando apenas o que foi fatiado(cortado), precisa ser chamado em uma variável. EX:

const people = students.slice(2,6)

console.log(people)