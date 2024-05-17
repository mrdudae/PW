function sequenciaDeFibonacci(n1){
    let antecessor = 1
    let sucessor = 1
    let igual = 1
    for (let x = 0; x < n1; x++){
        console.log(sucessor)
        antecessor = igual + sucessor
        
        igual = sucessor
        sucessor = antecessor
    }
}
console.log(sequenciaDeFibonacci(10))