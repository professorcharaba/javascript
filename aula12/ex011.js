var idade = 66
console.log(`Sua idade é de ${idade} anos.`)
if (idade < 16) {
    console.log(`Você Não Vota!`)
}
else if (idade < 18 || idade > 65) {
        console.log(`Seu Voto é Opcional!`)
    }
    else {
        console.log(`Seu Voto é obrigatório!`)
    }