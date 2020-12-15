//functions and constructors
var create_user= function(username,password){
  this.username = username;
  this.password = password;
  this.balance = 0;
  this.picture = "images/default.png";
}

function insertIntoArrayOfObjects (user){
  arrayOfUsers.push(user);
}

function deposit(user,amount){
  user.balance = user.balance + amount;

  return user.balance;
}

function withdraw(user,amount){
  user.balance = user.balance - amount;

  return user.balance;
}

function transfer(from_user, to_user,amount){
  from_user.balance = from_user.balance - amount;
  to_user.balance = to_user.balance + amount;

  return from_user.balance;
}


//Store buttons into variables
var loginButton = document.getElementById("login-button");
var registerButton = document.getElementById("register-button");
var signinButton = document.getElementById("signin-button");
var signupButton = document.getElementById("signup-button");
var logoutButton = document.getElementById("logout-button");
var depositButton = document.getElementById("deposit-button");
var withdrawButton = document.getElementById("withdraw-button");
var transferButton = document.getElementById("transfer-button");

//Store class panels into variables
var loginAndRegisterPanel = document.getElementById("login-and-register-container")
var loginPanel = document.getElementById("login-form")
var registerPanel = document.getElementById("register-form")
var mainBankApp = document.getElementById("main-bank-app")

//Store username and password into variables
var username = document.getElementById("register-username");
var password = document.getElementById("register-password");
var confirmPassword = document.getElementById("confirm-password");
var loginusername = document.getElementById("login-username");
var loginpassword = document.getElementById("login-password");


//Store text content into variables
var nameOfUser = document.getElementById("nameOfUser");
var balanceAmount = document.getElementById("balance");
var depositAmount = document.getElementById("deposit-amount");
var withdrawAmount = document.getElementById("withdraw-amount");
var transferAmount = document.getElementById("transfer-amount");
var toUserTransfer = document.getElementById("to-user");
var profilePic = document.getElementById("myImg");
var arrayOfUsers = [];


//EVENT LISTENERS OF BUTTONS
signinButton.addEventListener('click', e => {
  loginPanel.style.display="flex";
  registerPanel.style.display="none";
})

signupButton.addEventListener('click', e => {
  loginPanel.style.display="none";
  registerPanel.style.display="flex";
})

loginButton.addEventListener('click', e => {
  var founduser = arrayOfUsers.some(el => el.username === loginusername.value);
  var foundpassword = arrayOfUsers.some(el => el.password === loginpassword.value);

  if(founduser && foundpassword){
    loginAndRegisterPanel.style.display="none";
    mainBankApp.style.display="block";
  }
  else if(loginusername.value =="" || loginpassword.value == ""){
    alert("Please fillup the required fields.");
  }
  else{
    alert("Incorrect username/password")
  }

  let foundUser = arrayOfUsers.find(el => el.username === loginusername.value);
  
  nameOfUser.textContent = foundUser.username;
  balanceAmount.textContent = foundUser.balance;
  profilePic.src = foundUser.picture;
  loginusername.value = "";
  loginpassword.value = "";
})

registerButton.addEventListener('click', e => {
  var users = new create_user(username.value,password.value)
  const found = arrayOfUsers.some(el => el.username === username.value);

  if (!found && (password.value == confirmPassword.value) && username.value !=="" && password.value !=="" && confirmPassword.value !=="" ) {
    insertIntoArrayOfObjects(users);
    alert("Registered successfully!")
    const foundUser = arrayOfUsers.find(el => el.username === username.value);
    nameOfUser.textContent = foundUser.username;
    balanceAmount.textContent = foundUser.balance;
    profilePic.src = foundUser.picture;
    loginAndRegisterPanel.style.display="none";
    mainBankApp.style.display="block";
  } 
  else if(username.value =="" || password.value == "" || confirmPassword.value == ""){
    alert("Please fillup the required fields.");
  }else if (password.value !== confirmPassword.value){
    alert("Password mismatch")
  }
  else{
    alert("User already exists")
  }
  username.value="";
  password.value = "";
  confirmPassword.value = "";
})

logoutButton.addEventListener('click', e => {
  loginAndRegisterPanel.style.display="block";
  mainBankApp.style.display="none";
})

depositButton.addEventListener('click', e => {
  var numbers = /^[0-9]+$/;
  var foundUser = arrayOfUsers.find(el => el.username === nameOfUser.textContent);
  if(depositAmount.value.match(numbers)){
    balanceAmount.textContent = deposit(foundUser,parseInt(depositAmount.value));
  }
  else{
    alert("Please enter valid input.")
  }
  
  depositAmount.value="";
})

withdrawButton.addEventListener('click', e => {
  var numbers = /^[0-9]+$/;
  var foundUser = arrayOfUsers.find(el => el.username === nameOfUser.textContent);

  if(withdrawAmount.value.match(numbers)){
    if(foundUser.balance > 0 && foundUser.balance >= parseInt(withdrawAmount.value)){
      balanceAmount.textContent = withdraw(foundUser,parseInt(withdrawAmount.value));
    }
    else if (foundUser.balance <= 0){
      alert("Not enough money!");
    }
    else if (foundUser.balance < parseInt(withdrawAmount.value)){
      alert("Withrdaw amount is greater than your balance!")
    }
  }
  else{
    alert("Please enter valid input")
  }
  withdrawAmount.value="";
})


transferButton.addEventListener('click', e => {
  var numbers = /^[0-9]+$/;
  var fromUser = arrayOfUsers.find(el => el.username === nameOfUser.textContent);
  var toUser = arrayOfUsers.find(el => el.username === toUserTransfer.value);
  var toUserExist = arrayOfUsers.some(el => el.username === toUserTransfer.value);
  
  if(transferAmount.value.match(numbers) && toUserTransfer.value != ""){
    if(toUserExist && fromUser.balance >= parseInt(transferAmount.value)){
      balanceAmount.textContent = transfer(fromUser,toUser,parseInt(transferAmount.value));
    }
    else if (fromUser.balance <= 0){
      alert("Not enough money!");
    }
    else if (fromUser.balance < parseInt(transferAmount.value) && toUserExist){
      alert("Transfer amount is greater than your balance!")
    }
    else if (!toUserExist){
      alert("User does not exist!");
    }
  }
  else{
    alert("Please enter valid input")
  }
  
  transferAmount.value="";
  toUserTransfer.value="";
  
})

window.addEventListener('load', function() {
  document.querySelector('input[type="file"]').addEventListener('change', function() {
      if (this.files && this.files[0]) {
          var foundUser = arrayOfUsers.find(el => el.username === nameOfUser.textContent);
          var img = document.querySelector('#myImg');  // $('img')[0]
          img.src = URL.createObjectURL(this.files[0]); // set src to blob url
          foundUser.picture= img.src;
      }
  });
});
