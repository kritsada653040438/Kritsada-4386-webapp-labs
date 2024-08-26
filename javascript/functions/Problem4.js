let celCelsiustoFahrenheit = (x) => {
    let celsius = x;
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit.toFixed(2);
}
let FahrenheittoCelsius = (x) => {
    let fahrenheit = x;
    let celsius = (fahrenheit - 32) * 5/9;
    return celsius.toFixed(2);
}

let formatConversion = (x,converter,y) => {
    let result = converter(x);
    if (y === 'F') return `${x}°F is ${result}°C`;
    if (y === 'C') return `${x}°C is ${result}°F`;
}

console.log(formatConversion(20,celCelsiustoFahrenheit,'C'));
console.log(formatConversion(98.6,FahrenheittoCelsius,'F'));
console.log(formatConversion(0,celCelsiustoFahrenheit,'C'));
console.log(formatConversion(32,FahrenheittoCelsius,'F'));