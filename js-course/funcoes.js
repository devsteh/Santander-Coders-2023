//Funções, como criar uma?? - Podemos atribuir uma definição a ela e depois chamá-la para executar o que foi direcionado a ela

//Definindo uma função
function saudacao(nome, curso='programação'){ //o parâmetro padrão será adicionado caso nenhum parâmetro seja passado direto na função
    console.log(`Olá ${nome}, bem-vindo! ao curso de ${curso}`)
}
 //chamando uma função - podendo ser quantas vezes quiser

//como enviar parâmetros para as funções 
saudacao('Stephany')

//retorno da função
//aqui é um exemplo de impressão da soma
function soma(numero1, numero2){
    console.log('Resultado da soma =', numero1 + numero2)
}

soma(15, 15)

//aqui é um exemplo de retorno da soma, não é uma boa prática colocar console.log dentro de uma função, ela precisa ser genérica
function soma(numero1, numero2){
    return numero1 + numero2
}

const resultado = soma(15, 16)
console.log(resultado/2)

console.clear()

//outro exemplo 
function maiorQue50(numero){
    if (numero > 50){
        return true
    }
    return false
}

