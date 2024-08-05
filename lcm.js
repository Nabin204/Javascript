const prompt = require('prompt-sync')();
let num1=prompt("Enter first number:");
let num2=prompt("Enter second number:");
let largest,lcm;
if(num1>=num2)
{
    largest=num1;
}
else
{
    largest=num2;
}
for(let i=largest;i<=(num1*num2);i++)
{
    if((i%num1)==0 && (i%num2)==0)
    {
        console.log(`The LCM of ${num1} and ${num2} is:${i}`);
        break;
    }
}