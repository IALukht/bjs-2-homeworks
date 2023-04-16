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
  if (this.marks) {  
  this.marks.push(...marks); /*метод push можно передавать не один элемент, а сразу несколько. Так что, все оценки можно добавлять в одно действие (без цикла), только с помощью спред оператора: this.marks.push(...marks);*/
 }
}

Student.prototype.getAverage = function () {
  if (this.marks === undefined) {
    return 0;
  } else { 
    return this.marks.reduce((previous, next) => previous + next / this.marks.length, 0);
  }
}

Student.prototype.exclude = function (reason) {
  delete this.marks
  delete this.subject
  this.excluded = reason;
}
