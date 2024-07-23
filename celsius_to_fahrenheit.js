const prompt = require('prompt-sync')();
let celsius=parseFloat(prompt("Enter temperature in celsius:"));
let fahrenheit=(celsius*1.8)+32;
console.log(`${celsius} degree celsius=${fahrenheit} degree fahrenheit.`);