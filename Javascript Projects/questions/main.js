let Question = function (question, answer, correctAnswer) {
    this.question = question;
    this.answer = answer;
    this.correctAnswer = correctAnswer;
    this.askQuestion = function () {
        console.log(this.question)
        console.table(this.answer)
    }
    this.checkAnswer = function (answer) {
        if (answer == this.correctAnswer) {
            console.log('Correct Answer');
            gameScore++;
        } else {
            console.log('Incorrect Answer');
        }
    }
};

let isGameRunning = true;
let questionNumber = 0;

var question1 = new Question("How many members are there in TWICE?", ["7", "8", "9"], 2);
var question2 = new Question("Who is the main dancer in TWICE?", ["Momo", "Dahyun", "Nayeon"], 0);
var question3 = new Question("What year did TWICE debut?", ["2014", "2015", "2016"], 1);
let questionsArray = [question1, question2, question3];
var gameScore = 0;



// BUG 1: remove console.log which reveals random number in line 7

// BUG 2: introduce randomNumber into question selection
// BUG 3: change console.log display such that options are more readable




(function start() {
    while (isGameRunning) {
        var randomNumber = Math.floor(Math.random() * 3);
        const currentQuestion = questionsArray[randomNumber];
        let tempAnswer = prompt(currentQuestion.askQuestion());

        currentQuestion.checkAnswer(tempAnswer);
        console.log('%c Current Score:', 'color: blue; font-size: 14px', gameScore)

        if (tempAnswer == "exit"){
            isGameRunning = false;
        }
    
    }
})();
