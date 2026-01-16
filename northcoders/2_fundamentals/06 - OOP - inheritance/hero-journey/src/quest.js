//const Hero = require(".//hero");
//const {
//Encounter,
//CombatEncounter,
//TreasureEncounter,
//ExplortionEncounter,
//} = require(".//encounter");

class Quest {
  constructor(questTitle, questDescription) {
    this.title = questTitle;

    this.description = questDescription;
    this.encounters = [];
  }

  addEncounter(encounter) {
    this.encounters.push(encounter);
  }

  describe() {
    return this.encounters.map((item) => item.description);
  }
  attempt(hero) {
    console.log(`${hero.name} attempts the quest: ${this.title}`);
    let resolvedEncounters = [];
    for (let item of this.encounters) {
      const result = item.resolve(hero);
      console.log(result);
      resolvedEncounters.push(item.description);

      if (hero.isBroken()) {
        console.log(`${hero.name} failed the quest: ${this.title}\n`);
        return resolvedEncounters;
      }
    }
    console.log(`${hero.name} completed the quest: ${this.title}\n`);
    return resolvedEncounters;
  }
}

module.exports = Quest;

//const testHero = new Hero("Bob");
//const testQuest = new Quest(
//  "Leaving the Shire",
//  "A hero leaves the safety of the Shire to set out on an adventure"
//);
//testQuest.addEncounter(new CombatEncounter("Three Trolls", 0));
//testQuest.addEncounter(new ExplortionEncounter("Escaping goblin tunnels", 2));
//testQuest.addEncounter(new TreasureEncounter("a Magic Ring"));

//testQuest.attempt(testHero);
//console.log(testHero);

// Add attempt(hero) to Quest attempt should return a list of strings that contain the encounters the hero resolves. It should also start with something like: "${hero.name} attempts the quest: ${title}"Loop through each encounter and resolve(hero), if the hero becomes broken, stop the quest and add a failure message, If they finish all encounters with courage remaining, add a completion message.
// Example:

// const bilbo = new Hero("Bilbo");
// const quest = new Quest(
//   "Through the Wild",
//   "The hero faces dangers outside the Shire"
// );
// quest.addEncounter(new CombatEncounter("Three Trolls", 4));
// quest.addEncounter(new ExplorationEncounter("Escaping goblin tunnels", 3));
// quest.addEncounter(new TreasureEncounter("a Magic Ring"));
// quest.attempt(bilbo); // ["Bilbo attempts the quest: Through the Wild", "Bilbo battles: Three Trolls", "Bilbo explores: Escaping goblin tunnels", "Bilbo discovers: a Magic Ring and feels braver!", "Bilbo completes the quest: Through the Wild!"]
