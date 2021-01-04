(function(){

  //button variable declarations
  var greetContent = document.getElementById("greet-content")
  var submitBTN = document.querySelector(".submit-btn")
  var rioBTN = document.querySelector(".btn1")
  var foxBTN = document.querySelector(".btn2")
  var duterteBTN = document.querySelector(".btn3")
  var rizalBTN = document.querySelector(".btn4")
  var chenBTN = document.querySelector(".btn5")
  var jianeBTN = document.querySelector(".btn6")
  var helloBTN = document.querySelector(".btn7")
  var goodbyeBTN = document.querySelector(".btn8")

  submitBTN.addEventListener('click', e => {
    greetContent.textContent = document.querySelector(".input-name").value;
  })

  rioBTN.addEventListener('click', e => {
    greetContent.textContent = "Rio";
  })

  foxBTN.addEventListener('click', e => {
    greetContent.textContent = "Fox";
  })

  duterteBTN.addEventListener('click', e => {
    greetContent.textContent = "Duterte";
  })

  rizalBTN.addEventListener('click', e => {
    greetContent.textContent = "Rizal";
  })

  chenBTN.addEventListener('click', e => {
    greetContent.textContent = "Chen";
  })

  jianeBTN.addEventListener('click', e => {
    greetContent.textContent = "Jiane";
  })

  helloBTN.addEventListener('click', e => {
    var content = greetContent.textContent;
    switch (content){
      case "Rio":
        greetContent.textContent = "Hello Rio"
        break;
      case "Fox":
      greetContent.textContent = "Hello Fox"
      break;
      case "Duterte":
        greetContent.textContent = "Hello Duterte"
        break;
      case "Rizal":
      greetContent.textContent = "Hello Rizal"
      break;
      case "Chen":
        greetContent.textContent = "Hello Chen"
        break;
      case "Jiane":
      greetContent.textContent = "Hello Jiane"
      break;
      default:
      greetContent.textContent = "Hello " + document.querySelector(".input-name").value;
      
    }
  })

  goodbyeBTN.addEventListener('click', e => {
    var content = greetContent.textContent;
    switch (content){
      case "Rio":
        greetContent.textContent = "Goodbye Rio"
        break;
      case "Fox":
      greetContent.textContent = "Goodbye Fox"
      break;
      case "Duterte":
        greetContent.textContent = "Goodbye Duterte"
        break;
      case "Rizal":
      greetContent.textContent = "Goodbye Rizal"
      break;
      case "Chen":
        greetContent.textContent = "Goodbye Chen"
        break;
      case "Jiane":
      greetContent.textContent = "Goodbye Jiane"
      break;
      default:
      greetContent.textContent = "Goodbye " + document.querySelector(".input-name").value;
    }
  })
})();