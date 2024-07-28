function Student (student_name,faculty,roll_no){
    this.name = student_name,
    this.faculty=faculty,
    this.roll_no=roll_no
};
const student1=new Student("Nabin Bhat","Computer Engineering","PAS078BCT020");
const student2= new Student("Mohit Singh Budal","Computer Engineering","PAS078BCT019");
Student.prototype.info = function ()
{
    console.log(`Hello, my name is ${this.name}.I am currently doing bachelor in ${this.faculty}`);
};
console.log(student1.name);
console.log(student2.name);
student1.info();
student2.info();
Student.prototype.age=20;

console.log(student1.age);
console.log(student2.age);

// Student.prototype = {age:25};         if i do not comment this line then the last line throw error because for student3 object info() function is not defined

const student3= new Student("Alok Karn","Computer engineering","PAS078BCT0001");
console.log(student1.age);
console.log(student2.age);
console.log(student3.age);

student3.info();