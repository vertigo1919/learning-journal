const { readFile } = require("node:fs");

//TASK 2
const yourPromise = new Promise(executorFn);

function executorFn(resolve, reject) {
  return resolve(
    "TASK2 > The promise has been fullfilled and the object promise is now resolved"
  );
}

yourPromise.then((message) => {
  console.log(message);
});

// resolve("something") always returns undefined but acts as a switch by
// 1. changing the value of the promise  from pendnig to resolved
// 2. saving the message within the promise object
// to extract the message (once available) and pass it to a function you use "then"

//##TASK 2 (refactored with arrow functions)
const yourPromise2 = new Promise((resolve, reject) =>
  resolve(
    "TASK2 refactored > The promise has been fullfilled and the object promise is now resolved"
  )
);

yourPromise2.then((message) => {
  console.log(message);
});

//##TASK 3 The Promise Chain
const yourPromise3 = new Promise((resolve, reject) =>
  resolve("TASK3 > the promise is now resolved")
);

yourPromise3
  .then((message) => message.toUpperCase())
  .then(
    (capitalisedMessage) =>
      capitalisedMessage +
      " Now that it's resolved, I'm adding a second message"
  )
  .then((updatedMessage) => console.log(updatedMessage));
