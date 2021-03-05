import { name, age, load, gameMaster } from "./modules.js";
import * as readline_sync from "readline-sync";
import { questions } from "./questions.js";
// LOADING INFO

load();
const user = new gameMaster( "Jeremy Clarkson");
let userScore = 0;
const winScore = 15;

// console.log(user);
console.log(user.getDetails());
startGame();

function startGame() {
  var name = readline_sync.question('What is your name? ');
  if (readline_sync.keyInYN(`OK ${name}, are you ready to become a millionaire? Hit Y/N`)){
    console.log("Let's begin!");
    getQuestion();
  } else {
    console.log("Alright then, have a good day!");
  }
}

function getQuestion() {
  var arrlength = questions.games[0].questions.length;
  var randomNumber = Math.floor(Math.random() * arrlength);
  var randomQuestion = questions.games[0].questions[randomNumber];

  let userInput = readline_sync.keyInSelect(randomQuestion.content, randomQuestion.question);
  
  console.log(userInput);
  checkAnswer(userInput, randomQuestion.correct)
}

function checkAnswer(userInput, correctAnswer) {
  if( userInput === correctAnswer) {
      console.log('Correct');
      userScore++;
      checkForWin()
  } else {
      endGame();
  };
}

function checkForWin() {
  if (userScore < winScore) {
    getQuestion();
  } else if (userScore == winScore) {
    endGame();
  }
}

function endGame() {
  console.log("Game finished");
  if (userScore == winScore) {
    console.log(`Your score is ${userScore}
    You are now a Millionaire!!!`)
  } else {
    console.log("better luck next time");
  }
}