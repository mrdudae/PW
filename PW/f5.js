function vogais(palavra) {
    let vogais = 0
    for (i = 0; i < palavra.length; i++) {
        if (palavra[i] == 'a' || palavra[i] == 'e' || palavra[i] == 'i' || palavra[i] == 'o' || palavra[i] == 'u') {
            vogais++
        }
    }
    console.log(vogais)
}
console.log(vogais("eduarda"))