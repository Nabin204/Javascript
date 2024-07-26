const prompt = require('prompt-sync')();
function squareroot(n)
{
    return Math.sqrt(n);
}
let num=prompt("Enter a number:");
console.log("The square root of "+num+" is:",squareroot(num));
