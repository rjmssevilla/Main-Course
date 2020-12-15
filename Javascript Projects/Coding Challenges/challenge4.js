/*
Coding Challenge!
Let's remember the first coding challenge where Victor and John compared their BMIs. Let's now implement the same functionality with objects and methods.
a. For each of them, create an object with properties for their full name, mass and height.
b. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
c. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.
*/


const Victor = {
  name: "Victor",
  mass : 65,
  height : 1.3,
  bmi : function() {
    return this.mass / this.height ** 2;
  }
};

const John = {
  name: "John",
  mass : 75,
  height : 2,
  bmi : function() {
    return this.mass / this.height ** 2;
  }
};

if (Victor.bmi() > John.bmi()){
  console.log(Victor.name + " has the higher BMI of " + Victor.bmi())
}
else if (Victor.bmi() < John.bmi()){
  console.log(John.name + "has the higher BMI of" + John.bmi())
}
else if (Victor.bmi() == John.bmi()){
  console.log(Victor.name + " and " + John.name + " has the same BMI.")
}
