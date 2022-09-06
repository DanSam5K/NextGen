// =========================FIRST TASK (condition)==================================
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

  // Determine if final year, mid year or beginner

  currentYear() {
    if (this.year) return `I am currently in ${this.year} year`;
  }
}

let benStudent = new SeniorStudent("Benjamin", "Chukwu", "31", "A", "1st");

console.log(benStudent.prefectPosition());
console.log(benStudent.currentYear());
console.log(benStudent);
