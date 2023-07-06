/* 
  FILTER
    - Cria um novo array, a partir do array percorrido ( array original )
    - Cria um novo array APENAS com os elementos filtrados
    - Aceita 3 parâmetros
      - Item do array
      - Index
      - Array completo

      return true -> Item atual passa para o novo array
      return false -> Item atual NÃO passa para o novo array
*/

const list = [20, 3, 234, 12, 17, 541, 6, 87, 275, 1000]
const newList = list.filter(value => value > 100)

console.log(newList)

/* --------------------------------------------------- */

const companies = [
  { name: "Samsung", marketValue: 50, CEO: "Kim Hyun Suk", foundedOn: 1938 },
  { name: "Microsoft", marketValue: 415, CEO: "Satya Nadella", foundedOn: 1975 },
  { name: "Facebook", marketValue: 383, CEO: "Mark Zuckerberg", foundedOn: 2004 },
  { name: "Intel", marketValue: 117, CEO: "Brian Krzanich", foundedOn: 1968 },
  { name: "Spotify", marketValue: 30, CEO: "Daniel Ek", foundedOn: 2006 },
  { name: "Apple", marketValue: 845, CEO: "Tim Cook", foundedOn: 1976 }
]

const listOfCompanies = companies.filter(value => value.marketValue < 200 && value.foundedOn > 1990)

console.log(listOfCompanies)