# Async Cat Server Simulation – JavaScript Callbacks

A series of challenges to practice **Asynchronous Programming** using the **Callback Pattern**. The goal was to manage time-delayed operations and concurrency using callbacks only.

## What I Learned

- Managing the **Event Loop** and understanding execution order
- Implementing the **"Error-First" Callback Pattern** (`null, data`)
- Handling **concurrency** using a counter.
- Passing errors up the chain to prevent silent failures

## Project Structure

- **cat-server.js** – My implementation of the logic
- **utils/server.js** – Mock server simulating network delays _(Provided by Northcoders)_
- \***\*tests\*\*** – Test suite _(Provided by Northcoders)_

**Note:** My work focused on the logic within `solution.js`. The server simulation and testing environment were provided as part of the course.

## Usage

Run the tests:

```bash
npm test

```

Example usage:

```javascript
const { fetchAllCats } = require("./solution");

console.log("1. Starting request...");

fetchAllCats((err, cats) => {
  if (err) {
    console.log("❌ Failed:", err);
  } else {
    console.log("✅ Success:", cats);
  }
});
```

## Design Notes

- **Inversion of Control:** Functions accept a "next step" argument instead of returning values.
- **Parallel Execution:** Requests fire simultaneously to improve performance, synchronized by a counter variable.
- **Guard Clauses:** Inputs are validated (e.g., checking for empty arrays) before triggering network calls.

## Next Steps

- Refactor the logic using **Promises** to flatten nested callbacks
- Upgrade to **Async/Await** syntax
- Replace the mock server with real API calls using **fetch**
- Add **TypeScript** for stricter response handling
