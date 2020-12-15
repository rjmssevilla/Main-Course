var Person = function(name, yearOfBirth, job){
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
  this.calculateAge = function(){
    console.log(2020 - this.yearOfBirth);
  }
}

var rio = new Person("Rio", 1997, "Engineer");
var victor = new Person("Victor", 1969, "Designer");
var john = new Person("John", 1949, "Teacher");

rio.address = function () {
  console.log("aa")
} 
