import { name, age, load, gameMaster } from "./modules.js";
import * as readline from "readline";
import { questions } from "./questions.js";
// LOADING INFO

load();
const user = new gameMaster( "Jeremy Clarkson");
let gameState = 0;
let userScore = 0;
const winScore = 2;

console.log(user);
console.log(user.getDetails());
// INPUT
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// enter name and age and shows
rl.question('Enter your name: ', function (x) {
  rl.question('Enter your age: ', function (y) {
      var Name1 = x.toString();
      var Age1 = parseFloat(y);
      name(Name1)
      age(Age1)
    // if(18<=age && age <=80) return true;
    //   else {
    //   return false;
             
      startGame();
      // gameState=1;
      rl.close();
      
    });
  });

function startGame() {
    console.log("Game started!")
    // if (gameState === 1) {
    getQuestion();
    
}

function getQuestion() {
    var arrlength = questions.games[0].questions.length;
    var randomNumber = Math.floor(Math.random() * arrlength);
    var randomQuestion = questions.games[0].questions[randomNumber];

    console.log(randomQuestion.question);
    for (let answer of randomQuestion.content) {
        console.log(answer);
    }

    rl.question('Enter your Answer: ', function(answer) {
        var myAnswer = parseFloat(answer);
        ans(myAnswer);
        rl.close();
    });
    checkAnswer(randomQuestion.correct);
}
   

function checkAnswer(userInput, correctAnswer) {
    if(correctAnswer === userInput) {
        console.log('Correct');
        userScore++;
    } else {
        console.log('Incorrect! Try again for your chance to win one million pounds');
        userScore=0;
    }
    
    console.log(`Score is: ${userScore}`);
}

// ENTER ANSWER


// console.log(questions);

//check answer
// function checkAnswer(input) {
//    if (input === question_answer) {
//       userScore++;
//       checkForWin();

//       // add to the user's score OR
//       // win the game
//   }
  
// }

//another way to keep track of player's score
/* let score = 0;
function checkAnswer(myAnswer) {
if(myAnswer === randomQuestion.content) {
console.log('Correct');
score += (money gained or points);
} else {
console.log('Incorrect');
console.log('Try again for your chance to win one million pounds');
score = 0
}
}
console.log('Score is: ',score);
}

*/