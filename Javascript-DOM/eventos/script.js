/* 
  Eventos
*/

const element = document.querySelector("#main-input")
const paragraph = document.querySelector("#new-paragraph")

function clickInButton() {
  paragraph.innerHTML = "<p>Olá </p>" + element.value
}

function writeInTheInput() {
  console.log(element.value)
}