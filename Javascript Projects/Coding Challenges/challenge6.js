(function(){
  var Question= function(question,choices,correctAnswer){
  this.question = question;
  this.choices = choices;
  this.correctAnswer = correctAnswer;
  this.generateQuestion = function(){
    console.log(this.question);
      
      for (var i = 0; i < this.choices.length; i++) {
          console.log(i + ': ' + this.choices[i]);
      }
  };
  this.checkAnswer =function(answer) {
      if (answer == this.correctAnswer){
        console.log("Your answer is correct!");
      } else if (answer != this.correctAnswer){
        console.log("Your answer is wrong!")
      }
    };
  };

var question1 = new Question("How many members are there in TWICE?", ["4","6","9"], 2);
var question2 = new Question("Who is the main dancer in TWICE?", ["Momo","Dahyun","Nayeon"], 0);
var question3 = new Question("Who is the leader in TWICE?", ["Nayeon","Sana","Jihyo"], 2);
var question4 = new Question("Who is the maknae in TWICE?", ["Nayeon","Tzuyu","Jihyo"], 1);
var question5 = new Question("What year did TWICE debut?", ["2014","2015","2016"], 1);

var arrayOfQuestions = [question1, question2, question3, question4, question5];
var generateNum = Math.floor(Math.random() * 5) + 1 ;

arrayOfQuestions[generateNum].generateQuestion();
var answer = parseInt(prompt('Please select the correct answer.'));
arrayOfQuestions[generateNum].checkAnswer(answer);
})();

