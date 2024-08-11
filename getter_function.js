const info =  {
    name : "Nabin",
    Address : "Lamachaur-16,Pokhara",
    age : 20,
    contact : {
        phone_no : 9749319738,
        e_mail : "nabinbhat204@gmail.com"
    },
    Faculty : "Computer engineering",
    Campus : "Paschimanchal Campus",
    get getname() {
        return this.name;
    }
};
console.log(info.name);
console.log(info.Campus);
console.log(info.getname);
console.log(info.contact.e_mail);
console.log(info["contact"]);