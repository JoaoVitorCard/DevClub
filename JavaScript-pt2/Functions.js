/* 
  Functions

  É um trecho de código que só será executado quando for chamado.
  Funções podem receber argumentos ou parâmetros.
  Função void(vazia), não retorna nada.
  Função return, retorna um valor para quem chamou a função.
*/

myName()
function myName(name) {
  console.log(`O nome é: ${name}`)
}

myName("João Vitor")

function som(value1, value2) { // void pois não possui um return
  console.log(`A soma entre ${value1} e ${value2} é igual a: ${value1 + value2}`)
}

som(2, 2)

function sub(value1, value2) { // Possui return mas não retorna o resultado da operação e sim o console.log
  return console.log(`A subtração entre ${value1} e ${value2} é igual a: ${value1 - value2}`)
}

// function sub(value1, value2) { // Essa é a maneira de retornar o resultado 
//   const result = value1 - value2
//   return result
// }

sub(2, 2)

const resultVoid = som(2, 2)
const resultReturn = sub(2, 2)

console.log(resultVoid)
console.log(resultReturn)