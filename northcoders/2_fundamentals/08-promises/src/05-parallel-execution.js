const { readFile: readFilePromise } = require("node:fs/promises");
const { readdir } = require("node:fs/promises");
const { readFile } = require("node:fs");

//##TASK 8. countWords()

function countWords(filePath) {
  return readFilePromise(filePath, "utf-8").then((data) => {
    let newArray = data.split(" ");
    console.log(newArray.length);
    return newArray.length;
  });
}

const yourPromise8 = countWords("./data/02_poem.txt");

yourPromise8
  .then((wordCount) => {
    console.log("task 8 wordCount >", wordCount);
  })
  .catch((err) => {
    console.log(err, "<<Error13");
  });

//##TASK 9. totalWords()

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
    console.log("TASK 9 > Total word Count >", totalWordCount);
  })
  .catch((error) => {
    console.log("TASK 9 > Total word Count > ", error);
  });

// ##TASK 10. countWordsInDir()
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

const pathToLookInto = "./data";
const yourPromise15 = countWordsInDir(pathToLookInto);

yourPromise15
  .then((total) => {
    console.log(
      "Task10 > The total word count of files within folder ",
      pathToLookInto,
      " is ",
      total
    );
  })
  .catch((error) => {
    console.log("Task10 >", error);
  });
