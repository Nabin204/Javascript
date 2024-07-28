function Person (){
    this.name = 'Ram',
    this.age = 21,
    this.faculty = 'Computer engineering'
};
Person.prototype.gender = 'Male';
const person1=new Person();
const person2=new Person();
console.log(person1.gender);
console.log(person2.gender);
person2.gender= 'Female';
console.log(person1.gender);
console.log(person2.gender);
const person3=new Person();
console.log(person3.gender);
console.log(Person.prototype);