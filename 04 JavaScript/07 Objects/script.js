// Object

const person = {
  name: "John Doe", // key-value pair
  age: 30, // key-value pair
  occupation: "Developer", // key-value pair
};

// accessing an object, 1. Dot (.) notation 2. Bracket ( [] ) notation
console.log(person.age);
console.log(person["occupation"]);

// built in methods

const obj = { name: "Alice", age: 25 };
console.log(Object.keys(obj)); // Output: ["name", "age"]

console.log(Object.values(obj)); // Output: ["Alice", 25]

console.log(Object.entries(obj)); // Output: [["name", "Alice"], ["age", 25]]

const frozenObj = Object.freeze({ key: "value" });
frozenObj.key = "newValue"; // Error in strict mode
console.log(frozenObj.key); // Output: value

const sealedObj = Object.seal({ key: "value" });
sealedObj.key = "newValue"; // Allowed
sealedObj.newKey = "notAllowed"; // Error

const target = { a: 1 };
const source = { b: 2, c: 3 };
Object.assign(target, source);
console.log(target); // Output: { a: 1, b: 2, c: 3 }

// optional chaining

// without optional chaining

const user = {
  username: "Sunil",
  age: 25,
  address: {
    city: "Bengaluru",
  },
  greet() {
    return "Hello!";
  },
};

// Accessing a deeply nested property
console.log(user.address.city);
// Accessing a non-existent property
// console.log(user.job.salary); // TypeError: Cannot read properties of undefined

// to fix
console.log(user?.address?.pincode); // undefined

// Accessing properties dynamically
console.log(user.address?.["area"]);

// calling method
console.log(user.greet?.());

// Chaining of methods and giving this context

const superHeros = {
  superHeroName: "Flash",
  ability: "speed",
  printDetails: function () {
    console.log(
      `The superhero is ${this.superHeroName} and the ability is ${this.ability}`
    );
    return this;
  },
};
superHeros.printDetails().printDetails();
