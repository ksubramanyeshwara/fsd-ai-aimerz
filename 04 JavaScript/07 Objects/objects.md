# Object

Object is an unordered collection of key-value pairs, where each key can be string or symbol and value can be any data type.

> Key will alwasy be string in Object

## Ways to create object

- {}
- new Object
- Object.create({}) - it will copy the existing object and all the property and methods will be inside the prototype

> study Object.defineProperty() - enumerable

## Object builtin methods

1. Object.keys()
Returns an array of an object's keys names

2. Object.values()
Returns an array of the object's values.

3. Object.entries()
Returns an array of key-value pairs.

4. Object.freeze()
Prevents modification of an object.

5. Object.seal()
Prevents adding or removing properties but allows modification of existing properties.

6. Object.assign()
Copies properties from one or more source objects to a target object.

> These three methods also let us to convert object into arrays

## Optional chaining

It provides a way to safely access deeply nested object properties without explicitly checking if an intermdediate property exists or not

## Nullish Coalescing Operator (??)
It is a logical operator. It allows you to provide a default value for expressions that evaluate to `null` or `undefined`.

`let result = expression1 ?? expression2`

- If expression1 is not nullish (null or undefined), it returns expression1.
- If expression1 is nullish, it returns expression2.

```JS
let userName = null;
console.log(userName ?? "Guest"); // Output: Guest

userName = "Alice";
console.log(userName ?? "Guest"); // Output: Alice
```

## Chaining of methods and giving this context

