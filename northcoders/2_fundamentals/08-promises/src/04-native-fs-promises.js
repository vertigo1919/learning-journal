const { readFile: readFilePromise } = require("node:fs/promises");
const { readdir } = require("node:fs/promises");
const { readFile } = require("node:fs");

//##TASK 7. Switch it for the real deal

const yourPromise7 = readFilePromise("./data/03_poem.txt", "utf-8");

yourPromise7
  .then((data) => {
    console.log("TASK7 > ", data);
  })
  .catch((error) => {
    console.log("TASK7 > ", error);
  });
