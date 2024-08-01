const prompt=require('prompt-sync')();
let year=prompt("Enter a year:");
if(year%400==0)
{
    console.log(`year ${year} is a leap year.`);
}
else if(year%4==0 && year%100!=0)
{
    console.log(`year ${year} is a leap year.`);
}
else
{
    console.log(`year ${year} is not a leap year.`);
}