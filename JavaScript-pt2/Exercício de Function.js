/* 
  Calcula desconto:
  Todos os produtos acima de R$ 30,00 tem desconto de 10%
*/

const cart = [10, 244, 99, 2, 20, 33, 250]

let totalPrice = 0

cart.forEach(value => {
  totalPrice += value
})

function lessThanThirty() {
  let totalValue = 0
  cart.forEach(total => {
    if (total < 30) {
      totalValue += total
    }
  })
  return totalValue
}

function discount(value) {
  return value = value - (value * 0.1)
}

function discountPrices() {
  let totalValue = 0
  cart.forEach(total => {
    if (total > 30) {
      totalValue += discount(total)
    }
  })
  return totalValue
}
const result = discountPrices() + lessThanThirty()


console.log("Valor total: " + totalPrice + "\nDesconto: " + (totalPrice - result).toFixed(2) + "\nValor a ser pago:  " + result)