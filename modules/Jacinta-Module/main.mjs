import Student, {printName, printLevel, printAge} from "./student.mjs";

const student = new Student('Oge Nwa', 100, 19)
console.log(student)
printName(student)
printLevel(student)
printAge(student)