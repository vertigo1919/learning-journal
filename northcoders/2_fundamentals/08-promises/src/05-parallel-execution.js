const { error } = require("node:console");
const { readFile: readFilePromise } = require("node:fs/promises");
const { readdir } = require("node:fs/promises");

//##TASK 8 countWords() * use a `.then()` chain to read a file and immediately return its word count

const errorX = "❌ Error:";
const success = "✅ Success!";

function countWords(filePath) {
  return readFilePromise(filePath, "utf-8").then((data) => {
    let newArray = data.split(" ");
    return newArray.length;
  });
}

const yourPromise8 = countWords("./data/02_poem.txt");

yourPromise8
  .then((wordCount) => {
    console.log(`TASK 8 >> ${success} >> wordCount >> ${wordCount}`);
  })
  .catch((err) => {
    console.log(`TASK 8 >> ${errorX} >> ${err.message}`);
  });

//##TASK 9 RUNNING PROMISES IN PARALLEL use a Promise.all to read three files simultaneously
// and calculate total words

function totalWords() {
  const promise1 = countWords("./data/01_poem.txt");
  const promise2 = countWords("./data/02_poem.txt");
  const promise3 = countWords("./data/03_poem.txt");

  const yourPromise9 = Promise.all([promise1, promise2, promise3]);

  return yourPromise9.then(
    (dataFromAllPromisesArray) =>
      dataFromAllPromisesArray[0] +
      dataFromAllPromisesArray[1] +
      dataFromAllPromisesArray[2]
  );
}

const yourPromise10 = totalWords();

yourPromise10
  .then((totalWordCount) => {
    console.log(`TASK 9 >> ${success} >> Total wordCount >> ${totalWordCount}`);
  })
  .catch((error) => {
    console.log(`TASK 8 >> ${errorX} >> ${err.message}`);
  });

// ##TASK 10 DYNAMIC PARALLELISM >> countWordsInDir()

function countWordsInDir(directoryPath) {
  return (
    readdir(directoryPath)
      .then((fileNamesArray) => {
        // first step: Create an array of promises for counting words amd feed it to a master promise
        const promisesArray = fileNamesArray.map((fileName) =>
          countWords(directoryPath + "/" + fileName)
        );
        return Promise.all(promisesArray);
      })
      // Only then once they are all ready sum them together by reducing the array
      .then((arrayOfWordCounts) =>
        arrayOfWordCounts.reduce(
          (total, singleWordCount) => (total += singleWordCount),
          0
        )
      )
  );
}

// ##TASK 10 >> sample run

const pathToLookInto = "./data";
const yourPromise15 = countWordsInDir(pathToLookInto);

yourPromise15
  .then((total) => {
    console.log(
      `TASK 10 >> ${success} >> The total word count of files within folder ${pathToLookInto} is ${total}`
    );
  })
  .catch((error) => {
    console.log(`TASK 10 >> ${errorX} >> ${error.message}`);
  });
