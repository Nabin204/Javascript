let x = function (...p)
{
    console.log(p);
    console.log(p.length);
}
const arr=[2,4,6,8,10];
x(...arr);
x("Aarjeet","Dhiraj","Mohit");

let sum = (x,y,z) =>{
    console.log(x+y+z);
}
 const arr1=[2,3,5,7,11,13,17];
 sum(...arr1.slice(3,6));