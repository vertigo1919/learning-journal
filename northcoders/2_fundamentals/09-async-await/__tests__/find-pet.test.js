const findPet = require("../src/4-find-pet");

describe("findPet()", () => {
  test("returns a promise", () => {
    expect(typeof findPet("garfield").then).toBe("function");
  });
  test("resolves with the pets from the appropriate file", () => {
    return Promise.all([
      findPet("garfield"),
      findPet("bolin"),
      findPet("peanut"),
    ]).then((promises) => {
      const [garfield, bolin, peanut] = promises;
      expect(garfield).toEqual({
        name: "garfield",
        favFood: "lasagne",
        dislikes: "nermal",
      });
      expect(bolin).toEqual({
        name: "bolin",
        favFood: "nando's",
        dislikes: "not being the centre of attention",
      });
      expect(peanut).toEqual({
        name: "peanut",
        favFood: "chicken",
        dislikes: "deep puddles",
      });
    });
  });
  test("resolves with 'Unable to locate <petname>.' when invoked with a non-existent pet name", () => {
    return findPet("snoopy").then((message) => {
      expect(message).toBe("Unable to locate snoopy.");
    });
  });
});
