function Employee(name, age, basicSalary){
    this.name = name;
    this.age = age;
    this.basicSalary = basicSalary;

    let Bonus = 500;

    let calculatorSalary = function(){
        let Salary = basicSalary + Bonus;
        console.log('Monthly salary is : '+Salary)
    }

    this.getEmpDetails = function(){
        console.log('Name : '+this.name+' | Age : '+this.age);
        calculatorSalary();
    }
}
let emp1 = new Employee ('Bisi', 34, 4000)
emp1.getEmpDetails();
let emp2 = new Employee ('Chinedu', 25, 2700)
emp2.getEmpDetails();