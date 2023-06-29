/*
  setTimeout & setInterval

  setTimeout  -> Executa uma vez
  setInterval -> Executa infinitas vezes
    clearInterval -> Vai pausar o setInterval
*/

/* setTimeout */
/* Essas são as formas mais comuns de se escrever o setTimeout */

setTimout(() => {
  // Executa o que estiver aqui
}, timeout)

setTimout(function () {
  // Executa o que estiver aqui
}, timeout)


function myFunction() {
  // Executa o que estiver aqui
}
setTimeout(myFunction, timeout)

/* ----------------------------------------------------------- */

setTimeout(() => {
  alert("Executei")
}, 1000 /* O tempo sempre será definido em ms(milisegundo), 1 segundo é igual á 1000 ms */)

/* ----------------------------------------------------------- */

/* setInterval */
/* Essas são as formas mais comuns de se escrever o setInterval */

setInterval(() => {
  // Executa o que estiver aqui
}, interval)

setInterval(function () {
  // Executa o que estiver aqui
}, interval)

function myFunction2() {
  // Executa o que estiver aqui
}
setInterval(myFunction2, interval)

/* ----------------------------------------------------------- */