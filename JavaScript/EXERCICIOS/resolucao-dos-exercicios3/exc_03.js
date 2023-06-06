// [ ] Escreva um programa onde, você chame uma função, e ela diga a hora exata!

function hora(){
    var data = new Date()

    var hrs = data.getHours() + ':' + data.getMinutes()

    
    return hrs
}

console.log(`Agora são: ${hora()}`)

// OU

console.log(new Date(). toLocaleTimeString('pt-BR'))