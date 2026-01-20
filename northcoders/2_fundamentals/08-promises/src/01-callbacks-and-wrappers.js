const { readFile } = require("node:fs");

// in order to import readfile we need to assign the value of the readfile property of the object that node:fs exports to a new variable called readFile
// so we could write: const readFile = require("node:fs").readFile;
// instead we use shorthand and we write: const { readFile } = require("node:fs");
// if we wanted to import the whole fs library we would write
// const fs = require("node:fs") (you don't need curly brackets because you are assigning a property but the entire object - and then we could access readFile via:
// fs.readFile

// N.B. The fact that readFile takes a callback function doesn't have to do with Asynchronicity, it's just an implementation detail
//it's the internal workings of readFile that grants it asynchronous execution meaning that the main JS thread execution will continue

// here we grab the promisified version

//##TASK 1
readFile("./data/03_poem.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("TASK1> ", err);
  } else {
    console.log("TASK1> ", data);
  }
});

//TASK 1 - EXTENSION
// Use what we've written to write a new function readAndThen() which executes readFile() and, only once that's done, it performs a second step
// To do it with callbacks we need to  wrap  readFile() within a new function readAndThen() and make it take as a parameter a callback function that is invoked only after the value.
// The second step is determined by the actual function we feed into it as an argument when we invoke readFileAndThen()

// 1. We define the wrapped function
function readFileAndThen(fileToRead, callback) {
  readFile(fileToRead, "utf-8", (err, data) => {
    if (err) {
      console.log("TASK1 EXTENSION> error message >", err);
    } else {
      console.log("TASK1 EXTENSION> ", data);
      callback();
    }
  });
}

// 2. We define what is the second step
function printSuccess() {
  console.log("Second Step!");
}

// 3. We invoke our new function
readFileAndThen("./d", printSuccess);

// Steps 2 and 3 can be rewritten with arrow functions as
// readFileAndThen("./d", () => console.log("Second Step!"));

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
