/* [ ] A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e número de filhos. A prefeitura deseja saber:
- média do salário da população;
- média do número de filhos;
- maior salário;
- O final da leitura de dados se dará com a entrada de um salário negativo.
- Faça isso usando uma função! */

/*const people = [{
    salary: 1400,
    numberOfChildren: 2
}, {
    salary: 2900,
    numberOfChildren: 1
}, {
    salary: 1750,
    numberOfChildren: 4
}, {
    salary: 9500,
    numberOfChildren: 0
}, {
    salary: 1230,
    numberOfChildren: 3
}, {
    salary: -1,
    numberOfChildren: 0
}]

function findAvarageSalaryAndHighestSalary(peopleInformation){

    let avarageSalary = 0
    let avarageChildren = 0
    let highestSalary = 0

    for(i = 0; i < peopleInformation.length; i++){
        
        const salary = peopleInformation[i].salary
        const children = peopleInformation[i].numberOfChildren

        if(salary > highestSalary) highestSalary = salary

        if(salary < 0){
            console.log(`Média de salario é: R$${(avarageSalary / i).toFixed(0)}`)
            console.log(`Média de filhos é: ${(avarageChildren / i).toFixed(0)}`)
            console.log(`O maior salário é: ${highestSalary}`)
            break
        } else {
            avarageSalary = avarageSalary + salary;
            avarageChildren += children
        }
    }
}

findAvarageSalaryAndHighestSalary(people)*/

// OU

const people = [{
    salary: 1400,
    numberOfChildren: 2
}, {
    salary: 2900,
    numberOfChildren: 1
}, {
    salary: 1750,
    numberOfChildren: 4
}, {
    salary: 9500,
    numberOfChildren: 0
}, {
    salary: 1230,
    numberOfChildren: 3
}, {
    salary: -1,
    numberOfChildren: 0
}]

function findAvarageSalaryAndHighestSalary(peopleInformation) {

    let i = 0
    let avarageSalary = 0
    let avarageChildren = 0
    let highestSalary = 0

    while(peopleInformation[i].salary > 0) {
        avarageSalary = avarageSalary + peopleInformation[i].salary
        avarageChildren += peopleInformation[i].numberOfChildren
        peopleInformation[i].salary > highestSalary ? highestSalary = peopleInformation[i].salary : highestSalary = highestSalary
        i++
    }

    console.log(`Média de salário R$${(avarageSalary / i).toFixed(0)}`)
    console.log(`Média de filhos ${(avarageChildren / i).toFixed(0)}`)
    console.log(`Salário mais alto ${highestSalary}`)
}

findAvarageSalaryAndHighestSalary(people)