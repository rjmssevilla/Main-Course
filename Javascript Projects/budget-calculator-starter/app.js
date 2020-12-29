(function(){
  //class constructors
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

function insertIntoIncomeArray (item){
  incArray.push(item);
};

function insertIntoExpenseArray (item){
  expArray.push(item);
};

function addIncomes(incomeSum){
  for (var i = 0; i < incArray.length; i++) {
    incomeSum += parseInt(incArray[i].value);
  }
  return incomeSum;
}

function addExpenses(expenseSum){
  for (var i = 0; i < expArray.length; i++) {
    expenseSum += parseInt(expArray[i].value);
  }
  return expenseSum;
}

function updateBudget(income, expense){
  var budget = (income - expense);
  totalBudget.textContent = budget;
}

function createIncomeElements(){

}

//variable declarations
var displayMonth = document.querySelector(".budget__title--month");
var totalBudget = document.querySelector(".budget__value");
var addButton = document. querySelector(".add__btn");
var addType = document.querySelector(".add__type");
var addDescription = document.querySelector(".add__description");
var addValue = document.querySelector(".add__value");
var budgetIncome = document.querySelector(".budget__income--value");
var expenseIncome = document.querySelector(".budget__expenses--value");

getCurrentMonth(displayMonth); //get and display current month

var incID = 0;
var expID = 0;
var incomeSum = 0;
var expenseSum = 0;
var newItem;
var incArray = [];
var expArray = [];


addButton.addEventListener('click', e => {

  if (addType.value == "inc"){
    newItem = new Income (incID, addDescription.value,addValue.value)
    incID = incID+1;
    insertIntoIncomeArray(newItem);
    budgetIncome.textContent = addIncomes(incomeSum);

    
  }

  else if (addType.value =="exp"){
    newItem = new Expense (expID, addDescription.value,addValue.value)
    expID = expID+1;
    insertIntoExpenseArray(newItem)
    expenseIncome.textContent = addExpenses(expenseSum);
  }

  updateBudget(parseInt(budgetIncome.textContent), parseInt(expenseIncome.textContent));
})
})();



