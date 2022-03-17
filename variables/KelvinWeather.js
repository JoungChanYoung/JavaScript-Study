//If a value of kelvin is given, it is converted to Fahrenheit, newton.

//The value saved to kelvin will stay constant.
const kelvin = 293;
//Celsius is 273 degrees less than Kelvin.
const celsius = kelvin - 273;
//Fahrenheit = Celsius * (9/5) + 32
let fahrenheit = celsius * (9 / 5) + 32;
//Newton = Celsius * (33/100)
let newton = celsius * (33 / 100);
//When Converting from Celsius to Fahrenheit, get a decimal number.
fahrenheit = Math.floor(fahrenheit);
//When Converting from Celsius to newton, get a decimal number.
newton = Math.floor(newton);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
console.log(`The temperature is ${newton} degrees Newton`);
