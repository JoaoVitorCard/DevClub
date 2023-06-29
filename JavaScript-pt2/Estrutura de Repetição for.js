/* 
  Estrutura de repetição - FOR

  - FOR

    1) INICIALIZAÇÃO - Criar uma variável e colocar um valor inicial para ela.
    2) CONDIÇÃO - Enquanto for true, o laço continuará iterando.
                  Ele irá verificar antes de cada iteração.
    3) EXPRESSÃO FINAL - O que irá ocorrer a cada vez que o nosso laço der uma volta.

    for ([inicialização]; [condição]; [expressão final]) {
      Seu código aqui.
    }
*/

const arr = ["João Vitor", "Maria", "Ana", "Julio", "Clara", "Carlos", "Mel", "Gabriele", "Geovana", "Jisele", "Jonas", "Hugo", "Kamily", "Carla",]

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
}