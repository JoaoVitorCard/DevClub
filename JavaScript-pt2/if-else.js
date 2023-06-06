/* 
  Controlador de fluxo
    - if (se)
    - else (se não)

  Operadores de comparação

  === - (Igual à)
  > - (Maior que)
  < - (Menor que)                               O retorno dessas comparações sempre será um booleano - true ou false
  >= - (Maior ou igual à)
  <= - (Menor ou igual à)
  ! - (Diferente (Negação) ex: !sim = não) 
*/

const studentGrade = 6
const media = 7

if (studentGrade >= media) {
  console.log("O aluno foi aprovado.")
} else {
  console.log("O aluno foi reprovado.")
}



studentGrade > media ? console.log("O aluno foi aprovado.") : console.log("O aluno foi reprovado.")