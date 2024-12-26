# Conditionals and Loops

# Conditionals

Conditionals is all about making decisions. So when we are given with the problem we must ask the input and output, contraints and edge cases.

## if conditionals

There are three types

1. if
2. if-else
3. if-else-if

### If Statement

Executes a block of code only if a specified condition is true.

```JS
if (condition) {
  // code to be executed
}
```

### If-Else Statement

Executes one block of code if the condition is true, and
another block if it’s false.

```JS
if (condition) {
  // code to be executed if condition is true
} else {
  // code to be executed if condition is false
}
```

### If-Else If-Else Statement

Checks multiple conditions in sequence, executing the first true condition.

```JS
if (condition1) {
  // code to be executed if condition1 is true
} else if (condition2) {
  // code to be executed if condition1 is false and condition2 is true
} else {
  // code to be executed if all conditions are false
}
```

### Nested If Statement

Used to check a condition inside another condition.

```JS
if (condition1) {
  if (condition2) {
    // code to be executed if both condition1 and condition2 are true
  }
}
```

### Ternary Operator

Shorthand way of writing if-else statements.

```JS
condition ? codeToExecuteIfTrue : codeToExecuteIfFalse;
```

### Switch Statement

You combine and write it in efficient way

```JS
switch (expression) {
  case value1:
    // code to be executed if expression equals value1
    break;
  case value2:
    // code to be executed if expression equals value2
    break;
  default:
    // code to be executed if expression doesn't equal any of the values
}
```

# Loops

Loop is helpful when you want to do the same task multiple times.

1. for loop
2. while loop - use it when you don't know the number of repetations
3. do while loop - it will run atleast once

## Controlled statements - break and continue

break - stop the repetations or stop the execution when the condition met
continue - use it when you want to skip some steps

