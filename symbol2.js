const name = Symbol ("Nabin Bhat");
const student = {
    [name] : "Dhiraj Mahato",
    age : 21,
    faculty : "Computer Engineering",
    Campus : "Paschimanchal Campus"
};
console.log(student.Campus);
console.log(name);
console.log(student["name"]);
console.log(student.name);
console.log(student);

//symbols are not included in for....in loop
for(let i in student)
{
    console.log(i);
}