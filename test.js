// import * as readline from "readline";
// import { getQuestion } from "../modules";
import { questions } from "./questions.js";
// import $ from "jquery";


var arrlength = questions.games[0].questions.length;

var randomNumber = Math.floor(Math.random() * arrlength);

var randomQuestion = questions.games[0].questions[randomNumber];



console.log(questions);