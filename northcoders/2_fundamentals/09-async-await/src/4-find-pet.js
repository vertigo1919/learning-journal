// #TASK 4: Read and Parse a Single JSON File
// This function takes a pet name, reads the corresponding JSON file from the data directory,
// and returns the parsed object.
// If the file is missing (or JSON is invalid), it catches the error and returns a friendly message.
// I learnt about creating absolute paths using __dirname

const { readFile: readFilePromise } = require("node:fs/promises");
const path = require("node:path");

const findPet = async (petName) => {
  try {
    const contentOfFile = await readFilePromise(
      path.join(__dirname, "..", "data", `${petName}.json`),
      "utf-8"
    );

    return JSON.parse(contentOfFile);
  } catch (err) {
    return `Unable to locate ${petName}.`;
  }
};

// Sample run
findPet("bolin")
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

module.exports = findPet;
