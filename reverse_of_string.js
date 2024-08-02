const prompt = require('prompt-sync')();
let str,len,i,str2='';
str=prompt("Enter any string:");
len=str.length;
for(i=(len-1);i>=0;i--)
{
    str2 += str[i];
}
console.log(`The reverse of ${str} is ${str2}`);