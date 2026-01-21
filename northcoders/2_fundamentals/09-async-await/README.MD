# Async & Await

A series of challenges to practice modern asynchronous JavaScript. The focus here was refactoring Promise chains (`.then`) into the cleaner `async/await` syntax and managing concurrent operations.

## What I Learned

- **Syntactic Sugar**: Converting Promise chains into `async/await` to make the code look more like synchronous code.
- **Error Handling**: Switching from `.catch()` to standard `try/catch` blocks for better control over failed requests.
- **Concurrency**: Using `Promise.all` to fire off multiple requests at once (fetching all cats for all owners) instead of waiting for them one by one.
- **File System Promises**: Using `fs/promises` to read local JSON files dynamically based on user input.
- **Module Systems**: I wrote the CLI interaction twice—once in CommonJS (requiring an async wrapper) and once as an ES Module (`.mjs`) to use **Top-Level Await**.
- **External Libraries**: Using `axios` to fetch data from a real public API (PokéAPI).

## Project Structure

### My Solutions (`src/`)

- **src/1-fetch-cats-by-owner.js** – Comparing `.then()` syntax vs `async/await`.
- **src/2-fetch-all-owners.js** – Fetching and formatting data using `try/catch`.
- **src/3-fetch-all-cats.js** – The complex task: fetching owners, mapping them to promises, and resolving them all with `Promise.all`.
- **src/4-find-pet.js** – Reading and parsing local data files.
- **src/5A-greet.js** – CLI prompt using `inquirer` (CommonJS version).
- **src/5B-greet.mjs** – CLI prompt using `inquirer` (ES Module version).
- **src/6-get-pokemon.js** – Simple fetch request using `axios`.

### Provided Code

- **utils/** – A mock server simulation provided by **Northcoders**. It simulates network delays and random errors so I could practice handling 404s and timeouts.
- ****tests**/** – Test suite provided by **Northcoders** (`cat-server.test.js`, `find-pet.test.js`).

**Note:** I wrote the logic in `src`. The utilities and tests were provided as part of the course materials.

## Usage

1. **Run the tests:**
   To check that the solution code passes the provided requirements (using Jest):
   ```bash
   npm test
   ```
