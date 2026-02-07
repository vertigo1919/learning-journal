//#TASK1-B: GET-reqests > node:https with promises
const { writeFile } = require("node:fs/promises");
const https = require("node:https");

const httpRequestConfig = {
  host: "nc-leaks.herokuapp.com",
  path: "/api/confidential",
  method: "GET",
};

function httpGetRequestViaPromise(options) {
  return new Promise((resolve) => {
    const req = https.request(options, (res) => {
      let body = "";

      res.on("data", (packet) => {
        body += packet;
      });

      res.on("end", () => {
        const json = JSON.parse(body);
        resolve(json.instructions);
      });
    });
    req.end();
  });
}

async function saveFile() {
  const instructions = await httpGetRequestViaPromise(httpRequestConfig);
  await writeFile("instructions.md", instructions, "utf-8");
  console.log("file created");
}

saveFile();

//#TASK1-B: GET-reqests > node:https with promises
