class Employee{
    setEmpDetails(name, id, phoneNo){
        this.name = name;
        this.id = id;
        this.phoneNo = phoneNo;
    }
    getEmpName(){
        return this.name;
    }
    getEmpId(){
        return this.id;
    }
    getEmpPhoneNo(){
        return this.phoneNo;
    }
    
}
let emp1 = new Employee();

emp1.setEmpDetails('John', 1001, '+2348132044517');
console.log ("Your name is:", emp1.getEmpName());
console.log ("Your id is:", emp1.getEmpId());
console.log ("Your Phone-No is:",emp1.getEmpPhoneNo());
