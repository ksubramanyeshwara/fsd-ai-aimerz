// closure

function outer() {
  let counter = 0;

  function inner() {
    counter++;
    console.log(counter);
  }

  return inner;
}

const incrementCounter = outer(); // executes the outer function, returns the inner function, and stores it in the incrementCounter variable.
incrementCounter(); // 1
incrementCounter(); // 2
incrementCounter(); // 3