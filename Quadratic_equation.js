const prompt = require('prompt-sync')();
let a=parseInt(prompt("Enter the values of a:"));
let b=parseInt(prompt("Enter the values of b:"));
let c=parseInt(prompt("Enter the values of c:"));
let d=(b**2-4*a*c);
let x,y;
if (d>=0)
{
  x=(-b+d**0.5)/(2*a);
  y=(-b-d**0.5)/(2*a);
  console.log(`X1=${x}`);
  console.log(`X2=${y}`);
}
else{
    d=-1*d;
    x=(-b)/(2*a);
    y=(d**0.5)/(2*a);
    console.log(`X1=${x}+${y}i`);
    console.log(`X2=${x}-${y}i`);
}