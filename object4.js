function info()  {
    this.name = "Nabin",
    this.Address = "Lamachaur-16,Pokhara",
    this.age = 20,
    this.contact = {
        phone_no : 9749319738,
        e_mail : "nabinbhat204@gmail.com"
    },
    this.Faculty = "Computer engineering",
    this.Campus = "Paschimanchal Campus",
    this.welcome = function()
    {
        console.log(`Hi, It's me ${this.name}.I live in ${this.Address}.I am currently doing my bachelor in ${this.Faculty}.`);
    }
};
const person1 = new info();
console.log(person1.name);
console.log(person1.Campus);
person1.welcome();
console.log(person1.contact.e_mail);
console.log(person1["contact"]);