// FOR EACH

// Serve para iterar (percorrer) por arrays, e ele é uma function, aceita até 3 argumentos. EX de como montar um for each
// nomeDoArray.forEach(nomeQualquer (nome de um item), mostra o index(número de cada posição), array(mostra o array completo))()=>{}

// EX prático:

const students = [
    { name: "João", age: 21 },
    { name: "Alura", age: 31 },
    { name: "Marcia", age: 20 },
    { name: "Josivaldo", age: 52 },
    { name: "Rodolfo", age: 21 },
    { name: "Marcos", age: 46 },
    { name: "Lola", age: 18 },
    { name: "Davi", age: 25 },
];

let allStudentsAge = 0

students.forEach((student, index, array) => {
    allStudentsAge += student.age
})

const avarageAge = allStudentsAge / students.length

console.log(`A idade média dos estudantes é ${avarageAge.toFixed(0)}`)