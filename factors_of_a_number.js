const prompt=require('prompt-sync')();
let i,a,p=0;
let n=prompt("Enter a number:");
a=n/2;
for(i=1;i<=a;i++)
{
    if(n%i==0)
    {
        console.log(i);
        p=p+1;
    }
}
console.log(n);
console.log("The total factors of ",n," is:",p+1);
if(p==1)
{
    console.log(`since the total factors of ${n} is 2,so the number ${n} is a prime number.`);
}
