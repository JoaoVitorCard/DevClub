const convertButton = document.querySelector(".submit-button")
const currencyValue = document.querySelector(".converted-value")
const valueChoosed1 = document.querySelector("#result-value1")
const valueChoosed2 = document.querySelector("#result-value2")
const chosenCurrencyToConvert = document.querySelector("#convertValues")
const convertedImg = document.querySelector("#converted-img")
const convertedParagraph = document.querySelector("#converterd-paragraph")

const convertValue = async () => {
  const valueToConvert = currencyValue.value
  const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())
  const dolarToday = data.USDBRL.high
  const euroToday = data.EURBRL.high
  const bitCoinToday = data.BTCBRL.high
  let valueConverted
  console.log(data)

  if (chosenCurrencyToConvert.value === "Dolar") {
    valueConverted = valueToConvert / dolarToday

    valueChoosed1.innerHTML = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(valueToConvert)

    valueChoosed2.innerHTML = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(valueConverted)
  } else if (chosenCurrencyToConvert.value === "Euro") {
    valueConverted = valueToConvert / euroToday

    valueChoosed1.innerHTML = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(valueToConvert)

    valueChoosed2.innerHTML = new Intl.NumberFormat('en-UK', {
      style: 'currency',
      currency: 'EUR'
    }).format(valueConverted)
  } else if (chosenCurrencyToConvert.value === "Bitcoin") {
    valueConverted = valueToConvert / bitCoinToday

    valueChoosed1.innerHTML = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(valueToConvert)

    valueChoosed2.innerHTML = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'BTC'
    }).format(valueConverted)
  }
}

function changeCurrency() {
  if (chosenCurrencyToConvert.value === "Euro") {
    convertedImg.src = "./assets/euro.svg"
    convertedParagraph.innerHTML = "Euro"
    valueChoosed2.innerHTML = "€ 0.00"
  } if (chosenCurrencyToConvert.value === "Bitcoin") {
    convertedImg.src = "./assets/bitcoin.png"
    convertedParagraph.innerHTML = "Bitcoin"
    valueChoosed2.innerHTML = "0.00 BTC"
  }
}

chosenCurrencyToConvert.addEventListener("change", changeCurrency)
convertButton.addEventListener('click', convertValue)
