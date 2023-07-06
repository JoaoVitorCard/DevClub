/* 
  Subtrair 10% de valor de mercado para todas as companhias -> MAP
  Filtrar somente companhias fundadas depois de 1980 -> FILTER
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

const newCompaniesValue = companies.map(value => {
  value.marketValue = value.marketValue - (value.marketValue * 0.1)
  return value
}).filter(companies => companies.foundedOn > 1980).reduce((acc, companieValue) => {
  return acc + companieValue.marketValue
}, 0)
console.log("O valor total das companhias desejada para compra é de $ " + newCompaniesValue + " Bilhões")