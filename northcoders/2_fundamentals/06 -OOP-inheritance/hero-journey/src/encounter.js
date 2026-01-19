class Encounter {
  constructor(description, challengeLevel) {
    this.description = description;
    this.challengeLevel = challengeLevel;
  }

  resolve(hero) {
    hero.test(this.challengeLevel);
    return `${hero.name} encounters: ${this.description}`;
  }
}

class ExplorationEncounter extends Encounter {
  constructor(description, challengeLevel) {
    super(description, challengeLevel);
  }

  resolve(hero) {
    hero.test(this.challengeLevel);
    return `${hero.name} explores: ${this.description}`;
  }
}

class TreasureEncounter extends Encounter {
  constructor(description) {
    super(description, 0);
  }

  resolve(hero) {
    hero.gainCourage(2);
    return `${hero.name} discovers: ${this.description}`;
  }
}

class CombatEncounter extends Encounter {
  constructor(description, challengeLevel) {
    super(description, challengeLevel);
  }

  resolve(hero) {
    hero.test(this.challengeLevel);
    return `${hero.name} battles: ${this.description}`;
  }
}

module.exports = {
  Encounter,
  ExplorationEncounter,
  TreasureEncounter,
  CombatEncounter,
};
