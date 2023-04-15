function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}
let studentFirst = new Student("Мария","женский", 20);
let studentSecond = new Student("Ольга","женский", 18);
let studentThird = new Student("Мия","женский", 20);
let studentFourth = new Student("Олег","мужской", 19);
let studentFifth = new Student("Игорь","мужской", 21); 

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if (this.marks !== []) {  
  for(mark of marks)
  this.marks.push(mark);
}
}

Student.prototype.getAverage = function () {
  if (this.marks.length === 0 || this.marks === undefined) {
    return 0;
  } else { 
    return (this.marks.reduce((previous, next) => previous + next, 0)) / this.marks.length;
  }
}

Student.prototype.exclude = function (reason) {
  delete this.marks
  delete this.subject
  this.excluded = reason;
}
