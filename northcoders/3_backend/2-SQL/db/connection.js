const pg = require("pg"); // needed to work with postgres databases
const path = require("path"); // needed to safely create a path for all OSs
const dotenv = require("dotenv"); // needed to read an env file to inject variables into process.env

// dynamically declare and assign ENV variable in order to later build a path to the correct .env files
const ENV = process.env.NODE_ENV || "development";

// build path to correct .env file
const pathToEnv = path.join(__dirname, "..", `.env.${ENV}`);

//load dotenv in order to inject the databse details to process.env
dotenv.config({ path: pathToEnv });

//handle missing database details, here we want to fail fast if the database details are wrong so no catch!
if (!process.env.PGDATABASE) {
  throw new Error("PGDATABASE not set");
}

// create a pool
const pool = new pg.Pool();

// export the pool
module.exports = pool;
