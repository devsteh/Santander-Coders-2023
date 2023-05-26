//Estruturas condicionais

const idade = 23

// estrutura mais básica é o if (se)

if(idade >= 18){
    console.log('idade =',idade, 'Tu és maior de idade')
}else{
    console.log('Tu és menor de idade')
}

console.clear()

let media = 5

if(media >= 7){
    console.log('Aprovado(a)!')
}else if(media < 7 && media >= 5){
    console.log('Recuperação!')
}else{
    console.log('Reprovado(a)!')
}

