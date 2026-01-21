const db = require("./database");
const { getOwners, getCatsByOwner } = require("./controllers");

const request = (requestUrl) => {
  const errors = [];
  let response = "";
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (/\/owners\/[\W\w]+\/cats/.test(requestUrl)) {
        const owner = requestUrl.split("/")[2];
        response = getCatsByOwner(errors, db, owner);
      } else if (requestUrl === "/owners") {
        response = getOwners(errors, db);
      } else errors.push(`404 - "${requestUrl}" is not a valid path`);
      if (errors.length) reject(errors[0]);
      else
        return response ? resolve(response) : reject("404 - path not found!");
    }, Math.random() * 200);
  });
};

module.exports = request;
