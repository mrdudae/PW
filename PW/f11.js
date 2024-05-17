function maximodivisor(num1, num2) {
    while (num2!== 0) {
        let temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }
    return num1;
}

const num1 = 48;
const num2 = 18;
const maximodivisor = mdc(num1, num2);
console.log("O máximo divisor comum de", num1, "e", num2, "é", maximodivisor);