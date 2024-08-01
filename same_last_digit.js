const prompt = require('prompt-sync')();
let num1=prompt("Enter first number:");
let num2=prompt("Enter second number:");
if((num1%10)==(num2%10))
{
    console.log("The last digit of both number is same.");
}
else
{
    console.log("The last digit of both number is not same.");
}