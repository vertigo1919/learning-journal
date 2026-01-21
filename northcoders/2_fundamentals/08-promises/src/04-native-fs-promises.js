// N.B. Most async function will return premade Promises

/*
 * TASK 7: USING BUILT-IN PROMISES
 * I am switching to the `node:fs/promises` module, which provides pre-promisified functions.
 *
 * 1. The Import: I import `readFile` from `node:fs/promises`.
 * 2. The Simplification: Unlike the standard `fs` module, these functions return a Promise by default.
 * 3. The Result: I no longer need to manually write `new Promise()` or handle callbacks. I can simply call the function and chain `.then()` immediately.
 */

const { readFile: readFilePromise } = require("node:fs/promises");
const { readdir } = require("node:fs/promises");
const { readFile } = require("node:fs");

const yourPromise7 = readFilePromise("./data/03_poem.txt", "utf-8");

yourPromise7
  .then((data) => {
    console.log(`✅ Success! ${data}`);
  })
  .catch((error) => {
    console.log(`❌ Error: ${error}`);
  });
