function pangrama (palavra){
    let letras = 'abcdefghijklmnopqrstuvwxyz'
    for(let x of letras){
        if(!palavra.includes(x)){
 return false
        }
    }
    return true
}
console.log(pangrama('Não quero estudar mais'))