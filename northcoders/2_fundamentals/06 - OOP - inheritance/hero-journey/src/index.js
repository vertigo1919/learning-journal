const Hero = require("./hero");
const Quest = require("./quest");
const Saga = require("./saga");
const {
  Encounter,
  CombatEncounter,
  ExplortionEncounter,
  TreasureEncounter,
} = require("./encounter");

const bilbo = new Hero("Bilbo");

const shireExit = new Quest(
  "Leaving the Shire",
  "A hero leaves the safety of the Shire."
);
shireExit.addEncounter(new Encounter("An unexpected visit from Gandalf", 1));
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
