const info = {
    name : "Nabin",
    Address : "Lamachaur-16,Pokhara",
    age : 20,
    contact : {
        phone_no:9749319738,
        e_mail:"nabinbhat204@gmail.com"
    },
    Faculty : "Computer engineering",
    Campus : "Paschimanchal Campus",
    welcome : function()
    {
        console.log(`Hi, It's me ${this.name}.I live in ${this.Address}.I am currently doing my bachelor in ${this.Faculty}.`);
    }
};
console.log(info.name);
console.log(info.Campus);
info.welcome();
console.log(info.contact.e_mail);