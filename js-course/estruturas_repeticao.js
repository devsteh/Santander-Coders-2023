//Laços condicionais

const input = require('readline-sync')

const numeroSorteado = 5

let numero = Number(input.question('Escolha um numero: '))//pergunta ao usuário, lê a entrada como texto(string). Pode ser convertida acrescentando o tipo da variável que é desejado que o sistema reconheça

console.log(numero, typeof numero)

//estrutura condicional simples
if(numero === numeroSorteado){
    console.log('Voce acertou!')
}else{
    console.log('Voce errou!')
}

console.clear()

//estrutura de loop, só será encerrada dado o resultado necessário
//é uma estrutura não controlada, pois não sabemos qual o seu limite.
while(numero !== numeroSorteado){
    console.log('Voce errou, tente novamente.')

    numero = Number(input.question('Escolha outro numero: '))
}

console.log('Parabens, Voce acertou!')