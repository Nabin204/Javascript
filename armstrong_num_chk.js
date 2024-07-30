const prompt = require('prompt-sync')();
let num=parseInt(prompt("Enter a number:"));
let length=String(num).length;
let sum=0,remainder,number;
number=num;
while(num!=0)
{
  remainder=num%10;
  sum += Math.pow(remainder,length);
  num=parseInt(num/10);
}
if(sum==number)
{
    console.log(`${number} is an Armstrong number.`);
}
else
{
    console.log(`${number} is not an Armstrong number.`);
}