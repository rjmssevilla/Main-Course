# Questions

## Coding Challenge: Basic

* Let's build a fun quiz game in the console!

* Build a function constructor called `Question` to describe a question. A question should include:
  * Question itself
  * The answers from whicih the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
  * Correct answer(I would use a number for this.)
  
* Create a couple of questions using the constructor

* Store them all inside an array.

* Select one random question and log it on the console, together with possible answers (each question should have a number) (Hint: write a method for the Question objects for this task)
* Use the `prompt` function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

* Check if the answer is correct and print to the console whether the answer is correct or not (Hint: write another method for this)

* Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that.)


## Coding Challenge: Expert

* After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

* Be careful: After Task 8, the game literally never ends. So include the option to quit the game if the user write `exit` instead of the answer. In this case, don't call the function from Task 8,

* Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (hint: I'm going to user the power of closures for thi, but you don't have to, just do this with the tools you feel more comfortable at this point.)

* Display the score in the console. Use yet another method for this.
