class Hero {
  constructor(name) {
    this.name = name;
    this.maxCourage = 10;
    this.courage = this.maxCourage;
    this.currentQuest = null;
  }

  test(challange) {
    this.courage -= challange;

    if (this.courage < 0) this.courage = 0;
  }

  gainCourage(amount) {
    this.courage += amount;

    if (this.courage > this.maxCourage) this.courage = this.maxCourage;
  }

  isBroken() {
    return this.courage === 0;
  }
}

module.exports = Hero;
