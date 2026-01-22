//#TASK1-C: GET-reqests > fetch
const { writeFile } = require("node:fs/promises");
const https = require("node:https");

const httpRequestConfig = {
  host: "nc-leaks.herokuapp.com",
  path: "/api/confidential",
  method: "GET",
};

async function saveFile() {
  const instructions = await httpGetRequestViaPromise(httpRequestConfig);
  await writeFile("instructions.md", instructions, "utf-8");
  console.log("file created");
}

saveFile();
