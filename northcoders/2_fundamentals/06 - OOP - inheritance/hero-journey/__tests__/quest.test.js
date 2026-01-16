const Quest = require("../src/quest");
const Hero = require("../src/hero");
const {
  Encounter,
  ExplortionEncounter,
  TreasureEncounter,
  CombatEncounter,
} = require("../src/encounter");

describe("quest()", () => {
  describe("addEncounter()", () => {
    test("check that encounter is pushed to encounter's array", () => {
      const testHero = new Hero("Bob");
      const testQuest = new Quest(
        "Leaving the Shire",
        "A hero leaves the safety of the Shire to set out on an adventure"
      );
      const testEncounter = new Encounter(
        "An unexpected visit from Gandalf",
        1
      );
      testQuest.addEncounter(testEncounter);

      expect(testQuest.encounters).toEqual([
        { description: "An unexpected visit from Gandalf", challengeLevel: 1 },
      ]);
    });
  });

  describe("describe()", () => {
    test("check that new hero gets created with correct properties", () => {
      const testHero = new Hero("Bob");
      const testQuest = new Quest(
        "Leaving the Shire",
        "A hero leaves the safety of the Shire to set out on an adventure"
      );
      const testEncounter = new Encounter(
        "An unexpected visit from Gandalf",
        1
      );
      testQuest.addEncounter(testEncounter);

      expect(testQuest.describe()).toEqual([
        "An unexpected visit from Gandalf",
      ]);
    });
  });
});

describe("attempt(hero)", () => {
  test("checks that intro quest message gets displayed", () => {
    const testHero = new Hero("Bob");
    const testQuest = new Quest(
      "Leaving the Shire",
      "A hero leaves the safety of the Shire to set out on an adventure"
    );
    testQuest.addEncounter(new CombatEncounter("Three Trolls", 4));
    testQuest.addEncounter(
      new ExplortionEncounter("Escaping goblin tunnels", 3)
    );
    testQuest.addEncounter(new TreasureEncounter("a Magic Ring"));

    const logSpy = jest.spyOn(console, "log");
    testQuest.attempt(testHero);
    expect(logSpy).toHaveBeenCalledWith(
      "Bob attempts the quest: Leaving the Shire"
    );

    logSpy.mockRestore();
  });

  test("checks that attempt works correctly when processing one encounter and hero is successful", () => {
    const testHero = new Hero("Bob");
    const testQuest = new Quest(
      "Leaving the Shire",
      "A hero leaves the safety of the Shire to set out on an adventure"
    );
    testQuest.addEncounter(new Encounter("Three Trolls", 4));
    expect(testQuest.attempt(testHero)).toEqual(["Three Trolls"]);
    expect(testHero.courage).toEqual(6);
  });

  test("checks that attempt works correctly when processing multiple encounters and hero is successful", () => {
    const testHero = new Hero("Bob");
    const testQuest = new Quest(
      "Leaving the Shire",
      "A hero leaves the safety of the Shire to set out on an adventure"
    );
    testQuest.addEncounter(new Encounter("Three Trolls", 4));
    testQuest.addEncounter(new Encounter("Three Witches", 2));
    expect(testQuest.attempt(testHero)).toEqual([
      "Three Trolls",
      "Three Witches",
    ]);
    expect(testHero.courage).toEqual(4);
  });

  test("checks that attempt works correctly in case of partial success followed by failure", () => {
    const testHero = new Hero("Bob");
    const testQuest = new Quest(
      "Leaving the Shire",
      "A hero leaves the safety of the Shire to set out on an adventure"
    );
    testQuest.addEncounter(new Encounter("Three Trolls", 4));
    testQuest.addEncounter(new Encounter("Three Witches", 6));
    expect(testQuest.attempt(testHero)).toEqual(["Three Trolls"]);
    expect(testHero.courage).toEqual(0);
  });

  test("checks that attempt outputs failure message correctly", () => {
    const testHero = new Hero("Bilbo");
    const testQuest = new Quest(
      "Leaving the Shire",
      "A hero leaves the safety of the Shire to set out on an adventure"
    );
    testQuest.addEncounter(new Encounter("Three Trolls", 11));

    const logSpy = jest.spyOn(console, "log");
    testQuest.attempt(testHero);
    expect(logSpy).toHaveBeenCalledWith(
      "Bilbo failed the quest: Leaving the Shire\n"
    );

    logSpy.mockRestore();
  });

  test("checks that attempt outputs success message correctly", () => {
    const testHero = new Hero("Bilbo");
    const testQuest = new Quest(
      "Leaving the Shire",
      "A hero leaves the safety of the Shire to set out on an adventure"
    );
    testQuest.addEncounter(new Encounter("Three Trolls", 4));

    const logSpy = jest.spyOn(console, "log");
    testQuest.attempt(testHero);
    expect(logSpy).toHaveBeenCalledWith(
      "Bilbo completed the quest: Leaving the Shire\n"
    );

    logSpy.mockRestore();
  });
});
