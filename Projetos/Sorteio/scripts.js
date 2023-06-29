const number1 = document.getElementById("number1")
const number2 = document.getElementById("number2")
const raffleButton = document.getElementById("raffle-button")
const resultParagraph = document.getElementById("result-paragraph")

function raffle() {
  const min = Math.ceil(number1.value)
  const max = Math.floor(number2.value)

  if (min > max) {
    alert("Digite os valores corretamente!")
  } else if (Number.isInteger(min) === false || Number.isInteger(max === false)) {
    alert("Digite um número inteiro!")
  } else {
    resultParagraph.innerHTML = "O valor sorteado é: " + Math.floor(Math.random() * (max - min + 1) + min)
  }
}

raffleButton.addEventListener("click", raffle)