//#TASK3: This function makes use of both fetchAllOwners and fetchCatsByOwner
// in order to retrieve an array of all the cats from the server
// It  returns a promise that resolves to an array of all cats sorted in alphabetical order
// It uses Promise.all to make the multiple calls required to get hold of all the cats

const fetchCatsByOwner = require("./1-fetch-cats-by-owner");
const fetchAllOwners = require("./2-fetch-all-owners");

const fetchAllCats = async () => {
  const allOwnersPromise = fetchAllOwners(); // returns a promise
  const catOwners = await allOwnersPromise; // doesn't proceed until next step in the block until promise is resolved

  // the above two lines can be shortened to the following
  // to invoke the function and unwrap the promise in one single step
  // const CatOwners = await fetchAllOwnners()

  const allCatsPromises = catOwners.map((owner) => fetchCatsByOwner(owner)); //map the resolevd array and returns an array of promises

  const masterPromise = Promise.all(allCatsPromises); //create a new master promise containg all the promises from the last step
  const nestedAllCatsArray = await masterPromise; // doesnt proceed until all promises are resolved to nestedAllCatsArray

  // the above two lines can be shortened to the following
  // to create master promise and start unwrapping it in one step
  // const CatOwners = await fetchAllOwnners
  // const nestedAllCatsArray = await Promise.all(allCatsPromises);

  // before flattening the array I filter out any potential error received from the server
  const validCatArrays = nestedAllCatsArray.filter((item) =>
    Array.isArray(item)
  );

  return validCatArrays.flat().sort((a, b) => a.localeCompare(b)); // flattens and sorts array
};

module.exports = fetchAllCats;

// SAMPLE RUN
fetchAllCats().then((allCats) =>
  console.log(
    `Here's a list of all cats retrieved from the server sorted in alphabetical order  >>  ${allCats}`
  )
);
