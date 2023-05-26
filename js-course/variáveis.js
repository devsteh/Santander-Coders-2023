/*Variáveis, o que são???
- Um pedaço de uma informação atribuida a algum contexto que signifique o mesmo. Será chamada pelo nome no qual o que a informação foi atribuida*/

//let quer dizer que uma variável será criada, var também é utilizada, porém é mais antiga, sendo recomendada let mesmo
let idade = 23

console.log("idade do user = " + idade)

//Tipos de variáveis

idade = 24 //number
let numero = 30 //number
let altura = 1.56 //number, mesmo sendo float
let nome = 'Stephany' //string //Nomes/palavras sempre precisam ser colocado dentro de aspas, sendo simples ou duplas
let estudando = true //boolean

//typeof retorna em console o tipo da variável
console.log(numero, typeof numero)
console.log(nome, typeof nome)
console.log(altura, typeof altura)
console.log(estudando, typeof estudando)

if(estudando == true){
    console.log(nome + " está estudando")
}else{
    console.log(nome + " não está estudando" )
}

//variável indefinida
let outra
console.log(outra)

//variável nula
let nula = null
console.log(nula)

//não pode ter seu valor alterado
const constante = 100
console.log(constante)
