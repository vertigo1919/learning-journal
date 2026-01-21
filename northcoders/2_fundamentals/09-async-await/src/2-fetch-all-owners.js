// # TASK2: Fetch all owners and convert to lowercase using try/catch

const request = require("../utils/request");

const fetchAllOwners = async () => {
  try {
    const result = await request("/owners");
    return result.map((owner) => owner.toLowerCase());
  } catch (err) {
    return err;
  }
};

module.exports = fetchAllOwners;

// SAMPLE RUN >> commented out because this function is used by other functions
// fetchAllOwners().then((result) => console.log(result));
