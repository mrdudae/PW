function fatorial(num) {
    let fatorial = 1
    let i = 1
    while (i <= num) {
        fatorial = fatorial * i
        i = i + 1
    }
    console.log(num + "! = " + fatorial)
}
console.log(fatorial(2))