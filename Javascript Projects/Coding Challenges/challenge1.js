/*
function createThreePeople(peopleArray){
  if (peopleArray.length > 3) {
  console.log("Maximum of three people only!!!")
  } else
  return null
  }
*/

function BMICompute(height,mass){
  return totalBMI = mass/height**2;
}

function Person(name,mass,height){
  this.name = name;
  this.mass = mass;
  this.height = height;
  this.bmi= BMICompute(height,mass)
}

const Pedro = new Person("Pedro", 65, 1.3);
const Juan = new Person("Juan", 75, 2);
const Rizal = new Person("Rizal", 68, 1.7);


console.log("Pedro's BMI is: "+Pedro.bmi)
console.log("Juan's BMI is: "+Juan.bmi)
console.log("Rizal's BMI is: "+Rizal.bmi)


var highestBMI = Math.max(Pedro.bmi, Juan.bmi, Rizal.bmi);

/*If-else statement*/

if (highestBMI == Pedro.bmi){
  console.log("Pedro has the highest BMI (if-else)")
}
else if (highestBMI == Juan.bmi){
  console.log("Juan has the highest BMI (if-else)")
}
else if (highestBMI == Rizal.bmi){
  console.log("Juan has the highest BMI (if-else)")
}

/*switch-statement*/
switch (highestBMI){
  case (Pedro.bmi):
  console.log("Pedro has the highest BMI (switch case)")
  break;

  case (Juan.bmi):
  console.log("Juan has the highest BMI (switch case)")
  break;

  case (Rizal.bmi):
  console.log("Rizal has the highest BMI (switch case)")
  break;
}

/*ternary operator*/
const ternaryOperator = highestBMI == Pedro.bmi ? "Pedro has the highest BMI(ternary operator)" : 
          (highestBMI == Juan.bmi ? "Juan has the highest BMI(ternary operator)" : "Rizal has the highest BMI(ternary operator)");
console.log(ternaryOperator)
