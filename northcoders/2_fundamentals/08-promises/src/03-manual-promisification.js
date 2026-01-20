const { readFile } = require("node:fs");

//##TASK 4 Combine the Two
const yourPromise4 = new Promise((resolve, reject) => {
  readFile("./data/03_poem.txt", "utf-8", (err, data) => {
    if (err) {
      reject(err);
    } else resolve(data);
  });
});

yourPromise4
  .then((data) => console.log("TASK4 > ", data))
  .catch((error) => console.log("TASK4 > ", error));

//##TASK 5. Make It a Function

function readPoemPromisified() {
  // return a new Promise that reads the file
  return new Promise((resolve, reject) => {
    readFile("./data/03_poem.txt", "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else resolve(data);
    });
  });
}

readPoemPromisified()
  .then((poem) => console.log("TASK5 ", poem))
  .catch((error) => console.log("TASK5 ", error));

//##TASK 6. Make the Function Dynamic

function promisifiedReadFile(filePath, encoding) {
  return new Promise((resolve, reject) => {
    readFile(filePath, encoding, (err, data) => {
      if (err) {
        reject(err);
      } else resolve(data);
    });
  });
}

const yourPromise6 = promisifiedReadFile("./data/02_poem.txt", "utf-8");

yourPromise6
  .then((data) => {
    console.log("TASK6 ", data);
  })
  .catch((error) => {
    console.log("TASK5 ", error);
  });
