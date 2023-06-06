// [ ] Faça um programa onde os jurados vão dar a explicação para cada nota dada. São permitidas notas de 0 a 10. Cada nota deve conter uma mensagem diferente.

const score = 10

switch (score) {
    case 0:
        console.log('Você precisa se esforçar mais.')
        break;

        case 1:
        console.log('Você está um pouco melhor que o pior, se esforce mais!')
        break;
        
        case 2:
        console.log('Você não está conseguindo explorar seu potencial.')
        break;

        case 3:
        console.log('Você pode melhorar mais.')
        break;

        case 4:
        console.log('Você está quase na média, mas não se contente com pouco.')
        break;

        case 5:
        console.log('Você não conseguiu mostrar nada de demais.')
        break;

        case 6:
        console.log('Você pode mais com certeza!')
        break;

        case 7:
        console.log('Você está mandando bem, continue se esforçando.')
        break;

        case 8:
        console.log('ocê está quade conseguindo um 10, não desanime a essa altura do campeonato!')
        break;

        case 9:
        console.log('Você precisa se esforçar mais se quiser receber um 10!')
        break;

        case 10:
        console.log('Varabéns! Você atingiu a perfeição.')
        break;
}

// OU

const note = [0, 1, 2, 3, 4, 5, 6, 7, 9, 10]

const judge1 = `Sua nota foi ${note[0]}, você precisa se esforçar mais.`
const judge2 = `Sua nota foi ${note[1]}, você está um pouco melhor que o pior, se esforce mais!`
const judge3 = `Sua nota foi ${note[2]}, você não está conseguindo explorar seu potencial.`
const judge4 = `Sua nota foi ${note[3]}, você pode melhorar mais.`
const judge5 = `Sua nota foi ${note[4]}, você está quase na média, mas não se contente com pouco.`
const judge6 = `Sua nota foi ${note[5]}, você não conseguiu mostrar nada de demais.`
const judge7 = `Sua nota foi ${note[6]}, você pode mais com certeza!`
const judge8 = `Sua nota foi ${note[7]}, você está mandando bem, continue se esforçando.`
const judge9 = `Sua nota foi ${note[8]}, você está quade conseguindo um 10, não desanime a essa altura do campeonato!`
const judge10 = `Sua nota foi ${note[9]}, parabéns! Você atingiu a perfeição.`

console.log(judge1)
console.log(judge2)
console.log(judge3)
console.log(judge4)
console.log(judge5)
console.log(judge6)
console.log(judge7)
console.log(judge8)
console.log(judge9)
console.log(judge10)