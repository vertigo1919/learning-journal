const server = require("../utils/server");

function checkServerStatus(callback) {
  server.request("/status", (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
}

function fetchBannerContent(callback) {
  server.request("/banner", (err, content) => {
    if (err) {
      callback(err);
    } else {
      const updatedContent = structuredClone(content);
      updatedContent.copyrightYear = 2025;
      callback(err, updatedContent);
    }
  });
}

function fetchAllOwners(callback) {
  server.request("/owners", (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(
        err,
        data.map((item) => item.toLowerCase())
      );
    }
  });
}

function fetchCatsByOwner(name, callback) {
  server.request(`/owners/${name}/cats`, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(err, data);
    }
  });
}

function fetchCatPics(catPicsArray, callback) {
  if (catPicsArray.length === 0) {
    callback(null, []);
    return;
  }

  const catPicsFileNames = [];
  let i = 0;

  catPicsArray.forEach((element) =>
    server.request(`/pics/${element}`, (err, data) => {
      if (err) {
        catPicsFileNames.push("placeholder.jpg");
      } else {
        catPicsFileNames.push(data);
      }
      i++;

      if (i === catPicsArray.length) callback(null, catPicsFileNames);
    })
  );
}

function fetchAllCats(callback) {
  let catsArray = [];
  let count = 0;
  fetchAllOwners((err, ownersArray) => {
    if (err) {
      callback(err);
      return;
    }
    ownersArray.forEach((owner) =>
      fetchCatsByOwner(owner.toLowerCase(), (err, cats) => {
        if (err) {
          return callback(err);
        } else {
          catsArray.push(...cats);
        }
        count++;
        if (count === ownersArray.length) {
          catsArray.sort((a, b) => a.localeCompare(b));
          callback(null, catsArray);
        }
      })
    );
  });
}

module.exports = {
  checkServerStatus,
  fetchAllCats,
  fetchCatPics,
  fetchAllOwners,
  fetchBannerContent,
  fetchCatsByOwner,
  server,
};
