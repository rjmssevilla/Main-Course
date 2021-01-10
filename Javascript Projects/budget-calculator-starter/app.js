(function(){
  //class constructors
  var Income = function(id, description, value, divID) {
    this.id = id;
    this.description = description;
    this.value = value;
    this.divID = "income-"+divID
  };

  var Expense = function(id, description, value, divID) {
    this.id = id;
    this.description = description;
    this.value = value;
    this.divID = "expense-"+divID
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
    incomeSum += (parseInt(incArray[i].value));
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

function resetFields(){
  addDescription.value = "";
  addValue.value = "";
}

function getExpensesPercentage (){
  var percentage = Math.round((parseInt(budgetExpense.textContent)/parseInt(budgetIncome.textContent))*100)

  if (isFinite(percentage)){
    expensePercentage.textContent = percentage + "%";
    
  }
  else {
    expensePercentage.textContent = 0 + "%";
  }
  
}

function calculateExpensesArrayPercentage (){
  for (var i = 0; i < expArray.length; i++){
    expArray[i].percentage = Math.round((parseInt(expArray[i].value)/parseInt(budgetIncome.textContent))*100)
  }
}

function createIncomeElements(){
  var incomeDiv = document.createElement("div");
  incomeDiv.classList.add("item", "clearfix");
  incomeDiv.id = "income-" +incID;

  var itemDescriptionDiv = document.createElement("div");
  itemDescriptionDiv.classList.add("item__description")
  
  var rightClearfix = document.createElement("div");
  rightClearfix.classList.add("right", "clearfix");

  var itemValue = document.createElement("div");
  itemValue.classList.add("item__value");

  var itemDelete = document.createElement("div");
  itemDelete.classList.add("item__delete");

  var itemDeleteButton = document.createElement("button");
  itemDeleteButton.classList.add("item__delete--btn");

  var ionOutline = document.createElement("i");
  ionOutline.classList.add("ion-ios-close-outline");

  // Append the children to div
  incomeList.appendChild(incomeDiv); //append item clearfix to income__list
  incomeDiv.appendChild(itemDescriptionDiv); //append item__description to item clearfix
  incomeDiv.appendChild(rightClearfix); //append right clearfix to item clearfix
  rightClearfix.appendChild(itemValue); //append item__value to right clearfix
  rightClearfix.appendChild(itemDelete); //append item__delete to right Clearfix
  itemDelete.appendChild(itemDeleteButton); //append item delete button to item__delete
  itemDeleteButton.appendChild(ionOutline); //append ion outline to item delete button

  //place inputs
  var itemDescription = document.createTextNode(addDescription.value);
  itemDescriptionDiv.appendChild(itemDescription);

  var itemValueInput = document.createTextNode("+ " + addValue.value);
  itemValue.appendChild(itemValueInput);
}



function createExpenseElements(){
  var incomeDiv = document.createElement("div");
  incomeDiv.classList.add("item", "clearfix");
  incomeDiv.id = "expense-" +expID;

  var itemDescriptionDiv = document.createElement("div");
  itemDescriptionDiv.classList.add("item__description")
  
  var rightClearfix = document.createElement("div");
  rightClearfix.classList.add("right", "clearfix");

  var itemValue = document.createElement("div");
  itemValue.classList.add("item__value");

  var itemPercentage = document.createElement("div");
  itemPercentage.classList.add("item__percentage");

  var itemDelete = document.createElement("div");
  itemDelete.classList.add("item__delete");

  var itemDeleteButton = document.createElement("button");
  itemDeleteButton.classList.add("item__delete--btn");

  var ionOutline = document.createElement("i");
  ionOutline.classList.add("ion-ios-close-outline");

  // Append the children to div
  expenseList.appendChild(incomeDiv); //append item clearfix to income__list
  incomeDiv.appendChild(itemDescriptionDiv); //append item__description to item clearfix
  incomeDiv.appendChild(rightClearfix); //append right clearfix to item clearfix
  rightClearfix.appendChild(itemValue); //append item__value to right clearfix
  rightClearfix.appendChild(itemPercentage);
  rightClearfix.appendChild(itemDelete); //append item__delete to right Clearfix
  itemDelete.appendChild(itemDeleteButton); //append item delete button to item__delete
  itemDeleteButton.appendChild(ionOutline); //append ion outline to item delete button

  //place inputs
  var itemDescription = document.createTextNode(addDescription.value);
  itemDescriptionDiv.appendChild(itemDescription);

  var itemValueInput = document.createTextNode("- " + addValue.value);
  itemValue.appendChild(itemValueInput);  
}

function removeItemOnce(someArray, currentID) {
  for (var i =0; i < someArray.length; i++)
   if (someArray[i].divID === currentID) {
      someArray.splice(i,1);
      break;
   }
}

function updateExpensePercentage(){
  var itemPercentage = document.getElementsByClassName("item__percentage");
      for (var i = 0; i < expArray.length; i++){
        if(isFinite(expArray[i].percentage)){
          itemPercentage[i].textContent = expArray[i].percentage + "%"
        }
        else{
          itemPercentage[i].textContent = 0 + "%"
        }
        
      }
}

//variable declarations of html elements
var displayMonth = document.querySelector(".budget__title--month");
var totalBudget = document.querySelector(".budget__value");
var addButton = document. querySelector(".add__btn");
var addType = document.querySelector(".add__type");
var addDescription = document.querySelector(".add__description");
var addValue = document.querySelector(".add__value");
var budgetIncome = document.querySelector(".budget__income--value");
var budgetExpense = document.querySelector(".budget__expenses--value");
var incomeList = document.querySelector(".income__list")
var expenseList = document.querySelector(".expenses__list")
var closeButton = document.getElementsByClassName("item__delete--btn");
var expensePercentage = document.querySelector(".budget__expenses--percentage")

//variable declarations for semantics
var incID = 0;
var expID = 0;
var incomeSum = 0;
var expenseSum = 0;
var newItem;
var incArray = [];
var expArray = [];

getCurrentMonth(displayMonth); //get and display current month

addButton.addEventListener('click', e => {

  if(addDescription.value !="" && addValue.value !=""  ){
    if (addType.value == "inc"){
      newItem = new Income (incID, addDescription.value,addValue.value, incID)
      insertIntoIncomeArray(newItem);
      budgetIncome.textContent = addIncomes(incomeSum);
      createIncomeElements();
      calculateExpensesArrayPercentage();
      updateExpensePercentage();    
      incID = incID+1;
  
    }
  
    else if (addType.value =="exp"){
      newItem = new Expense (expID, addDescription.value,addValue.value, expID)
      insertIntoExpenseArray(newItem)
      budgetExpense.textContent = addExpenses(expenseSum);
      calculateExpensesArrayPercentage();
      createExpenseElements();
      updateExpensePercentage();
      expID = expID+1;
    }
  
    var i;
    for (i = 0; i < closeButton.length; i++) {
      closeButton[i].onclick = function() {
      var div = document.getElementById(this.parentNode.parentNode.parentNode.id);
      var currentClass = this.parentNode.parentNode.parentNode.parentNode.className;
      var currentID = this.parentNode.parentNode.parentNode.id;
  
      if (currentClass == "income__list"){
        removeItemOnce(incArray, currentID)
        div.outerHTML=""; //delete the div
        budgetIncome.textContent = addIncomes(incomeSum);
        calculateExpensesArrayPercentage();
        updateExpensePercentage();  
      }
  
      else if  (currentClass == "expenses__list"){
        removeItemOnce(expArray, currentID)
        div.outerHTML=""; //delete the div
        budgetExpense.textContent = addExpenses(expenseSum);
      }
      
      updateBudget(parseInt(budgetIncome.textContent), parseInt(budgetExpense.textContent));
      getExpensesPercentage();
    }
  }
    updateBudget(parseInt(budgetIncome.textContent), parseInt(budgetExpense.textContent));
    getExpensesPercentage();
    resetFields();
  }

  else{
    alert("Please ennter a valid input")
  }
 

})
})();
