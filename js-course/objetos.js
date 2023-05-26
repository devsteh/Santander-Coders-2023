//Objetos - 

//como criar um objeto?

let pessoa = {
    nome: 'Stephany',
    idade: 23,
}

//para acesso dos itens(chaves) é um conceito bem mais intuitivo do que busca de índice no array
console.log(pessoa)

console.log(pessoa.nome)
console.log(pessoa.idade)

//adicionando uma chave
pessoa.altura = 1.56
console.log(pessoa)

//removendo uma chave
delete pessoa.altura
console.log(pessoa)

//percorrendo objetos

for (let chave in pessoa){
    console.log(chave)
}

