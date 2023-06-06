/*
    ESTRUTURAS DE REPETIÇÃO - FOR

    for(inicia uma variável; até quando ela vai se repetir; o que vai acontecer a cada ciclo)
*/

/*for(let i = 0; i < 10; i++) {
    console.log(i)
}*/

const students = ['Maria', 'João', 'Eduarda', 'Marcos', 'Edilson']

for(let i = 0; i < students.length; i++) {
    console.log(`${students[i]} está presente na sala`)
}