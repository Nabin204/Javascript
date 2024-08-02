const prompt=require('prompt-sync')();
let i;
let n=prompt("Enter a number:");
console.log(`The multiplication table of ${n} is:`);
for(i=1;i<=10;i++)
{
    console.log(`${n} * ${i} = `,n*i);
}