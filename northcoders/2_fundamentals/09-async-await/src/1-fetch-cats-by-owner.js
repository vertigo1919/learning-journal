const request = require("../utils/request");

// ## TASK1: HANDLING PARAMETRIC ENDPOINTS FETCHES WITH THEN vs ASYNC

// fetchCatsByOwner with .then()
const fetchCatsByOwnerThen = (owner) => {
  return request(`/owners/${owner}/cats`)
    .then((resolved) => {
      return resolved;
    })
    .catch((error) => {
      return error; // N.B. by returing the error the promise is techincally resolved
    });
};

// refactor fetchCatsByOwner with async/wait
const fetchCatsByOwner = async (owner) => {
  try {
    const result = await request(`/owners/${owner}/cats`);
    return result;
  } catch (err) {
    return err; // N.B. by returing the error the promise is techincally resolved
  }
};

// SAMPLE RUNS >> commented out because this function is used by other functions
// const owner = "pavlov";

// fetchCatsByOwnerThen(owner).then((result) =>
//   console.log(result, `<< cats owned by ${owner} - using .then`)
// );

// fetchCatsByOwner("pavlov").then((result) =>
//   console.log(result, `<< cats owned by ${owner} - using async-await`)
// );

module.exports = fetchCatsByOwner;
