function verificarRepeticao(a, b, c) {
    return (a === b || a === c || b === c);
}

function exibirresultado(num1, num2, num3) {
    if (verificarRepeticao(num1, num2, num3)) {
        console.log("Você repetiu algum número na digitação.");
        return;
    }
const soma = num1 + num2 + num3;
const media = soma / 3;
const produto = num1 * num2 * num3;
const menor = Math.min(num1, num2, num3);
const maior = Math.max(num1, num2, num3);

console.log("Soma:", soma);
console.log("Média:", media);
console.log("Produto:", produto);
console.log("Menor:", menor);
console.log("Maior:", maior);
}
const numero1 = 8;
const numero2 = 8;
const numero3 = 10;

exibirResultados(numero1, numero2, numero3);