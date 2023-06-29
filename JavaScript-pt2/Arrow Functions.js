/* 
  Arrow Functions

  Function pardrão => function () {}
  Arrow function => () => {}

  Não escrevemos "function".
  Além disso, usamos o sinal "=>" para cria-lá.
  O que lembra uma flecha, fazendo jus ao nome "Arrow Functions".
*/

function sayMyName(name) {
  return "Seu nome é " + name
}

const sayMyName2 = name => "Seu nome é " + name

console.log(sayMyName("João Vitor"))
console.log(sayMyName2("João Vitor"))