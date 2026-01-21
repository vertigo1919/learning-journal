// TASK 5A: implement CLI user greeting using inquirer

const inquirer = require("inquirer");

//NB I need wrapper function because in CommonJS it's illegal to use await in a non-async function
async function wrapper() {
  const answers = await inquirer.prompt([
    {
      name: "name",
      message: "What's your name?",
    },
  ]);
  console.log(`Hello ${answers.name}`);
}

wrapper();
