/*[ ] Crie 5 objetos nesse 
formato
{ nome: "" 
idade:"" 
sexo:"" 
profissão: "" 
nacionalidade:"" 
}
Ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo ,a pessoa deve ser maior de idade e brasileira para ser aprovada.
*/

/*const firstPerson = { nome: "João",  age: "21",  gender: "Male",  ocupation: "Pesador",  nationality: "Brasil"};
const secondPerson = { nome: "Anna",  age: "12",  gender: "Female",  ocupation: "Student",  nationality: "Brasil"};
const thirdPerson = { nome: "Parlla",  age: "22",  gender: "Female",  ocupation: "Unemployed",  nationality: "Brasil"};
const fourthPerson = { nome: "Robertson",  age: "14",  gender: "Male",  ocupation: "Student",  nationality: "United States of America"};
const fifthPerson = { nome: "Julie",  age: "19",  gender: "Female",  ocupation: "Developer",  nationality: "Canada"};

if (firstPerson.age >= "18") {
  console.log("Parabéns!! Você foi aprovado(a) no nosso sistema.");
} else if (fifthPerson.nationality === "Brasil") {
  console.log("Parabéns!! Você foi aprovado(a) no nosso sistema.");
} else {
  console.log(
    "Infelizmente você não preencheu todos nossos requisitos e seu processo foi negado e encerrado."
  );
}

if (secondPerson.age >= "18") {
  console.log("Parabéns!! Você foi aprovado(a) no nosso sistema.");
} else if (fifthPerson.nationality === "Brasil") {
  console.log("Parabéns!! Você foi aprovado(a) no nosso sistema.");
} else {
  console.log(
    "Infelizmente você não preencheu todos nossos requisitos e seu processo foi negado e encerrado."
  );
}

if (thirdPerson.age >= "18") {
  console.log("Parabéns!! Você foi aprovado(a) no nosso sistema.");
} else if (fifthPerson.nationality === "Brasil") {
  console.log("Parabéns!! Você foi aprovado(a) no nosso sistema.");
} else {
  console.log(
    "Infelizmente você não preencheu todos nossos requisitos e seu processo foi negado e encerrado."
  );
}

if (fourthPerson.age >= "18") {
  console.log("Parabéns!! Você foi aprovado(a) no nosso sistema.");
} else if (fifthPerson.nationality === "Brasil") {
  console.log("Parabéns!! Você foi aprovado(a) no nosso sistema.");
} else {
  console.log(
    "Infelizmente você não preencheu todos nossos requisitos e seu processo foi negado e encerrado."
  );
}

if (fifthPerson.age >= "18") {
  console.log("Parabéns!! Você foi aprovado(a) no nosso sistema.");
} else if (fifthPerson.nationality === "Brasil") {
  console.log("Parabéns!! Você foi aprovado(a) no nosso sistema.");
} else {
  console.log(
    "Infelizmente você não preencheu todos nossos requisitos e seu processo foi negado e encerrado."
  );
}*/

// OU

const personOne = { nome: "João",  age: "21",  gender: "Male",  ocupation: "Pesador",  nationality: "Brasileiro"};
const personTwo = { nome: "Anna",  age: "12",  gender: "Female",  ocupation: "Student",  nationality: "Brasileira"};
const personThree = { nome: "Parlla",  age: "22",  gender: "Female",  ocupation: "Unemployed",  nationality: "Brasileira"};
const personFour = { nome: "Robertson",  age: "14",  gender: "Male",  ocupation: "Student",  nationality: "United States of America"};
const personFive = { nome: "Julie",  age: "19",  gender: "Female",  ocupation: "Developer",  nationality: "Canada"};

if(personOne.age >= 18 && (personOne.nationality === "Brasileiro" || personOne.nationality === "Brasileira")){
    console.log("Você passou no processo")
} else {
    console.log("Você não passou no processo")
}

if(personTwo.age >= 18 && (personTwo.nationality === "Brasileiro" || personTwo.nationality === "Brasileira")){
    console.log("Você passou no processo")
} else {
    console.log("Você não passou no processo")
}

if(personThree.age >= 18 && (personThree.nationality === "Brasileiro" || personThree.nationality === "Brasileira")){
    console.log("Você passou no processo")
} else {
    console.log("Você não passou no processo")
}

if(personFour.age >= 18 && (personFour.nationality === "Brasileiro" || personFour.nationality === "Brasileira")){
    console.log("Você passou no processo")
} else {
    console.log("Você não passou no processo")
}

if(personFive.age >= 18 && (personFive.nationality === "Brasileiro" || personFive.nationality === "Brasileira")){
    console.log("Você passou no processo")
} else {
    console.log("Você não passou no processo")
}