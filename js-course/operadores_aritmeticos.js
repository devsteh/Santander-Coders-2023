//Operadores aritméticos

//Nomes de variáveis podem ser usadas o Camel Case

let primeiroNumero = 20
let segundoNumero = 2

//Operadores básicos
console.log("Soma =", primeiroNumero + segundoNumero)
console.log("Subtração =", primeiroNumero - segundoNumero)
console.log("Multiplicação =", primeiroNumero * segundoNumero)
console.log("Divisão =", primeiroNumero / segundoNumero)
console.log("Exponenciação =", primeiroNumero ** segundoNumero)
console.log("Resto da Divisão =", primeiroNumero % segundoNumero)

/*Precedência de operadores
Radiciação e exponenciação
Multiplicação e divisão
Soma e subtração*/

console.log(3 + 7 * 3)
console.log((10 + 10 + 8) / 3) //para cálculos em que exiga soma/subtração primeiro, colocar a operação a vir primeiro em parênteses

//Biblioteca Matemática do JS - Math

console.log(Math.PI)
console.log(Math.sqrt(144))