// [ ] Faça um programa que gere um número aleatório entre 1 e 10, esse número é o número 'ganhador'. Então ele também irá gerar um número aleatório entre 1 e 10, e verifica se a pessoa ganhou ou não. Em caso de ter ganhado, mostra o prêmio, se não ganhou, mostra outra mensagem.

const giftNumber = Math.floor(Math.random() * (10 - 1) + 1)
const numberPlayed = Math.floor(Math.random() * (10 - 1) + 1)

if(giftNumber === numberPlayed){
    console.log('Parabéns, você foi premiado!')
} else{
    console.log('Infelizmente você não conseguiu, tende de novo.')
}