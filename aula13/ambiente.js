// Primeiro executa, depois testa a condição
var c = 1
do {
    console.log(`Tudo bem - Passo ${c}!`)
    c++
} while (c <= 6)

/*
   Primeiro testa a condição e depois executa, se for o caso!
var c = 1
while (c <= 6) {
    console.log(`Tudo bem - Passo ${c}!`)
    c++
}
*/