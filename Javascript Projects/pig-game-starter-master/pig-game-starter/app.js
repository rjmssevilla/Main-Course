/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result gets added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
/*----------VARIABLE DECLARATIONS----------*/
//Store panels into variables
var gamePanel = document.querySelector(".game-panel");

//----------BUTTON VARIABLES------------
//Store the start button into a variable
var startButton = document.querySelector(".btn-start");
//Store the roll button into a variable
var rollButton = document.querySelector(".btn-roll");
//Store the hold button into a variable
var holdButton = document.querySelector(".btn-hold");
//Store the new button into a variable
var newButton = document.querySelector(".btn-new");
//Store the reset wins button into a variable
var resetwinButton = document.querySelector(".btn-reset");
//Store the back button into a variable
var backButton = document.querySelector(".btn-back");

//Store the dice image into a variable
var dice = document.querySelector(".dice");

//Store the player 1 and player 2 current score into a variable
var Player1CurrentScore = document.getElementById("current-0");
var Player2CurrentScore = document.getElementById("current-1");

//Store the player 1 and player 2 global score into a variable
var Player1GlobalScore = document.getElementById("score-0");
var Player2GlobalScore = document.getElementById("score-1");

//To know which player is active, 0 = player one, 1 = player two
var currentPlayer = 0;

//Store players 1 and 2 panel variables
var player1Panel = document.querySelector(".player-0-panel");
var player2Panel = document.querySelector(".player-1-panel");

//Store players 1 and 2 name into variables
var player1Name = document.getElementById("p1Name");
var player2Name = document.getElementById("p2Name");

//Store winning-number
var numberToWin = document.getElementById("required-points");

//Store audio variables
var winSound = new Audio("/pig-game-starter-master/audio/win.mp3");
var backgroundMusic = new Audio("/pig-game-starter-master/audio/bgmusic.mp3");
var awwSound = new Audio("/pig-game-starter-master/audio/aww.mp3");
var holdSound = new Audio("/pig-game-starter-master/audio/hold.mp3");

//Store player 1 and player 2 total wins
var player1Wins = document.getElementById("wins-0");
var player2Wins = document.getElementById("wins-1");
var player1Counter = document.getElementById("player0-counter");
var player2Counter = document.getElementById("player1-counter");

////Store player 1 and player 2 roll notif
var player1RollNotif = document.getElementById("player0-notif");
var player2RollNotif = document.getElementById("player1-notif");


//PLAY BACKGROUND MUSIC
backgroundMusic.play();
backgroundMusic.volume = 0.1;
/*----------END OF VARIABLE DECLARATIONS----------*/

gamePanel.style.visibility = "hidden";
player1RollNotif.style.visibility="hidden";
player2RollNotif.style.visibility="hidden";

/*When clicking the start button*/
startButton.addEventListener('click', e => {
  gamePanel.style.visibility = "visible";
  rollButton.style.visibility = "visible";
  holdButton.style.visibility = "visible";
  document.getElementById("name-0").textContent = player1Name.value;
  document.getElementById("name-1").textContent = player2Name.value;
})


/*When clicking the roll dice button*/
rollButton.addEventListener('click', e => {
  var diceNumber = Math.floor(Math.random() * 6) + 1; 
  dice.setAttribute("src", "dice-"+diceNumber+".png")
    if (currentPlayer == 0){
      if (diceNumber != 1){
        Player1CurrentScore.textContent = diceNumber + parseInt(Player1CurrentScore.textContent);
      }
      else{
        awwSound.play();
        player1Panel.classList.add("apply-shake");
        player1RollNotif.style.visibility="visible";
        player2RollNotif.style.visibility="hidden";
        nextPlayer();
      }  
    }

    else if (currentPlayer == 1){
      if (diceNumber != 1){
        Player2CurrentScore.textContent = diceNumber + parseInt(Player2CurrentScore.textContent);
      }
      else{
        awwSound.play();
        player2Panel.classList.add("apply-shake");
        player2RollNotif.style.visibility="visible";
        player1RollNotif.style.visibility="hidden";
        nextPlayer();
      }
    }
})

/*When clicking the hold button*/
holdButton.addEventListener('click', e => {
  holdSound.play();
  player1RollNotif.style.visibility="hidden";
  player2RollNotif.style.visibility="hidden";
 if (currentPlayer == 0){
    Player1GlobalScore.textContent = parseInt(Player1GlobalScore.textContent)+parseInt(Player1CurrentScore.textContent);
    //player wins condition
    if (parseInt(Player1GlobalScore.textContent) >=parseInt(numberToWin.value)){
      player1Counter.textContent = parseInt(player1Counter.textContent) + 1;
      console.log(player1Counter)
      Player1GlobalScore.style.color = "#32CD32";
      Player1GlobalScore.textContent = "Winner";
      winSound.play();
      rollButton.style.visibility = "hidden";
      holdButton.style.visibility = "hidden";
    }
    else{
      nextPlayer();
    }
    
 }
 else if (currentPlayer == 1){
    Player2GlobalScore.textContent = parseInt(Player2GlobalScore.textContent)+parseInt(Player2CurrentScore.textContent);
    //player wins condition
    if (parseInt(Player2GlobalScore.textContent) >=parseInt(numberToWin.value)){
      player2Counter.textContent = parseInt(player2Counter.textContent) + 1;
      Player2GlobalScore.style.color = "#32CD32";
      Player2GlobalScore.textContent = "Winner";
      winSound.play();
      rollButton.style.visibility = "hidden";
      holdButton.style.visibility = "hidden";
    }
    else{
      nextPlayer();
    }
}
})

/*When clicking the new game button*/
newButton.addEventListener('click', e => {
  Player1CurrentScore.textContent = "0";
  Player2CurrentScore.textContent = "0";
  currentPlayer = 0;
  Player1GlobalScore.textContent = "0";
  Player2GlobalScore.textContent = "0";
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
  rollButton.style.visibility = "visible";
  holdButton.style.visibility = "visible";
  Player1GlobalScore.style.color = "#EB4D4D";
  Player2GlobalScore.style.color = "#EB4D4D";
  player1RollNotif.style.visibility="hidden";
  player2RollNotif.style.visibility="hidden";
})

resetwinButton.addEventListener('click', e => {
  player1Counter.textContent = "0"
  player2Counter.textContent = "0"
})

/*When clicking the back button*/
backButton.addEventListener('click', e => {
  gamePanel.style.visibility = "hidden";
  rollButton.style.visibility = "hidden";
  holdButton.style.visibility = "hidden";
  player1RollNotif.style.visibility="hidden";
  player2RollNotif.style.visibility="hidden";
})

player1Panel.addEventListener("animationend", (e) => {
  player1Panel.classList.remove("apply-shake");
});

player2Panel.addEventListener("animationend", (e) => {
  player2Panel.classList.remove("apply-shake");
});


function nextPlayer() {
	currentPlayer === 0 ? currentPlayer = 1 : currentPlayer = 0;

	document.querySelector('#current-0').textContent = '0';
	document.querySelector('#current-1').textContent = '0';

	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');
}

function playRoll() {
  var audio = document.getElementById("audio");
  audio.play();
}




