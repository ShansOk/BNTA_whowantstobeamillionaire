export function load() {
  console.log("Who Wants to be a Millionaire!")
}
export class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    
    }
    getDetails(){
      return `
      Name: ${this.name},
      Age: ${this.age},
      `;
    }
}
export function A(number) {
  // Insert code to do whatever with sum here.
  console.log('A: ', number) ;
}
export function B(number2) {
  console.log('B: ', number2) ;
}
export function C(number3) {
  console.log('C: ', number3) ;
}
export function D(number4) {
  console.log('D: ', number4) ;
}