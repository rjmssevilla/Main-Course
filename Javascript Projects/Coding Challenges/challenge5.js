/*Coding Challenge: Tip Calculator (Object version)
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!
This time, John and his family went to 5 different restaurants. The bills were Php 1240, Php 480, Php 2680, Php 1800 and Php 420.
John likes to tip 20% of the bill when the bill is less than Php 500, 15% when the bill is between Php 500 and Php 2000, and 10% if the bill is more than Php 2000.
Implement a tip calculator using objects and loop:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop. */

const John = {
  name: "John",
  bills: [1240,480,2680,1800,420],

  computeTip: function(){
    this.tips = [];
    for (i = 0; i < this.bills.length; i++) {
      if(this.bills[i] < 500){
        this.tips.push(this.bills[i] * 0.2)
      }
      else if (this.bills[i] > 500 & this.bills[i] < 2000){
        this.tips.push(this.bills[i] * 0.15)
      }
      else if (this.bills[i] > 2000){
        this.tips.push(this.bills[i] * 0.10)
      }
    }
    return this.tips;
  },
  computeFinalPaidAmount: function(){

    this.finalPaidAmount = [];
    for (i=0; i < this.bills.length; i++){
      this.finalPaidAmount.push(this.bills[i] + this.tips[i])
    }
    return this.finalPaidAmount;
  }
}
console.log("JOHN")
console.log(John.bills)
console.log(John.computeTip());
console.log(John.computeFinalPaidAmount())




/*Coding Challenge: Extra!
Extra after finishing: Victor's family also went on a holiday, going to 4 different restaurants. The bills were Php 770, Php 3750, Php 1100 and Php 450.
Victor likes to tip 20% of the bill when the bill is less than Php 1000, 10% when the bill is between Php 1000 and Php 3000, and 25% if the bill is more than Php 3000 (different than John).
Implement the same functionality as before, this time using Victor's tipping rules.
1. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
2. Calculate the average tip for each family
3. Log to the console which family paid the highest tips on average. */

const Victor = {
  name: "Victor",
  bills: [770,3750,1100,450],

  computeTip: function(){
    this.tips = [];
    for (i = 0; i < this.bills.length; i++) {
      if(this.bills[i] < 1000){
        this.tips.push(this.bills[i] * 0.2)
      }
      else if (this.bills[i] > 1000 & this.bills[i] < 3000){
        this.tips.push(this.bills[i] * 0.10)
      }
      else if (this.bills[i] > 3000){
        this.tips.push(this.bills[i] * 0.25)
      }
    }
    return this.tips;
  },
  computeFinalPaidAmount: function(){

    this.finalPaidAmount = [];
    for (i=0; i < this.bills.length; i++){
      this.finalPaidAmount.push(this.bills[i] + this.tips[i])
    }
    return this.finalPaidAmount;
  }
}
console.log("VICTOR")
console.log(Victor.bills)
console.log(Victor.computeTip());
console.log(Victor.computeFinalPaidAmount())

function TipAverage (tips){
  var sum = 0;

  for (i=0; i < tips.length; i++){
    sum = sum + tips[i]
  }
  return (sum/tips.length);
}


JohnTipAverage = TipAverage(John.computeTip());
VictorTipAverage = TipAverage(Victor.computeTip());

if (JohnTipAverage > VictorTipAverage){
  console.log ("John's family paid the highest tips on average with an average of:" + JohnTipAverage)
}
else if (JohnTipAverage < VictorTipAverage){
  console.log ("Victor's family paid the highest tips on average with an average of:" + VictorTipAverage)
}
else{
  console.log ("Both families have the same tip average")
}