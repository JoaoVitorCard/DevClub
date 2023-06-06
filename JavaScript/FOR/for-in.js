/*
    PROPRIEDADES DE REPETIÇÃO - FOR IN
*/

const profile = {
    name: 'João Vitor',
    age: '21',
    height: '1,73'
}

for(let property in profile){
    console.log(`${property}: ${profile[property]}`)
}