//Laços numéricos FOR

const input = require('readline-sync')

/*
//problema
const nota1 = Number(input.question('Informe a nota 1: '))
const nota2 = Number(input.question('Informe a nota 2: '))
const nota3 = Number(input.question('Informe a nota 3: '))

let media = (nota1 + nota2 + nota3) / 3
console.log('A media do aluno foi ', media)*/

//acumulador

/*let acumulador = 1

acumulador = acumulador + 3

console.log(acumulador)

//estrutura for

for(let n = 0; n < 3; n++){
    console.log('Repetição', n)
}

for(let n = 10; n <= 12; n++){
    console.log('Repetição', n)
}

for(let n = 12; n > 8; n--){
    console.log('Repetição', n)
}

console.clear()*/
//Resolução do problema inicial

let nota
let soma = 0


for(let i = 1; i <= 3; i++){
    nota = Number(input.question(`Informe a nota ${i} do aluno: `))
    //Template string pode ser usado para retornar valor de variável em saída com string

    soma = soma + nota
}
console.log(`A média do aluno é ${soma/3}.`)

