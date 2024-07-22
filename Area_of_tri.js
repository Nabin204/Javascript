const prompt = require('prompt-sync')();
const area = (base,height) =>
{
    return 0.5*base*height;
}
let base,height;
base=prompt("Enter the base of triangle:");
height=prompt("Enter the height of triangle:");
console.log("The area of triangle is:",area(base,height));