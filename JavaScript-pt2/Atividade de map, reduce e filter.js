/* 
  Adicionar 10% de valor de mercado para todas as companhias -> MAP
  Filtrar somente companhias fundadas abaixo de 1990 -> FILTER
  Somar o valor de mercado das restantes -> REDUCE
*/

const companies = [
  { name: "Samsung", marketValue: 50, CEO: "Kim Hyun Suk", foundedOn: 1938 },
  { name: "Microsoft", marketValue: 415, CEO: "Satya Nadella", foundedOn: 1975 },
  { name: "Intel", marketValue: 117, CEO: "Brian Krzanich", foundedOn: 1968 },
  { name: "Facebook", marketValue: 383, CEO: "Mark Zuckerberg", foundedOn: 2004 },
  { name: "Spotify", marketValue: 30, CEO: "Daniel Ek", foundedOn: 2006 },
  { name: "Apple", marketValue: 845, CEO: "Tim Cook", foundedOn: 1976 }
]

const marketInflation = companies.map(value => {
  value.marketValue = value.marketValue + (value.marketValue * 0.1)
  return value
}).filter(companies => companies.foundedOn < 1990).reduce((acc, value) => {
  return acc + value.marketValue
}, 0)

console.log("O valor total das companhias desejada para compra é de $ " + marketInflation + " Bilhões")