const prompt = require('prompt-sync')();
let sum,num,remainder,length;
let lowerlimit=parseInt(prompt("Enter the first number for the range:"));
let upperlimit=parseInt(prompt("Enter the last number for the range:"));
console.log(`The Armstrong number between ${lowerlimit} and ${upperlimit} is:`)
for(let i=lowerlimit;i<=upperlimit;i++)
{
   sum=0;
   num=i;
   length=String(i).length;
    while(num!=0)
    {
       remainder=num%10;
       sum += Math.pow(remainder,length);
       num=parseInt(num/10);
    }
    if(sum==i)
    {
        console.log(i);
    }
}