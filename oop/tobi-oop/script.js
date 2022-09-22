// =========== number 1(condition)============
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
        return `I am not a Prefect becuase ${20 - this.age} years less than 20`;
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
    //FIXME::
    currentYear() {
      if (this.year) return `I am currently in ${this.year} year`;
    }
  }
  
  let angelStudent = new SeniorStudent("Angelina", "Doe", "21", "A", "1st");
  
  console.log(angelStudent.prefectPosition());
  console.log(angelStudent.currentYear());
  console.log(angelStudent);
  