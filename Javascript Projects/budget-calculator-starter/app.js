(function(){
//functions
function getCurrentMonth(currentMonth){
  var month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";

  var d = new Date();
  currentMonth.innerHTML = month[d.getMonth()];
}

var Income = function(id, description, value) {
  this.id = id;
  this.description = description;
  this.value = value;
};

var Expense = function(id, description, value) {
  this.id = id;
  this.description = description;
  this.value = value;
  this.percentage = -1;
};

function insertIntoIncomeArray (item){
  incArray.push(item);
};

function insertIntoExpenseArray (item){
  expArray.push(item);
};



//variable declarations
var displayMonth = document.querySelector(".budget__title--month");
var totalBudget = document.querySelector(".budget__value");
var addButton = document. querySelector(".add__btn");
var addType = document.querySelector(".add__type");
var addDescription = document.querySelector(".add__description");
var addValue = document.querySelector(".add__value");

getCurrentMonth(displayMonth); //get and display current month

var incID = 0;
var expID = 0;
var newItem;
var incArray = [];
var expArray = [];

addButton.addEventListener('click', e => {
  if (addType.value == "inc"){
    newItem = new Income (incID, addDescription.value,addValue.value)
    incID = incID+1;
    insertIntoIncomeArray(newItem)
  }
  else if (addType.value =="exp"){
    newItem = new Expense (expID, addDescription.value,addValue.value)
    expID = expID+1;
    insertIntoExpenseArray(newItem)
  }

  for (var i = 0; i < incArray.length; i++) {
    console.log(incArray[i])
  }

  for (var i = 0; i < expArray.length; i++) {
    console.log(expArray[i])
  }

})
})();



