// # TASK 5B: The same task as 5A using ES Modules (.mjs)
// Note: This uses Top-Level Await, so we don't need a wrapper function!

import inquirer from "inquirer";

const answers = await inquirer.prompt([
  {
    name: "name",
    message: "What's your name?",
  },
]);

console.log(`Hello ${answers.name}`);
