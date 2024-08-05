const prompt = require('prompt-sync')();
let upperlimit=parseFloat(prompt("Enter upperlimit for generating random number:"));
console.log("The random number is:",Math.random()*upperlimit);
