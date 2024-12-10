# JavaScript

JavaScript is a synchronous single-threaded language.

- Synchronous - One statement at a time, in the order it appears.
- Single-threaded means it only executes one task at a time.

However, this can lead to blocking operations, where one long-running task prevents subsequent code from executing.

To handle such issues, JavaScript uses asynchronous programming techniques, leveraging:

- Event Loop: Manages asynchronous tasks and ensures the non-blocking execution of code by offloading tasks to the browser or Node.js environment.
- Callbacks: Functions passed as arguments to other functions, executed later.
- Promises: Modern alternative to callbacks for managing asynchronous code.
- Async/Await: Syntactic sugar over Promises, making asynchronous code look and behave like synchronous code.