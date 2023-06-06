/*
    OPERADORES ARITMÉTICOS

    + -> Adição
    - -> Subtração
    * -> Multiplicação
    / -> Divisão
    % -> Resto de uma divisão
    ++ -> Incremento
    -- -> Descremento
    ** -> Exponenciação
*/

// + -> Adição

const number1 = 25
const number2 = 30

console.log(number1 + number2)

// - -> Subtração

const number3 = 25
const number4 = 30

console.log(number3 - number4)

// * -> Multiplicação

const number5 = 25
const number6 = 30

console.log(number5 * number6)

// "/" -> Divisão

const number7 = 25
const number8 = 30

console.log(number7 / number8)

// % -> Resto de uma divisão - Só é possível com números inteiros.

const number9 = 11
const number10 = 7

console.log(number9 % number10)

// ++ -> Incremento - Adiciona +1

let number11 = 11
number11++
number11++
number11++

console.log(number11) 

// OU

let number12 = 11

console.log(++number12) // se colocar o "++" depois da variável não vai funcionar. Tem que ser antes da variável

// -- -> Descremento - subtrai -1

let number13 = 11
number13--
number13--
number13--

console.log(number13) 

// OU

let number14 = 11

console.log(--number14) // se colocar o "--" depois da variável não vai funcionar. Tem que ser antes da variável

// ** -> Exponenciação

const number15 = 11

console.log(number15 ** 3)