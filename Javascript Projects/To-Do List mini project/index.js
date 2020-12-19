//functions
function getDateToday(dateToday){
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = mm + '/' + dd + '/' + yyyy;
  dateToday.textContent = today;
}


//variable declarations
var dateToday = document.getElementById("dateToday");
var addButton = document.querySelector(".addButton");
var listOfItems = document.getElementById("listOfItems");
var taskInputValue = document.getElementById("taskInput")
var closeButton = document.getElementsByClassName("close");


getDateToday(dateToday);



addButton.addEventListener('click', e => {
  var list = document.createElement("li");
  var span = document.createElement("span");

  listOfItems.appendChild(list);
  list.appendChild(document.createTextNode(taskInputValue.value));

  span.className = "close";
  span.appendChild(document.createTextNode("\u00D7"));
  list.appendChild(span)

  var i;
  for (i = 0; i < closeButton.length; i++) {
  closeButton[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
taskInputValue.value="";

})






