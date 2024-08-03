const prompt = require('prompt-sync')();
let km=parseFloat(prompt("Enter the distance in KM:"));
console.log(`The distance in mile is:${km*0.621371}`);