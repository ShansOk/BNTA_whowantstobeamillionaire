import { name, age, load, gameMaster } from "./modules.js";
import * as readline_sync from "readline-sync";
import { questions } from "./questions.js";
// LOADING INFO

load();
const user = new gameMaster( "Jeremy Clarkson");
let gameState = 0;
let userScore = 0;
const winScore = 2;

console.log(user);
console.log(user.getDetails());
startGame();
// INPUT

// var rl = readline_sync.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });


// enter name and age and shows
// rl.question('Enter your name: ', function (x) {
//   rl.question('Enter your age: ', function (y) {
//       var Name1 = x.toString();
//       var Age1 = parseFloat(y);
//       name(Name1)
//       age(Age1)
//     // if(18<=age && age <=80) return true;
//     //   else {
//     //   return false;
             
//       startGame();
//       // gameState=1;
//       rl.close();
      
//     });
//   });



function startGame() {
    var name = readline_sync.question('What is your name? ');
    // var age = readline_sync.question('How old are you? ');
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
    // console.log(randomQuestion.question);
    // for (let i = 1; i <= randomQuestion.content.length; i++) {
    //     console.log(i + " " + answer);
    // }
    console.log(userInput);
    checkAnswer(userInput, randomQuestion.correct)
    // rl.question('Hit the key for an answer, 1-4: ', function(answer) {
    //     var myAnswer = parseInt(answer);
    //     //ans(myAnswer);
    //     checkAnswer(myAnswer,randomQuestion.correct);
    // });
}


function checkAnswer(userInput, correctAnswer) {
    if( (userInput) === correctAnswer) {
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