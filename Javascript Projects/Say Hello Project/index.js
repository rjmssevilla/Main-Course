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
  var clearBTN = document.querySelector(".btn9")


  var person = "";
  submitBTN.addEventListener('click', e => {
    greetContent.textContent = document.querySelector(".input-name").value;
    person = document.querySelector(".input-name").value;
  })

  rioBTN.addEventListener('click', e => {
    greetContent.textContent = "Rio";
    person="Rio"
  })

  foxBTN.addEventListener('click', e => {
    greetContent.textContent = "Fox";
    person="Fox"
  })

  duterteBTN.addEventListener('click', e => {
    greetContent.textContent = "Duterte";
    person="Duterte"
  })

  rizalBTN.addEventListener('click', e => {
    greetContent.textContent = "Rizal";
    person="Rizal"
  })

  chenBTN.addEventListener('click', e => {
    greetContent.textContent = "Chen";
    person="Chen"
  })

  jianeBTN.addEventListener('click', e => {
    greetContent.textContent = "Jiane";
    person="Jiane"
  })

  helloBTN.addEventListener('click', e => {
    switch (person){
      case "Rio":
        greetContent.textContent = `Hello ${person}`
        break;
      case "Fox":
        greetContent.textContent = `Hello ${person}`
        break;
      case "Duterte":
        greetContent.textContent = `Hello ${person}`
        break;
      case "Rizal":
        greetContent.textContent = `Hello ${person}`
        break;
      case "Chen":
        greetContent.textContent = `Hello ${person}`
        break;
      case "Jiane":
        greetContent.textContent = `Hello ${person}`
        break;
      case "":
        greetContent.textContent = "Hello World"
        break;
      default:
      greetContent.textContent = "Hello " + document.querySelector(".input-name").value;
    }
  })

  goodbyeBTN.addEventListener('click', e => {
    switch (person){
      case "Rio":
        greetContent.textContent = `Goodbye ${person}`
        break;
      case "Fox":
        greetContent.textContent = `Goodbye ${person}`
        break;
      case "Duterte":
        greetContent.textContent = `Goodbye ${person}`
        break;
      case "Rizal":
        greetContent.textContent = `Goodbaye ${person}`
        break;
      case "Chen":
        greetContent.textContent = `Goodbye ${person}`
        break;
      case "Jiane":
        greetContent.textContent = `Goodbye ${person}`
        break;
      case "":
      greetContent.textContent = "Goodbye World"
      break;
      default:
      greetContent.textContent = "Goodbye " + document.querySelector(".input-name").value;
    }
  })

  clearBTN.addEventListener('click', e => {
    greetContent.textContent="";
    person="";
    document.querySelector(".input-name").value = "";
  })
})();