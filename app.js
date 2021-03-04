import { name, age, load, gameMaster, startGame, getQuestion } from "./modules.js";
import * as readline from "readline";
// LOADING INFO
load();
const user = new gameMaster( "Jeremy Clarkson");
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

      rl.close();
  });
});
// test comment



// display


