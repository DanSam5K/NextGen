 // First Condition
class StudentObject {
    constructor(fname, lname, age, grade) {
      this.fname = fname;
      this.lname = lname;
      this.age = age;
      this.grade = grade;
    }
    CPPosition() {
      if (this.age) {
        return `I am a CP because I am ${this.age} years old`;
      } else {
        return `I am not a CP because I am ${25 - this.age} years less than 25`;
      }
    }
  }
  
  // 4 Subclassing
  
  class UndergraduateStudent extends StudentObject {
    constructor(fname, lname, age, grade, year) {
      super(fname, lname, age, grade);
      this.year = year;
    }
  
    // Determine if final year, mid year or beginner
    currentYear() {
      return `I am currently in ${this.year}`;
    }
  }
  
  let ogeStudent = new SeniorStudent("Oge", "Nwa", "19", "A", "100");
  
  console.log(ogeStudent.CPPosition());
  console.log(ogeStudent.currentYear());
  console.log(ogeStudent);
  