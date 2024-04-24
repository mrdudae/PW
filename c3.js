function celsiusParaFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

const temperaturaCelsius = 60;
const temperaturaFahrenheit = celsiusParaFahrenheit(temperaturaCelsius);

console.log(temperaturaCelsius + " graus Celsius é equivalente a " + temperaturaFahrenheit + " graus Fahrenheit.");