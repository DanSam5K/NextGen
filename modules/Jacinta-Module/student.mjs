export default class Student{
    constructor(name, level, age) {
        this.name = name;
        this.level = level;
        this.age = age;
    }
}
export function printName(student){
    console.log(`My name is ${student.name}`);
}
export function printForm(student){
    console.log(`I'm an Undergraduate Student in ${student.form} level`);
}
export function printAge(student){
    console.log(`My age is ${student.age}`);
}