export function load() {
  console.log("Who Wants to be a Millionaire!")
}
export class gameMaster {
  constructor(name) {
    this.name = name;
       
    }
    getDetails(){
      return `
      Game Master: ${this.name},
      `;
    }
}

export class UserPerson {
  constructor(name) {
    this.name = name;  
    }
    assignName(newUserName){
    this.name = newUserName;
    }

    getName(){
      return this.name;
    }
}

export function name(number) {
  // Insert code to do whatever with sum here.
  console.log('Name: ', number) ;
}
export function age(number2) {
  console.log('Age: ', number2) ;
}
export function ans(number3) {
  console.log("Correct!", number3);
}

// // Function to the start the game
// export function startGame() {
// }
// // Function to display question
// export function getQuestion() {
// }
// // Function to show options
// export function selectOption() { 
// }
// export function checkForWin() {

// }