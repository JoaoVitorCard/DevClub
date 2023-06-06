// [ ] Escreva um programa onde, você chame uma função, e ela diga que ano estamos!

function anoAtual(){
    var data = new Date()

    var ano = data.getFullYear()
    return ano
}

console.log(`Estamos no ano de: ${anoAtual()}`)

// OU

console.log(new Date().toLocaleDateString('pt-BR'))

// OU

console.log(new Date().getFullYear('pt-BR'))