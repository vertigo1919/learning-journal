/* IMPORTING READFILE
 * To use readFile, we need to assign the value of the 'readFile' property from the object exported by 'node:fs'.
 *
 * 1. Specific Import (Destructuring)
 * Longhand:   const readFile = require("node:fs").readFile;
 * Shorthand:  const { readFile } = require("node:fs");
 *
 * 2. Full Library Import
 * If we want to import the whole library, we write: const fs = require("node:fs");
 * - We do not use curly brackets here because we are assigning the entire object, not just a specific property.
 * - We then access the method via: fs.readFile
 *
 * NOTE ON ASYNCHRONICITY
 * The fact that readFile takes a callback function is an implementation detail; it is not what causes the asynchronicity.
 * It is the internal workings of readFile that grant its asynchronous execution, ensuring the main JS thread can continue running.
 */

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

/*
 * ##TASK 1 EXTENSION: WRAPPER FUNCTION
 * I want to use what I've already written to create a new function called 'readAndThen()'.
 * This function will execute 'readFile()' and, only once that is done, perform a second step.
 * This is a wrapper function.
 *
 * MY IMPLEMENTATION WITH CALLBACKS
 * To achieve this, I need to wrap 'readFile()' within the new 'readAndThen()' function.
 * - I will set up 'readAndThen()' to accept a callback function as a parameter.
 * - This callback will be invoked only after the value has been successfully read.
 *
 * The "second step" will be determined by the specific function I pass as an
 * argument when I invoke 'readAndThen()'.
 */

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

// 2. We define the second step
function printSuccess() {
  console.log(
    taskExt,
    ">>>>>>>>This function runs only after the file has been read!"
  );
}

// 3. We invoke our new function with the callbacl
readFileAndThen("./data/02_poem.txt", printSuccess);

// Steps 2 and 3 can be rewritten with arrow functions as
// readFileAndThen("./data/02_poem.txt", () => console.log("Second Step!"));
