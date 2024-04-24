function IMC(){
    let altura = 1.69
    let peso = 60
    let imc = peso / (altura * altura)
    console.log(imc)
}
if (IMC < 18.5){
    console.log("abaixo do peso")
}
else if (IMC >= 18.5 && a <= 24.9){
    console.log("peso normal")
}
else if (IMC >= 25 && a <= 29.9){
    console.log("sobrepeso")
}
else if (IMC >= 30 && a <= 39.9){a
    console.log("obesidade grau 1")
}
else if (IMC >= 40){
    console.log("obesidade grau 2")
} 
else{
    console.log("obesidade morbida")
}

IMC();