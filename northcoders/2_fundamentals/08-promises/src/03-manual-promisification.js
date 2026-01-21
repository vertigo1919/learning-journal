/* N.B.
 * Promisification is the process of converting
 * a function that accepts a callbackinto a function
 * that returns a Promise.
 */

const { readFile } = require("node:fs");

const errorX = "❌ Error:";
const success = "✅ Success!";

//##TASK 4 Create a Promise from scratch for the vanilla node:fs readFile
const yourPromise4 = new Promise((resolve, reject) => {
  readFile("./data/03_poem.txt", "utf-8", (err, data) => {
    if (err) {
      reject(err);
    } else resolve(data);
  });
});

yourPromise4
  .then((data) =>
    console.log(
      `TASK4 > ${success} > content length: ${
        data.length
      } > Content Preview: ${data.slice(0, 30)}`
    )
  )
  .catch((error) => console.log(`TASK4 > ${errorX} > ${error.message}`));

//##TASK 5 Full promisification of vanilla node:fs readFile

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
  .then((poem) =>
    console.log(
      `TASK5 > ${success} > content length: ${
        poem.length
      } > Conent Preview: ${poem.slice(0, 30)}`
    )
  )
  .catch((error) => console.log(`TASK5 > ${errorX} > ${error.message}`));

//##TASK 6. Make the Promisdified Function Dynamic

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
    console.log(
      `TASK6 > ${success} > content length: ${
        data.length
      } > Conent Preview: ${data.slice(0, 30)}`
    );
  })
  .catch((error) => {
    console.log(`TASK6 > ${errorX} > ${error.message}`);
  });
