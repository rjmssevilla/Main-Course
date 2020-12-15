let Question = function (question, answer, correctAnswer) {
    this.question = question;
    this.answer = answer;
    this.correctAnswer = correctAnswer;
    this.askQuestion = function () {
        var randomNumber = Math.floor(Math.random() * 3)
        randomNumber;
        questionsArray[randomNumber]
        console.log(this.question)
        console.log(this.answer)
    }
    this.checkAnswer = function (answer) {
        if (answer == this.correctAnswer) {
            console.log('Correct Answer');
            gameScore++
        } else {
            console.log('Incorrect Answer');
        }
    }
};


let isGameRunning = true;
let questionNumber = 0;
var question1 = new Question("How many members are there in TWICE?", ["7", "8", "9"], '8');
var question2 = new Question("Who is the main dancer in TWICE?", ["Momo", "Dahyun", "Nayeon"], 'Momo');
var question3 = new Question("What year did TWICE debut?", ["2014", "2015", "2016"], '2015');
let questionsArray = [question1, question2, question3];
var gameScore = 0;

// BUG 1: change correct answer to string instead of index number
// BUG 2: remove console.log which reveals random number in line 7

// BUG 3: introduce randomNumber into question selection
// BUG 4: change console.log display such that options are more readable



(function start() {
    while (isGameRunning) {
        const currentQuestion = questionsArray[questionNumber];
        let tempAnswer = prompt(currentQuestion.askQuestion());
        currentQuestion.checkAnswer(tempAnswer);
        console.log('%c Current Score:', 'color: blue; font-size: 14px', gameScore)
    }

})();