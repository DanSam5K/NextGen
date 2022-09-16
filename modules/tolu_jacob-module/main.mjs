import Student, {printName, printForm, printAge} from "./word.mjs";

const student = new Student('Toluwase Akinjare', 6, 15)
console.log(student)
printName(student)
printForm(student)
printAge(student)