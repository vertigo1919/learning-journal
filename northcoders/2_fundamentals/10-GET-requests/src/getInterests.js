const { writeFile } = require("node:fs/promises");
const { readFile } = require("node:fs/promises");

// read the file and get an array out of it
// iterate through the array
// in each iteration 1) create http address variable
// 2) request HTTP (all the same time thruogh promise all )
// 3) add the onbjec to an array
// save the array into a file

async function getData(url) {
  const response = await fetch(url);
  const result = await response.json();
  return result;
}

async function getInterest() {
  const peopleJSON = await readFile("./nortcoders-people.json", "utf-8");
  const peopleObject = JSON.parse(peopleJSON);
  const peopleArray = peopleObject.people;

  let urlArray = [];
  for (let person of peopleArray) {
    urlArray.push(
      `https://nc-leaks.herokuapp.com/api/people/${person.username}/interests`
    );
  }

  const URLPromises = urlArray.map((url) => getData(url));

  const masterPromise = Promise.all(URLPromises);

  const interestsArray = await masterPromise;

  let finalArray = [];

  finalArray = interestsArray.map((item) => item.person);

  const finalObject = {};

  finalObject.people = finalArray;

  const finalString = JSON.stringify(finalObject);

  await writeFile("interest.json", finalString, "utf-8");

  console.log("file created!");
}

getInterest();
