import { A, B, C, D, load, User } from "./module.js";
import * as readline from "readline";

load();
const user = new User( "joe", 24, "yes@outlook.com");
console.log(user);
console.log(user.getDetails());

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a number: ', function (x) {
  rl.question('Enter another number: ', function (y) {
      var A_answer = parseFloat(x) + parseFloat(y);
      var B_answer = parseFloat(x) - parseFloat(y);
      var C_answer = parseFloat(x) * parseFloat(y);
      var D_answer = parseFloat(x) / parseFloat(y);
      A(A_answer)
      B(B_answer)
      C(C_answer)
      D(D_answer)

      rl.close();
  });
});
// test comment
