/* 
  IF (SE)
  ELSE (SE NÃO)
  ELSE IF
*/

const temperature = 37

if (temperature === 36) {
  console.log("Você está com sua temperatura normal")
} else if (temperature > 36) {
  console.log("Sua temperatura está alta, você está com febre!")
} else {
  console.log("Você está com hipotermia!")
}