const prompt = require('prompt-sync')();
let factorial=1;
let num=parseInt(prompt("Enter a number:"));
if(num<0)
{
    console.log("The factorial of a negative number is undefined.");
}
else if(num==0)
{
    console.log("The factorial of 0 is: 1");
}
else
{
    for(let i=2;i<=num;i++)
    {
     factorial *=i;
    }
    console.log(`The factorial of ${num} is:${factorial}`);
}