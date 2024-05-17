function palíndromo(palavra) {
    let palavraInvertida = palavra.split('').reverse().join('')
    if (palavra == palavraInvertida) {
        console.log(true)
    } else {
        console.log(false)
    }
}
console.log(palíndromo("eduarda"))