// [ ] Escreva um programa onde, você chame uma função enviando um número (aceitar somente valores entre 1 e 10) e escrever a tabuada de 1 a 10 do valor lido.

/*function table(x){
    num = 11
    for(i = 0; i < num; i++){
        console.log(x + " x " + i + " = " + x*i)
    }
}

table(12)*/

// OU

function tabuada(number){
    if(number > 10 || number < 1){
        console.log('Aceitamos somente números entre 1 e 10')
        return 
    }

    for(let i = 1; i <= 10; i++){
        console.log(`${number} x ${i} = ${i * number}`)
    }
}

tabuada(5)

// OU

/*const tabuada = (number) => {
    if(number < 0 || number > 10){
        console.log('Aceitamos SOMENTE números entre 1 e 10')
        return
    }

    for(let i = 1; i <= 10; i++){
        console.log(`${number} x ${i} = ${number * i}`)
    }
}

tabuada(10)*/