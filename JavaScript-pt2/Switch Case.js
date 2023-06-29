/* 
  Switch Case - Controlador de Fluxo
*/

const temperature = 40

switch (temperature) {
  case 10:
    console.log("Está frio.")
    break;
  case 20:
    console.log("Está com ar fresco.")
    break;
  case 30:
    console.log("Está quente.")
    break;
  case 40:
    console.log("Está muito quente.")
    break;
  default:
    console.log("Não consigo dizer.")
    break;
}