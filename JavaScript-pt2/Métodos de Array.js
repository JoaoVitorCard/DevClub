/* 
  ARRAY'S

    - push    -> Adiciona mais um item ao array.
    - length  -> Mostra o tamanho do array.
    - sort    -> Organiza o array.
    - delete  -> Deleta o item de uma posição do array.
    - every   -> Esse método testa se todos os elementos do array passam em uma condição. Passamos uma função que retorna true ou false. Se todos os itens retornam true significa que todos os elementos passaram no teste e a função retornará true. Se algum item não estiver de acordo, ele retornará false.
    - some    -> O .some() faz algo parecido com o .every(). A diferença é que o .every() só retorna true se todos passarem no teste. O .some() retorna true se pelo menos um elemento do Array passar no teste.
    - fill    -> Preenche posições no array como desejarmos.
    - find    -> Usamos esse método quando queremos encontrar algum elemento dentro do Array. Para isso passamos uma função que irá retornar true ou false. O primeiro true que for retornado irá finalizar a função e retornar o elemento em que testamos.
    - findIndex -> Faz o mesmo que o .find(), mas retorna o índice do elemento encontrado ao invés de retornar o próprio elemento. Quando o elemento não for encontrado, o número -1 será retornado.
    - concat()  -> Esse método é usado para juntar dois arrays. Ele não altera os arrays originais, mas cria um novo array com a soma dos dois arrays escolhidos. 

    - includes -> O método includes() determina se um array.
    - join     -> O método join() junta todos os elementos de um array.

    - slice(fatiar) -> O método slice() retorna um novo array, apenas com as informações escolhidas.
    - splice  -> Esse método remove ou adiciona elementos em um array em uma posição específica.
    - pop     -> Remove o último elemento do array.
    - shift   -> Remove o primeiro elemento do array.

*/

const myArray = [4, 1, 3, 2]
myArray.push(5)
console.log(myArray)
console.log(myArray.length)
console.log(myArray.sort())
delete myArray[2]
console.log(myArray)
myArray.fill('Abacate', 2, 4)
console.log(myArray)

const users = [
  { name: 'Nico', credit: 600 },
  { name: 'Maria', credit: 900 },
  { name: 'Joana', credit: 300 },
  { name: 'Vanessa', credit: 200 }
]

console.log(users.every(value => value.credit > 100))
console.log(users.some(value => value.credit > 800))
console.log(users.find(people => people.name === 'Joana'))
console.log(users.findIndex(person => person.credit === 900))

const array1 = ['a', 'b', 'c', 'd',]
const array2 = ['e', 'f', 'g', 'h',]
const arrayNumber1 = [1, 2, 3, 4]
const arrayNumber2 = [5, 6, 7, 8]

const arrayConcat = array1.concat(array2)
const arrayNumbersConcat = arrayNumber1.concat(arrayNumber2)

console.log(arrayConcat)
console.log(arrayNumbersConcat)

const elements = ['Fire', 'Air', 'Water']
console.log(elements)
console.log(elements.join(', '))
elements.pop()
console.log(elements)
elements.shift()
console.log(elements)

const names = ['João', 'Maria', 'Fernando', 'Pedro', 'Michele']
const newArrayOfNames = names.slice(1, 3)
console.log(newArrayOfNames)
names.splice(1, 1, 'Carlos')
console.log(names)