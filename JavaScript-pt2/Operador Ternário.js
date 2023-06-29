/* 
  Operador ternário

  Deve ser utilizado apenas quando a linha de código for pequena como o exemplo abaixo.

  ? if (SE)
  : else (SE NÃO)
  && (SE) - Posso utilizar apenas quando tiver um simples IF.
*/

const salary = 10000

if (salary <= 3000) {
  console.log("O colaborador é Júnior")
} else {
  console.log("O colaborador é Pleno/Sênior")
}

/*IF*/ salary <= 3000 && console.log("O colaborador é Júnior")

/*IF ELSE*/ salary <= 3000 ? console.log("O colaborador é Júnior") : console.log("O colaborador é Pleno/Sênior")

/*ELSE IF*/ salary <= 3000 ? console.log("O colaborador é Júnior") : salary > 3000 && salary <= 8000 ? console.log("O colaborador é Pleno") : console.log("O colaborador é Sênior")

