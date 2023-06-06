/*
    OBJECT

    propriedade : valor

    marca: Samsung
    cor: Preta
    Tamanho: 70"

    nome: João Vitor
    idade: 21
    altura: 1.7m

*/

const person = {
    name: "João Vitor", // Sempre que for colocar mais de uma propriedade dentro de uma variável, utiliza-se a vírgula para separar uma da outra.
    age: "21",
    sex: "male",
    heigth: "1.7",
    address: {
        street: "Mogno",
        number: "Qd:29 Lt:14",
        country: "Brasil"
    }                   // Quando for a útilma propriedade, não precisa colocar a vírgula no final.
}

console.log(person.address.street) // Para navegar dentro dos objetos sempre utilizamos o ponto final, sempre obedecendo a hierarquia.