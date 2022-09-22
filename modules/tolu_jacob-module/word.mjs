export default class Student{
    constructor(name, form, age) {
        this.name = name;
        this.form = form;
        this.age = age;
    }
}
export function printName(student){
    console.log(`My name is ${student.name}`);
}
export function printForm(student){
    console.log(`I'm a high school Student and i'm in form ${student.form}`);
}
export function printAge(student){
    console.log(`I'm ${student.age} years of age`);
}