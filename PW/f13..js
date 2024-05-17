function Armstrong(num) {
    if (num === 0) {
        console.log(false);
    }
    else {
        let digits = num.toString().split('');
        let sum = 0;
        for (let i = 0; i < digits.length; i++) {
            sum += Math.pow(parseInt(digits[i]), 3);
        }
        if (sum === num) {
            console.log(true);
        }
        else {
            console.log(false);
        }
    }
    return num;
}
console.log(Armstrong(153))