//Coerção de tipos

/*conversão explicita: quando o dev faz de forma manual
conversão implícita: quando o js faz de forma automática, por debaixo dos panos*/

//Coerção explícita:(manual)

const numero = 10;
console.log(numero, typeof numero)

const numeroEmFormatoDeString = String(numero)
console.log(numeroEmFormatoDeString, typeof numeroEmFormatoDeString)

console.log(Number('123456789'))
console.log(parseFloat('123445.677'))//mais recomendadas para uso

console.log(parseInt('123445.677'))
console.log(Boolean(0))

console.clear()

//Coerção implícita(automátiva)
console.log(10 + '1')//concatena e converte tudo para TEXTO 
console.log('10' - 1)//converte para subtrair
console.log('10' * 3)//converte para multiplicar
console.log(10 - 'syaisy') //NaN = Not a Number