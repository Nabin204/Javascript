const employee = {
    name : "Birendra",
    age : 21,
    set employeeid(id)
    {
       this.employee_id=id;
    },
};
console.log(employee.age);
employee.employeeid = 1729;
console.log(employee.employee_id);