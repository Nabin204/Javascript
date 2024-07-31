const prompt = require('prompt-sync')();
//swaping value of variables without initializing third variable
let a=parseInt(prompt("Enter the value of a:"));
let b=parseInt(prompt("Enter the value of b:"));
console.log("The value of 'a' before swapping is:",a);
console.log("The value of 'b' before swapping is:",b);
a=a+b; //a=10+1=11 if a=10,b=1
b=a-b; //b=11-1=10
a=a-b; //a=11-10=1
console.log("The value of 'a' after swapping is:",a);
console.log("The value of 'b' after swapping is:",b);