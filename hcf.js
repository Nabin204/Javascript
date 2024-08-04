const prompt = require('prompt-sync')();
let num1=prompt("Enter first number:");
let num2=prompt("Enter second number:");
let smallest,hcf;
if(num1<=num2)
{
    smallest=num1;
}
else{
    smallest=num2;
}
for(let i=smallest;i>0;i--)
{
    if(num1%i==0 && num2%i==0)
    {
        console.log(`The HCF of ${num1} and ${num2} is:${i}`);
        break;
    }
}