const prompt = require('prompt-sync')();
let char=prompt("Enter any character:");
console.log(`The ASCII value of '${char}' is:${char.charCodeAt(0)}`);
// another method to find ASCII value of character is:
// char.codePointAt(0);