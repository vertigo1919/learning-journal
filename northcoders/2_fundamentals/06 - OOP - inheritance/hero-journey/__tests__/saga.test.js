const Quest = require("../src/quest");
const Hero = require("../src/hero");
const {
  Encounter,
  ExplortionEncounter,
  TreasureEncounter,
  CombatEncounter,
} = require("../src/encounter");
const Saga = require("../src/saga");

describe("Saga()", () => {
  test("addQuest", () => {
    const testHero = new Hero("Bob");
    const testSaga = new Saga("The hobbit");
    const testQuest = new Quest(
      "Leaving the Shire",
      "A hero leaves the safety of the Shire to set out on an adventure"
    );
    testSaga.addQuest(testQuest);
    expect(testSaga.quest).toEqual([testQuest]);
  });
  test("journey(hero)", () => {
    jest.spyOn(console, "log").mockImplementation(() => {});

    const bilbo = new Hero("Bilbo");
    const shireExit = new Quest(
      "Leaving the Shire",
      "A hero leaves the safety of the Shire."
    );
    shireExit.addEncounter(
      new Encounter("An unexpected visit from Gandalf", 1)
    );
    shireExit.addEncounter(
      new Encounter("A Dwarven company comes round for supper", 3)
    );
    const throughTheWild = new Quest(
      "Journey Through the Wild",
      "Facing dangers outside the Shire."
    );
    throughTheWild.addEncounter(new CombatEncounter("Three Trolls", 4));
    throughTheWild.addEncounter(
      new ExplortionEncounter("Navigating the goblin tunnels", 3)
    );
    throughTheWild.addEncounter(new TreasureEncounter("a Magic Ring"));
    const theHobbit = new Saga("The Hobbit");
    theHobbit.addQuest(shireExit);
    theHobbit.addQuest(throughTheWild);
    theHobbit.journey(bilbo);

    const output = console.log.mock.calls
      .map((call) => call.join(" "))
      .join("\n");
    expect(output).toBe(
      `The Hobbit
Hero: Bilbo

Bilbo attempts the quest: Leaving the Shire
Bilbo encounters: An unexpected visit from Gandalf
Bilbo encounters: A Dwarven company comes round for supper
Bilbo completed the quest: Leaving the Shire

Bilbo attempts the quest: Journey Through the Wild
Bilbo battles: Three Trolls
Bilbo explores: Navigating the goblin tunnels
Bilbo failed the quest: Journey Through the Wild

Bilbo has failed the saga: The Hobbit`
    );
  });
});
