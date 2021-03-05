import { name, age, load, gameMaster, UserPerson } from "./modules.js";
import * as readline_sync from "readline-sync";
import { questions } from "./questions.js";
import * as figlet from "figlet";
// LOADING INFO

load();
const gameHost = new gameMaster( "Jeremy Clarkson");
let user = new UserPerson(" ");
let userScore = 0;
const winScore = 15;

// console.log(user);
console.log(user.getName());
startGame();

function startGame() {
  let name = readline_sync.question('What is your name? ');
  user.assignName(name);
  if (readline_sync.keyInYN(`Hello ${user.getName()}! Are you ready to become a millionaire? Hit Y/N`)){
    console.log("Let's begin!");
    getQuestion();
  } else {
    console.log("Alright then, have a good day!");
  }
}

function earningsAndComments() {
  if (userScore == 0) {
    console.log(`
    
    *****

    Your first question:
    
    *****`)
  }
  if (userScore == 5) {
    console.log(`
    
    **** Staged reached ****
    
    Congratulations ${user.getName()}, you've made it to £1,000.
    
    
    Next question:`)
  }
  if (userScore == 10) {
    console.log(`
    
    **** Stage reached ****
    
    Congratulations, you've made it to £32,000.

    You've done well, ${user.getName()}. There's not much more left to go.
    
    Final few questions:`)
  }
  if (userScore == 14) {
    console.log(`

    -----******** FINAL QUESTION ********-----

    This is your final question, ${user.getName()}

    ...for the million pound jackpot...
    
    `)
  }
}

function getQuestion() {
  earningsAndComments();
  var arrlength = questions.games[0].questions.length;
  var randomNumber = Math.floor(Math.random() * arrlength);
  var randomQuestion = questions.games[0].questions[randomNumber];

  let userInput = readline_sync.keyInSelect(randomQuestion.content, randomQuestion.question);
  
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
    figlet.text("Congratulations", {
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 100,
      whitespaceBreak: true
    }, function(err, data) {
      if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
      }
    console.log(data);
    });

    console.log(`
    
    ****************************************
    
    ${user.getName()}, you are now a millionaire!!
    
    Enjoy your newfound riches`)
  } else {
    console.log(`
    
    --------------------------------------------------

    Unfortunately that was the incorrect answer

    --------------------------------------------------


    Better luck next time ${user.getName()}, thank you for playing!`);
  }
}