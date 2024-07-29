const employee={
    Name : 'Bikram',
    education:'Bachelor in computer engineering',
    contact:{
        email : 'nabinbhat204@gmail.com',
        phone : 9749319738
    },
    company:function(){
        console.log('Company name:Microsoft');
        console.log(`My name is ${this.Name} and my education level is ${this.education}`);
    }
};
employee.company();
console.log(employee.contact.email);