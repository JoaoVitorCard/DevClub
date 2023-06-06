// querySelectorAll -> Trás todos os elementos que encontrar.

const element = document.querySelector("#main-input")

element.placeholder = "Agora é esse texto aqui"
console.log(element.placeholder)

function execute() {
  alert("Seu nome é: " + element.value)
}