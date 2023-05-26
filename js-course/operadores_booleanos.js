//Operadores booleanos

/*
Igualdade == (ou  === para comparação de tipo de variável, recomendado para evitar bugs)
Desigualdade != (ou !== para comparação de tipo de variável, recomendado para evitar bugs)
Maior que >
Maior ou igual >=
Menor que <
Menos ou igual <=
*/ 

const numero = 10
console.log(numero == 10)
console.log(numero != 10)
console.log(numero>20)
console.log(numero>=20)
console.log(numero<=10)

//limpa execução até o ponto que esse console está
console.clear()

//Conjunções lógicas
/*
AND = &&
OR || 
NOT !
*/

//Uso AND
let idade = 23
let tenhoCNH = true

const possoDirigir = idade >= 18 && tenhoCNH === true
console.log("Posso dirigir?", possoDirigir)

//Uso OR

const votoFacultativo = idade<18 || idade >= 70
console.log("Voto facultativo??", votoFacultativo)

//Uso NOT

const estouGostandoDoCurso = false
console.log("Estou gostando das aulas?", !estouGostandoDoCurso)