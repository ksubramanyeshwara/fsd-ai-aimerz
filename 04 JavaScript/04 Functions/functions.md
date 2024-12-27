# Function

It is a reusable block of code, performs a specific task, and returns a value.

```JS
// inside the paranthesis is parameter
// function sayHello(name){
// parameter with default value
function sayHello(name = 'user'){
    return `Hello ${name}`
}
// inside the paranthesis is argument
console.log(sayHello("Mithun"))
```

### Arguments Object

Arguments object is an array-like object that contains the values of the arguments passed to a function.

```JS
function addNumbers() {
  let sum = 0;
  for (let index = 0; index < arguments.length; index++) {
    sum += arguments[index];
  }
  return sum;
}
console.log(addNumbers(1, 2, 3));
```

## functions are first-class citizens

In JavaScript, functions are considered first-class citizens because,

1. Functions can be assigned to variables, Also called as `function expression`

   ```JS
   const greet = function(name) {
   console.log(`Hello, ${name}!`);
   };

   greet("John"); // Output: Hello, John!
   ```

2. Functions can be passed as arguments to other functions,

   ```JS
   function execute(func) {
   func();
   }

   const sayHello = function() {
   console.log("Hello!");
   };

   execute(sayHello); // Output: Hello!
   ```

3. Functions can return other functions.

   ```JS
   function createGreet(name) {
   return function() {
       console.log(`Hello, ${name}!`);
       };
   }

   const greetJohn = createGreet("John");
   greetJohn(); // Output: Hello, John!
   ```

## Arrow function

Arrow functions does not support the `this` binding

```JS
const arrowFun = () =>{
    return `This is arrow function`
}
```

## Implicit Return and Explicit Return

### Implicit Return:

An implicit return occurs when a function returns a value without using the return keyword.

```JS
const add = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5
```

### Explicit Return

An explicit return occurs when a function uses the return keyword to specify the value to be returned.

```JS
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // Output: 5
```

## Recursive function or Recursion

## IIFE - Immidiatly invoked function expression

```JS
(function () {
  console.log("I am IIFE");
})();
```

## pure and impure function

### Pure Functions

- Always returns the same output given the same inputs: The output of a pure function depends only on its inputs and not on any external state.
- Has no side effects: A pure function does not modify any external state, such as variables outside the function or database records.
- Does not depend on external state: A pure function does not rely on any external state, such as global variables or user input.

```JS
function add(a, b) {
  return a + b;
}

console.log(add(2, 3));
```

### Impure Functions:

- Returns different outputs given the same inputs: The output of an impure function depends on external state or side effects.
- Has side effects: An impure function modifies external state, such as variables outside the function or database records.
- Depends on external state: An impure function relies on external state, such as global variables or user input.

```JS
let count = 0;

function counter() {
  count++;
  return count;
}

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

// side effect is that inside operation changing the outside value
```

## Lambda expression

It is a simple, anonymous function expression. Arrow function can be a lambda expression.

Lambda expression do not bind their own `this`, `arguments`, `super`, or `new.target`.

**Common Use Cases**
- Functional Programming: `.map()`, `.filter()`, `.reduce()`, etc.
- Callbacks: Event listeners or async functions.
- Short Inline Functions: Simplifying code readability.

## Callback function

A function that is passed as an argument to another function and is executed by that function later or some condition are met.

**Why Use Callback Functions?**
- Asynchronous Programming: Handle operations like reading files, fetching data from APIs, or waiting for user interactions.
- Reusability: Decouple logic by passing different functions as callbacks.
- Control Flow: Determine what happens after an operation completes.


## Higher order function (HOF)

Higher-order function (HOF) is a function that takes another function as an argument, or returns a function as a result.
It is possible because functions are first-class citizens