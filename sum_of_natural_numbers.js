const prompt=require('prompt-sync')();
let number,sum=0,i;
number=parseInt(prompt("Enter a number:"));
for(i=1;i<=number;i++)
{
    sum=sum+i;
}
console.log(`The sum of natural numbers upto ${number} is:`,sum);