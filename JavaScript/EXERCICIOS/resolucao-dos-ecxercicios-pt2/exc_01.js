// [ ] Faça um programa que compare um número com 10 e imprime na tela "o número é maior, o número é menor o número é igual"

const firstNumber = 10

if(firstNumber < 10){
    console.log('O número é menor')
} else if(firstNumber > 10){
    console.log('O número é maior')
} else if(firstNumber === 10){
    console.log('O número é igual')
}

// OU

if(firstNumber < 10){
    console.log('O número é menor')
} else if(firstNumber > 10){
    console.log('O número é maior')
} else{
    console.log('O número é igual')
}