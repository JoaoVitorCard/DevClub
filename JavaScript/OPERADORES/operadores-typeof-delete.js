/*
    OPERADORES TYPEOF E DELETE

    typeof = Mostra qual é o tipo de uma variável
    delete = Posso escolher o que eu não quero que apareça em um objeto
*/

const string = "Hi, I'm a string"
const number = 1266845632
const object = {
    name: 'João',
    age: '32',
    height: '1.89'
}
delete object.age

console.log(typeof string)
console.log(typeof number)
console.log(typeof object)
console.log(object)