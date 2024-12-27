// arguments object

function addNumbers() {
  let sum = 0;
  for (let index = 0; index < arguments.length; index++) {
    sum += arguments[index];
  }
  return sum;
}
// console.log(addNumbers(1, 2, 3));

// IIFE

(function () {
  console.log("I am IIFE");
})();

// impure function
let count = 0;

function counter() {
  count++;
  return count;
}

// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

// pure function
function add(a, b) {
  return a + b;
}

// console.log(add(2, 3));

// callback function

function greet(fullname, callback) {
  console.log(`Hello ${fullname}`);
  callback();
}
function sayHi() {
  console.log("It's nice to meet you!");
}
greet("Rakesh", sayHi);

// Using Anonymous Functions as Callbacks
function calc(a, b, cb) {
  const result = cb(a, b);
  console.log(`The result is ${result}`);
}
// calc(2, 3, (x, y) => x + y);

function printResult(result) {
  console.log(`The result is ${result}`);
}
function addition(a, b) {
  return a + b;
}
function subtraction(a, b) {
  return a - b;
}
function mutliplication(a, b) {
  return a * b;
}
function division(a, b) {
  return a / b;
}
function calculate(operation, a, b, cb) {
  let result = 0;
  switch (operation) {
    case "addition":
      result = addition(a, b);
      break;
    case "subtraction":
      result = subtraction(a, b);
      break;
    case "mutliplication":
      result = mutliplication(a, b);
      break;
    case "division":
      result = division(a, b);
      break;

    default:
      console.log(`Give proper credentials`);
      break;
  }
  cb(result);
}

calculate("addition", 2, 4, printResult);


// Higher order function

function namaste(fullname, cb){
  const message = `Hello ${fullname},`;
  return cb(message);
}

function message(greet){
  return `${greet} It's nice to meet you!`;
}

console.log(namaste("Kunal", message));