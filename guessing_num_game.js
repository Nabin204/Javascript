const prompt = require('prompt-sync')();
let num=prompt("Guess any number between 1 and 3:");
let ran=parseInt(Math.random()*3);
if(ran==num)
{
    console.log("Congratulations! , Your guess is correct.");
}
else
{
    console.log("Sorry! , Better luck next time.");
}