# Hero Journey – Object-Oriented JavaScript

This project is a small simulation of an adventure built to practice **Object-Oriented Programming in JavaScript**. The focus was on structuring code around interacting classes rather than procedural scripts, and on keeping responsibilities separated across modules.

## What I Learned

- Designing **classes with clear, single responsibilities**
- Using **inheritance** to extend a base class into specialised behaviours
- Letting objects interact through methods instead of shared global state
- Organising a Node project with `require` / `module.exports`
- Thinking about program flow as objects passing messages to each other
- Writing code that can be extended without rewriting the core logic

The project helped me move from “code that runs” to “code that has structure.”

## Project Structure

- **Hero** – represents the player and tracks condition
- **Quest** – runs a sequence of encounters
- **Encounter (base class)** – shared behaviour

  - CombatEncounter
  - ExplorationEncounter
  - TreasureEncounter

- **Saga** – coordinates multiple quests as one journey

Each class lives in its own file to keep the design modular and easier to test.

## Usage

Run the project:

```
npm start
```

Example:

```javascript
const Hero = require("./hero");
const Quest = require("./quest");
const Saga = require("./saga");
const {
  CombatEncounter,
  ExplorationEncounter,
  TreasureEncounter,
} = require("./encounter");

const bilbo = new Hero("Bilbo");

const quest = new Quest("The Hobbit", [
  new CombatEncounter("Three Trolls"),
  new ExplorationEncounter("The Lonely Mountain"),
  new TreasureEncounter("Arkenstone"),
]);

quest.attempt(bilbo);
```

## Design Notes

- Common behaviour is kept in a parent class and extended by encounter types
- Each encounter implements its own `resolve()` logic
- Quests stop early if the hero becomes “broken”
- The Saga class allows journeys made from multiple quests

## Running Tests

```
npm test
```

## Next Steps & Improvements

The current model mirrors a **debit/credit workflow**: each encounter changes the hero’s state in the same way transactions change an account balance. I plan to:

- Convert the project into a small **finance engine** using the same structure
- Rebuild the core in **TypeScript** for stronger typing and safer domain rules
- Experiment with **Dinero.js** to handle real monetary values instead of simple numbers
- Add validation layers and proper error handling
- Replace the fantasy domain with accounts, transactions, and ledgers

The goal is to reuse this OOP design in a more realistic domain and deepen my understanding of typed JavaScript.
