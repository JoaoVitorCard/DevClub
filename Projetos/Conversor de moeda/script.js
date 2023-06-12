const convertButton = document.querySelector(".submit-button")
const currencyValue = document.querySelector(".converted-value")


function convertValue() {
  const valueToConvert = currencyValue.value
  const dolarToday = 4.86

  const valueConverted = valueToConvert / dolarToday

  console.log(valueConverted.toFixed(2))
}

convertButton.addEventListener("click", convertValue)