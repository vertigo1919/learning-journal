const Hero = require("../src/hero");
const {
  Encounter,
  ExplorationEncounter,
  TreasureEncounter,
  CombatEncounter,
} = require("../src/encounter");

describe("encounter()", () => {
  test("check that new encounter gets created with correct properties", () => {
    const testEncounter = new Encounter("this is a test encounter", 2);
    expect(testEncounter).toEqual({
      description: "this is a test encounter",
      challengeLevel: 2,
    });
  });
});
describe("method in encounter()", () => {
  test("check resolve(hero)", () => {
    const testEncounter = new Encounter("this is a test encounter", 2);
    const testHero = new Hero("Bob");
    const resolveReturn = testEncounter.resolve(testHero);
    expect(resolveReturn).toBe("Bob encounters: this is a test encounter");
    expect(testHero.courage).toBe(8);
  });
});

describe("explorationEncounter()", () => {
  test("check that new explorationEncounter gets created with correct properties", () => {
    const testExplorationEncounter = new ExplorationEncounter(
      "this is a test explorationEncounter",
      2
    );
    expect(testExplorationEncounter).toEqual({
      description: "this is a test explorationEncounter",
      challengeLevel: 2,
    });
  });
  test("check explore(hero)", () => {
    const testExplorationEncounter = new ExplorationEncounter(
      "this is a test explorationEncounter",
      2
    );
    const testHero = new Hero("Bob");
    const exploreReturn = testExplorationEncounter.resolve(testHero);
    expect(exploreReturn).toBe(
      "Bob explores: this is a test explorationEncounter"
    );
    expect(testHero.courage).toBe(8);
  });
});

describe("combatEncounter()", () => {
  test("check that new combatEncounter gets created with correct properties", () => {
    const testCombatEncounter = new CombatEncounter(
      "this is a test combatEncounter",
      2
    );
    expect(testCombatEncounter).toEqual({
      description: "this is a test combatEncounter",
      challengeLevel: 2,
    });
  });
  test("check combat hero", () => {
    const testCombatEncounter = new CombatEncounter(
      "this is a test combatEncounter",
      2
    );
    const testHero = new Hero("Bob");
    const combatReturn = testCombatEncounter.resolve(testHero);
    expect(combatReturn).toBe("Bob battles: this is a test combatEncounter");
    expect(testHero.courage).toBe(8);
  });
});

describe("treasureEncounter()", () => {
  test("check that new treasureEncounter gets created with correct properties", () => {
    const testTreasureEncounter = new TreasureEncounter(
      "this is a test treasureEncounter"
    );
    expect(testTreasureEncounter).toEqual({
      description: "this is a test treasureEncounter",
      challengeLevel: 0,
    });

    expect(TreasureEncounter.length).toBe(1);
    expect(Encounter.length).toBe(2);
  });
  test("check treasure hero", () => {
    const testTreasureEncounter = new TreasureEncounter(
      "this is a test treasureEncounter"
    );
    const testHero = new Hero("Bob");
    testHero.test(5);
    const treasureReturn = testTreasureEncounter.resolve(testHero);
    expect(treasureReturn).toBe(
      "Bob discovers: this is a test treasureEncounter"
    );
    expect(testHero.courage).toBe(7);
  });
});
