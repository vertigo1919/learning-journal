const https = require("node:https");
const { writeFile } = require("node:fs/promises");

const options = {
  host: "nc-leaks.herokuapp.com",
  path: "/api/people",
  method: "GET",
};

function getPeople() {
  return new Promise((resolve) => {
    const req = https.request(options, (response) => {
      let body = "";
      response.on("data", (packet) => {
        body += packet;
      });
      response.on("end", () => {
        resolve(JSON.parse(body));
      });
    });
    req.end();
  });
}

async function getNorthcodersPeople() {
  const arr = await getPeople();
  const workers = arr.people;

  const filteredPeople = workers.filter((person) => {
    return person.job.workplace === "northcoders";
  });
  const finalObj = {};
  finalObj.people = filteredPeople;
  finalJsonFile = JSON.stringify(finalObj);
  await writeFile("nortcoders-people.json", finalJsonFile, "utf-8");
  console.log("file created");
}

getNorthcodersPeople();
