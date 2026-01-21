const fetchCatsByOwner = require("../src/1-fetch-cats-by-owner");
const fetchAllOwners = require("../src/2-fetch-all-owners");
const fetchAllCats = require("../src/3-fetch-all-cats");

jest.setTimeout(1000);

describe("fetchCatsByOwner()", () => {
  test("returns a promise which rejects with the 404 error when given an invalid owner", () => {
    return fetchCatsByOwner("mitch").catch((err) => {
      expect(err).toBe("404 - mitch not found");
    });
  });
  describe("returns a promise which resolves with the cats for the specified owner", () => {
    test("case: owner === vel", () => {
      return fetchCatsByOwner("vel").then((cats) => {
        expect(cats).toEqual(["Opal"]);
      });
    });
    test("case: owner === pavlov", () => {
      return fetchCatsByOwner("pavlov").then((cats) => {
        expect(cats).toEqual(["Belle", "Dribbles", "Nibbles"]);
      });
    });
  });
});

describe("fetchAllOwners()", () => {
  test("returns a promise which resolves with an array of the correct length", () => {
    return fetchAllOwners().then((owners) => {
      expect(Array.isArray(owners)).toBe(true);
      expect(owners.length).toBe(5);
    });
  });
  test("returns a promise which resolves with an array of lowercase owner names", () => {
    return fetchAllOwners().then((owners) => {
      expect(owners).toEqual([
        "pavlov",
        "schrodinger",
        "foucault",
        "vel",
        "calvin",
      ]);
    });
  });
});

describe("fetchAllCats()", () => {
  test("returns a promise which resolves with an array of the correct length", () => {
    return fetchAllCats().then((cats) => {
      expect(Array.isArray(cats)).toBe(true);
      expect(cats.length).toBe(8);
    });
  });
  test("returns a promise which resolves with an array of all the cats, sorted in alphabetical order", () => {
    return fetchAllCats().then((cats) => {
      expect(cats).toEqual([
        "Belle",
        "Dribbles",
        "Hobbes",
        "Leben",
        "M. Fang",
        "Nibbles",
        "Opal",
        "Tot",
      ]);
    });
  });
});
