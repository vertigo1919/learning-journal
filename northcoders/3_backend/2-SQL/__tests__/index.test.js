const db = require("../db/connection.js");

describe("Database connection", () => {
  test("Connects to correct test database enviroment", () => {
    console.log(
      "We are connected to this pg databse: ",
      process.env.PGDATABASE
    );
    expect(process.env.PGDATABASE).toBe("nc_bookshop_test");
  });
});
