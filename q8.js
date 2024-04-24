function IMC(peso, altura) {
    const imc = peso / (altura ** 2);
    console.log("meu imc é:",imc.toFixed(2));
    
    switch (true){ 
     case IMC < 18.5:
    resultado = "abaixo do peso";
    break;
case IMC >= 18.5 && a <= 24.9:
    resultado = "peso normal";
case IMC >= 25 && a <= 29.9:
    resultado = "sobrepeso";

case (IMC >= 30 && a <= 39.9):
    resultado = "obesidade grau 1";

case IMC >= 40:
    resultado = "obesidade grau 2";

default:
    resultado = "obesidade morbida";
    }
}
IMC(68, 1.69);