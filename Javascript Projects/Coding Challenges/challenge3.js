/* Coding Challenge 1.0
John and his family went on a holiday and went to 3 different restaurants. The bills were Php 1240, Php 480 and Php 2680.
To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than Php 500, 15% 
when the bill is between Php 500 and Php 2000, and 10% if the bill is more than Php 2000.
In the end, John would like to have 2 arrays:
1. Containing all three tips (one for each bill)
2. Containing all three final paid amounts (bill tip).*/

const bills = [1240,480,2680];


function computeTip(billsArray){
  const tips = [];
  for (i = 0; i < billsArray.length; i++) {
    if(bills[i] < 500){
      tips.push(billsArray[i] * 0.2)
    }
    else if (billsArray[i] > 500 & billsArray[i] < 2000){
      tips.push(billsArray[i] * 0.15)
    }
    else if (billsArray[i] > 2000){
      tips.push(billsArray[i] * 0.10)
    }
  }
  return tips;
}

function computeFinalPaidAmount (arr1, arr2) {
  const finalPaidAmount = [];
  for (i=0; i < arr1.length; i++){
    finalPaidAmount.push(arr1[i] + arr2[i])
  }
  return finalPaidAmount;
}

const tips = computeTip(bills);
console.log(tips)

const finalPaidAmount = computeFinalPaidAmount(bills,tips);
console.log(finalPaidAmount);

