const Hero = require("../src/hero");

describe("hero()", () => {
  describe("test()", () => {
    test("check that new hero gets created with correct properties", () => {
      const testHero = new Hero("Bob");
      expect(testHero).toEqual({
        name: "Bob",
        maxCourage: 10,
        courage: 10,
        currentQuest: null,
      });
    });

    describe("test(challange)", () => {
      test("check that challenge decreases courage by passed amount", () => {
        const testHero = new Hero("Bob");
        testHero.test(4);
        expect(testHero.courage).toBe(6);
      });

      test("check that courages never drops below 0", () => {
        const testHero = new Hero("Bob");
        testHero.test(12);
        expect(testHero.courage).toBe(0);
      });
    });

    describe("gainCourage(amount)", () => {
      test("check that courage is increased by passed amount", () => {
        const testHero = new Hero("Bob");
        testHero.test(5);
        testHero.gainCourage(4);
        expect(testHero.courage).toBe(9);
      });

      test("check that courage never goes beyond 10", () => {
        const testHero = new Hero("Bob");
        testHero.gainCourage(10);
        expect(testHero.courage).toBe(10);
      });
    });

    describe("isBroken()", () => {
      test("chek true is retruned when courage is 0", () => {
        const testHero = new Hero("Bob");
        testHero.test(10);
        expect(testHero.isBroken()).toBe(true);
        testHero.gainCourage(5);
        expect(testHero.isBroken()).toBe(false);
      });
    });
  });
});
