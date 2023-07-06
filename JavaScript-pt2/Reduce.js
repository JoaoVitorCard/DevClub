/* 
  REDUCE
    - RETORNA um valor ( pode ser um novo array, um objeto, string, number, etc. )
    - ACEITA 4 parâmetros
      - Acumulador
      - Valor atual
      - Index
      - Array completo
*/

const list = [1, 2, 3, 4, 5, 6, 7]
const som = list.reduce((acc, valorAtual) => {
  return acc + valorAtual
})
console.log(som)
/* ---------------------------------------------------------------------------- */
const companies = [
  { name: "Samsung", marketValue: 50, CEO: "Kim Hyun Suk", foundedOn: 1938 },
  { name: "Microsoft", marketValue: 415, CEO: "Satya Nadella", foundedOn: 1975 },
  { name: "Facebook", marketValue: 383, CEO: "Mark Zuckerberg", foundedOn: 2004 },
  { name: "Intel", marketValue: 117, CEO: "Brian Krzanich", foundedOn: 1968 },
  { name: "Spotify", marketValue: 30, CEO: "Daniel Ek", foundedOn: 2006 },
  { name: "Apple", marketValue: 845, CEO: "Tim Cook", foundedOn: 1976 }
]

const marketValue = companies.reduce((acc, valorAtual) => {
  return acc + valorAtual.marketValue
}, 0)

console.log("O valor de mercado de todas as companias é de USD " + marketValue + " Bilhões")
/* ---------------------------------------------------------------------------- */

const cart = [
  { productName: "Abóbora", pricePerKg: 5, kg: 1 },
  { productName: "Pepino", pricePerKg: 3.55, kg: 1.3 },
  { productName: "Limão", pricePerKg: 1.2, kg: 2 },
  { productName: "Abacate", pricePerKg: 5.4, kg: 1.67 },
  { productName: "Morango", pricePerKg: 11.9, kg: 3 },
]

const totalValue = cart.reduce((acc, totalValue) => {
  return acc + (totalValue.pricePerKg * totalValue.kg)
}, 0)

console.log("O valor total da compra foi de R$ " + totalValue.toFixed(2))