// IMPORT READFILE

// in order to use readfile in the project
// we need to assign the value of the readfile property of the object that node:fs exports
// to a new variable called readFile > const readFile = require("node:fs").readFile;
// But it's easier to use shorthand and write: const { readFile } = require("node:fs");
// if we wanted to import the whole fs library we would write > const fs = require("node:fs")
// you don't need curly brackets because you are assigning a property but the entire object
// and then we would access readFile via fs.readFile

// N.B. The fact that readFile takes a callback function doesn't have anything to do with Asynchronicity, it's just an implementation detail
//it's the internal workings of readFile that grants its asynchronous execution, meaning that the main JS thread execution can continue

const { readFile } = require("node:fs");

//##TASK 1: read a file from the disk without "blocking" the rest of the program
const task = "TASK 1 >";
const errorX = "❌ Error:";
const success = "✅ Success!";

console.log(task, "Requesting file read...");

readFile("./data/03_poem.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(task, errorX, err.message);
  } else {
    console.log(task, success, "Content length:", data.length, "characters");
    console.log(task, "Content Preview:", data.slice(0, 30) + "...");
  }
});

console.log(
  task,
  "This log runs BEFORE the file is finished reading as the reading is asynchronous!"
);

//##TASK 1 EXTENSION > create a wrapper function to define a "second step"
// I now want to use what we've written to write a new function readAndThen() which executes readFile() and, only once that's done, it performs a second step
// To do it with callbacks we need to  wrap readFile() within a new function readAndThen() and make it take as a parameter a callback function that is invoked only after the value.
// The second step is determined by the actual function we feed into it as an argument when we invoke readFileAndThen()

const taskExt = "TASK 1-extension >";

// 1. We define the wrapped function
function readFileAndThen(fileToRead, callback) {
  readFile(fileToRead, "utf-8", (err, data) => {
    if (err) {
      console.log(taskExt, errorX, err.message);
    } else {
      console.log(
        taskExt,
        success,
        "Content length:",
        data.length,
        "characters"
      );
      console.log(taskExt, "Content Preview:", data.slice(0, 30) + "...");
      callback();
    }
  });
}

// 2. We define what is the second step
function printSuccess() {
  console.log(
    taskExt,
    ">>>>>>>>This function runs only after the file has been read!"
  );
}

// 3. We invoke our new function
readFileAndThen("./data/02_poem.txt", printSuccess);

// Steps 2 and 3 can be rewritten with arrow functions as
// readFileAndThen("./d", () => console.log("Second Step!"));
