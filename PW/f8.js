function numeroprimo(num) {
    let divisores = 0
    for (i = 1; i <= num; i++) {
        if (num % i == 0) {
            divisores++
        }
    }
    if (divisores == 2) {
        console.log(true)
    } else {
        console.log(false)
    }
}