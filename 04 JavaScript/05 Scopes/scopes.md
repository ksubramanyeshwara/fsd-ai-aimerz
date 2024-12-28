# Scope

Scope refers to the region where variables, functions, and objects are visible and accessible.

Scope determines where you can use or reference a variable or function or object in your code.

1. Global Scope

   - Variables declared outside any function or block are in the global scope.
   - These variables can be accessed from anywhere in the code.

2. Local Scope/Function Scope

   - Variables declared within a function and they can only be accessed within that function.

3. Block Scope
   - Variables declared with `let` or `const` within a block `{...}` (e.g., if, switch, loop) have block scope. They can only be accessed within that block.

## Differeneces between var, let and const

**var**

- Function scope
- Can be redeclared
- Can be reassigned

**let**

- Block scope
- Cannot be redeclared
- Can be reassigned

**const**

- Block scope
- Must be initialized when declared
- Cannot be redeclared
- Cannot be reassigned

## Hoisting

It is a behavior of moving variable and function declaration to the top of their scope during the compilation phase, before the code is executed.

### Variable declared with `var`

- `var` is hoisted and initialized to `undefined`.
- You can use a `var` variable before its declaration, but its value will be `undefined`.

  ```JS
  console.log(a); // Output: undefined
  var a = 10;
  console.log(a); // Output: 10
  ```

  Internally, the code above is interpreted as,

  ```JS
  var a;         // Declaration is hoisted
  console.log(a); // undefined
  a = 10;        // Initialization happens here
  console.log(a); // 10
  ```

### Variables declared with `let` and `const`:

- `let` and `const` are hoisted, but they are not initialized.
- Accessing them before their declaration results in a `ReferenceError` because they are in the **temporal dead zone (TDZ)**

### Temporal Dead Zone (TDZ)

- The TDZ starts at the beginning of the scope (`block`, `function`, or `module`) where the variable is created.
- The TDZ ends when the JavaScript engine encounters the variable's declaration (for `let`, `const`, or `class`).

**Key Details to Remember**

- For `let` and `const`, the TDZ applies because these variables are hoisted but not initialized.
- Accessing the variable in the TDZ (before the declaration) will throw a `ReferenceError`.
- The TDZ ensures that variables are only accessed after their declaration, improving code safety.

  ```JS
  console.log(a); // ReferenceError: Cannot access 'a' before initialization
  console.log("Temporal Dead Zone Example");
  let a = 10; // Declaration ends the TDZ
  console.log(a); // Output: 10
  // From line number one to three is the TDZ
  ```

  > TDZ applies only to the variable because function is fully hoisted

### Function Declarations:

- Function declarations are fully hoisted (both name and body).
- You can call a function even before its definition in the code.

  ```JS
  greet(); // Output: Hello!

  function greet() {
      console.log("Hello!");
  }
  ```

  Internally, it’s like:

  ```JS
  function greet() {
      console.log("Hello!");
  }

  greet();
  ```

### Function Expressions (var, let, or const):

- Functions assigned to variables are not fully hoisted.
- Only the variable declaration is hoisted (not the function definition)

    With `var`:

    ```js
    console.log(sayHello); // Output: undefined
    var sayHello = function () {
        console.log("Hi!");
    };
    ```

    With `let` or `const`:

    ```js
    console.log(sayHi); // ReferenceError: Cannot access 'sayHi' before initialization
    let sayHi = function () {
        console.log("Hi!");
    };
    ```

### Class Declarations:

- Class declarations are hoisted, but they are not initialized.
- Accessing a class before its declaration results in a `ReferenceError`.

    ```JS
    const obj = new MyClass(); // ReferenceError: Cannot access 'MyClass' before initialization

    class MyClass {
    constructor() {
        this.name = "JavaScript";
        }
    }
    ```


**Key Points to Remember**
- var is hoisted with a value of undefined. Avoid using var to prevent confusion.
- let and const are hoisted, but are in the temporal dead zone (TDZ) until their declaration.
- Function declarations are fully hoisted, making them accessible anywhere in their scope.
- Function expressions and class declarations are hoisted, but their initializations are not.

## Lexical Scope

Lexical scope determines the accessibility of variables and functions based on their location.

It ensures that a nested function has access to variables declared in its own scope and in its outer (parent) scopes.

This behavior is what makes closures and scope chaining work in JavaScript.

### Lexical Environment

Lexical environment is a data structure that stores the variables, functions, and bindings of a specific scope.

**A lexical environment consists of two main components:**
- Environment Record: This is an object that stores the variables, functions, and bindings of the current scope.
- Outer Environment Reference: This is a reference to the outer lexical environment, which allows JavaScript to traverse the scope chain.

## Scope Chain

Scope chain is a sequance of lexical environment, where each environment has link to its parents envirornment forming a chain.


## Closure

Closure is a function that has access to its own scope, as well as the scope of its outer functions, even when the outer functions have returned.

**How it works:**

- An outer function is created with variable that has access to its scope.
- An inner function is defined inside an outer function and has access to its scope and its parents scope.
-  When the inner function is returned, it retains a reference to the variables in the outer function's scope, even after the outer function has finished executing.

```JS
function outer() {
  let counter = 0;

  function inner() {
    counter++;
    console.log(counter);
  }

  return inner;
}

const incrementCounter = outer();
incrementCounter(); // 1
incrementCounter(); // 2
incrementCounter(); // 3
```

