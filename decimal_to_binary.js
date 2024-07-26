const prompt = require('prompt-sync')();
let num=parseInt(prompt("Enter any decimal number:"));
let strnum=String(num);
let remainder,number='',num1,reverse=0,len,i,num2='';
num1=num;
while(parseInt(strnum)!=0)
{
    remainder=strnum%2;
    number=number+remainder;
    strnum=Math.floor(parseInt(strnum)/2);
    strnum=String(strnum);
}
len=number.length;
for(i=(len-1);i>=0;i--)
{
    num2 += number[i];
}
num2=parseInt(num2);
console.log(`The binary of ${num1} is: ${num2}.`);