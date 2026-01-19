/* const Quest = require("./quest");
const Hero = require("./hero");
const {
  Encounter,
  ExplorationEncounter,
  TreasureEncounter,
  CombatEncounter,
} = require("./encounter"); */

class Saga {
  constructor(title) {
    this.title = title;
    this.quest = [];
  }

  addQuest(quest) {
    this.quest.push(quest);
  }

  journey(hero) {
    console.log(this.title);
    console.log("Hero: " + hero.name + "\n");
    for (let oneQuest of this.quest) {
      hero.currentQuest = oneQuest;
      //console.log(oneQuest.encounter);
      oneQuest.attempt(hero);
      if (hero.isBroken()) {
        console.log(`${hero.name} has failed the saga: ${this.title}`);
        return;
      }
    }
    console.log(`${hero.name} has completed the saga: ${this.title}`);
  }
}

module.exports = Saga;
