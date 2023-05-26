//Arrays - podem ser usados para armazenar mais de uma informação em uma variável e essa informação não ser perdida. Vários tipos de variáveis podem ser alocados em um único array

//Como criar um array

let arr = ['Stephany', 23 , 1.56, true]

console.log(arr)

//acessando elementos do array
console.log('Nome do usuário:', arr[0], '\n idade do usuário:', arr[1], '\n altura do usuário:', arr[2], ' \n usuário estuda?', arr[3])

//obtendo tamanho do array
console.log('Tamanho do array:', arr.length)

//percorrendo arrays
for(let i = 0; i < arr.length; i++){
    console.log(arr[i])
}

//para cada elemento de fora do array, trazer o mesmo.
for(let elemento of arr){
    console.log(elemento)
}

//para cada elemento de dentro do array, trazer o índice do array.
for(let variavel in arr){
    console.log(variavel, arr[variavel])//retorna o índice e o elemento do array
}