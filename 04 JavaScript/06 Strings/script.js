// using single quotes('')
let stringOne = "Single quotes string";

// using double quotes("")
let stringTwo = "Double quotes string";

// using Template literals(``)
let stringThree = `Template literals string`;

// using constructor
let stringFour = new String("Constructor string");

/*
console.log(stringOne);
console.log(stringTwo);
console.log(stringThree);
console.log(stringFour);
*/

// String characters

// Indexing nature
let str = "JavaScript";
/*
console.log(str[0]); // "J"
console.log(str[-1]); // undefined
console.log(str[10]); // undefined
console.log(str[str.length - 1]); // "t" (last character)
*/

// immutability
let greeting = "Hello";
greeting[0] = "h"; // Doesn't change the string
// console.log(greeting); // "Hello"

// unicode
let emoji = "😊";
// console.log(emoji.charCodeAt(0)); // 55357 (UTF-16)
// console.log(emoji.codePointAt(0)); // 128522 (Unicode)

let student = "Sunil";
console.log(student.substring(1, 3));
