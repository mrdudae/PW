function mindivisor(num1, num2) {
    while (num2!== 0) {
        let temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }
    return num1;
}
function mmc(a, b) {
    return a * b / mindivisor(a, b);
}

const num1 = 6;
const num2 = 8;
const mindivisor = mmc(num1, num2);
console.log("O mínimo múltiplo comum de", num1, "e", num2, "é", mindivisor);