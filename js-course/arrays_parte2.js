//Arrays - parte 2

//Métodos de arrays

const arr1 = [30, 12, 45, 34, 29]
let arr2 = []
//fatiamento: slice

console.log(arr1.slice(0,2))//é necessário atribuir um índice de início e um índice de final, retorna o número antes do setado do array

console.log(arr1.slice(2))//atribuído somente fim de índice

//adicionando elementos com push - adiciona sempre no fim do array
console.log('Antes de adicionar push', arr2)
arr2.push(10, 20, 30)
arr2.push(40)
console.log('Depois de adicionar push', arr2)

//adicionando elementos com unshift - adiciona sempre no início do array
arr2.unshift(5)
console.log('Depois de adicionar com unshift', arr2)

//removendo elementos com pop - remove sempre o último elemento do fim do array
console.log('Antes de remover com pop', arr2)
arr2.pop()
console.log('Depois de remover com pop', arr2)


//removendo elementos com shift - remove sempre o primeiro elemento do inicio do array
console.log('Antes de remover com shift', arr2)
arr2.shift()
console.log('Depois de remover com shift', arr2)

console.clear()

//concatenando arrays
console.log('Array 1 =', arr1)
console.log('Array 2 =', arr2)

console.log(arr1.concat(arr2))

console.clear()

//buscando elementos em array

console.log(arr1)

//indexOf procura o índice da lista que armazena o elemento n no array, se ele se repetir, sempre será retornado o primeiro
let indiceDoElemento34 = arr1.indexOf(34)
console.log(indiceDoElemento34)

//lastIndexOf procura o último índice da lista que armazena o elemento n no array, se ele se repetir, será retornado o último
let arr3 = [1, 2, 3, 3, 5, 3]
console.log(arr3.lastIndexOf(3))

//includes para saber se o elemento está ou não dentro do array
console.log(arr1)
console.log(arr1.includes(45))

//reverse serve para inverter um array
console.log('Array normal:', arr1)

const arr1Invertido = arr1.reverse()

console.log('Array invertido:', arr1Invertido)

function funcao(array) {
    let acc = 0;
  
    for (let elemento of array) {
      acc += elemento;
    }
  
    return (acc / array.length);
  }
  
  console.log(funcao([4, 6, 4, 2]));