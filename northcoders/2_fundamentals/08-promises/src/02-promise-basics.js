const { readFile } = require("node:fs");

const errorX = "❌ Error:";
const success = "✅ Success! The promise is now resolved and unwrapped";

//##TASK 2: create a Promise that immediately resolves to a string, then unwrap with then

/*
 * HOW RESOLVE() WORKS
 * `resolve("something")` always returns `undefined` itself.
 * Instead of returning a value directly, it acts as a "switch" that does two things:
 * 1. State Change: It changes the status of the Promise from 'pending' to 'resolved' (fulfilled).
 * 2. Value Storage: It saves the passed message/data inside the Promise object.
 * To extract that message once it becomes available and pass it to a function, I must use `.then()`.
 */

const yourPromise = new Promise(executorFn);

function executorFn(resolve, reject) {
  return resolve(`TASK2 > ${success}`);
}

yourPromise.then((message) => {
  console.log(message);
});

//##TASK 2 (refactored with arrow functions)
const yourPromise2 = new Promise((resolve, reject) =>
  resolve(`TASK2 > ${success}`)
);

yourPromise2.then((message) => {
  console.log(message);
});

//##TASK 3 ".then" chaining
const yourPromise3 = new Promise((resolve, reject) =>
  resolve(`TASK3 > ${success}`)
);

yourPromise3
  .then((message) => message.toUpperCase())
  .then(
    (capitalisedMessage) =>
      capitalisedMessage +
      " > Step 2: I have appeneded this message in the second link of the .then chain"
  )
  .then((updatedMessage) => console.log(updatedMessage));
