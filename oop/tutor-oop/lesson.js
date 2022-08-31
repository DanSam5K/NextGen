// let names = {
//   fname: "Daniel",
//   lname: "Kwok",
// };

// console.log(names.fname); // Daniel
// console.log(names.lname); // Samuel

// console.log(names.hasOwnProperty("names")); //

// console.log(typeof names); // true

//1 fisrt Methods use to create object Object.create()

// function StudentObject(fname, lname, age, grade) {
//   let student = Object.create(constructorStudentObject);
//   student.fname = fname;
//   student.lname = lname;
//   student.age = age;
//   student.grade = grade;

//   return student;
// }

// let constructorStudentObject = {
//   prefectPosition: function () {
//     return "I am a Prefect";
//   },
// };

// let benStudent = StudentObject("Benjamin", "Chukwu", "30", "A");

// console.log(benStudent);

// 2. Second Method use to create object new keyword

// function StudentObject(fname, lname, age, grade) {
//   this.fname = fname;
//   this.lname = lname;
//   this.age = age;
//   this.grade = grade;
// }

// StudentObject.prototype.prefectPosition = function () {
//   return "I am a Prefect";
// };

// let benStudent = new StudentObject("Benjamin", "Chukwu", "30", "A");
// let samStudent = new StudentObject("Samuel", "Kwok", "30", "A");

// console.log(benStudent);
// console.log(benStudent.prefectPosition());
// console.log(samStudent);

// 3. Third Method use to create object Now class

class StudentObject {
  constructor(fname, lname, age, grade) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.grade = grade;
  }
  prefectPosition() {
    if (this.age) {
      return `I am a Prefect becuase I am ${this.age} years old`;
    } else {
      return `I am not a Prefect becuase ${30 - this.age} years less than 30`;
    }
  }
}

// 4 Subclassing

class SeniorStudent extends StudentObject {
  constructor(fname, lname, age, grade, year) {
    super(fname, lname, age, grade);
    this.year = year;
  }

  // Determine if final year, mid, year or beginner
  currentYear() {
    return `I am currently in ${this.year}`;
  }
}

let benStudent = new SeniorStudent("Benjamin", "Chukwu", "31", "A", "1st");

console.log(benStudent.prefectPosition());
console.log(benStudent.currentYear());
console.log(benStudent);
