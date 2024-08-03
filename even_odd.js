const prompt=require('prompt-sync')();
let n=prompt("Enter a number:");
if(n%2==0)
{
    console.log(`${n} is an even number.`);
}
else
{
    console.log(`${n} is an odd number.`);
}