/*
    MAP
     - CRIA UM NOVO ARRAY, A PARTIR DO ARRAY PERCORRIDO (ARRAY ORIGINAL)
     - CRIA UM NOVO ARRAY, COM A MESMA QUANTIDADE DE ITENS DO ARRAY ORIGINAL
     - ACEITA 3 PARÂMETROS
        - ITEM DO ARRAY
        - INDEX
        - ARRAY COMPLETO
*/

const students = [
    { name: 'Eduardo', age: 66 },
    { name: 'Rodolfo', age: 32 },
    { name: 'Miguel', age: 41 },
    { name: 'Carlos', age: 75 },
    { name: 'Camila', age: 14 },
    { name: 'Roni', age: 56 },
    { name: 'Paula', age: 12 },
    { name: 'Margarida', age: 22 }
]

const brandNewArray = students.map((student) => {

    const newStudent = {
        name: student.name + ' Oliveira Ramos',
        age: student.age - 7
    }

    return newStudent
}
)

console.log(brandNewArray)