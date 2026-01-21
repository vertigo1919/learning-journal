# JavaScript Promises

A series of challenges transitioning from the **Callback Pattern** to **Promises**. This journal documents my progression from manual promisification to managing dynamic parallel execution.

## What I Learned

- **Manual Promisification**: Wrapping traditional Node.js callback functions in the `new Promise` constructor.
- **The Single Chain Rule**: Returning promises within `.then()` blocks to keep chains flat and avoid "Promise Nesting"
- **Eager Execution**: Understanding that Promises start their background task immediately upon creation, not when resolved.
- **Parallelism with Promise.all**: Managing multiple concurrent file-system operations and aggregating their results into a single dataset.
- **Dynamic Path Management**: Using directory reading (`readdir`) to generate a dynamic list of tasks.

## Project Structure

- **src/01_callbacks_and_wrapping.js** – Basic Node callbacks and "wrapper" functions.
- **src/02_constructing_promises.js** – Creating Promise objects and understanding the Executor function.
- **src/03_manual_promisification.js** – Converting `fs.readFile` into a Promise-returning function.
- **src/04_native_fs_promises.js** – Implementing Node’s built-in `node:fs/promises` module.
- **src/05_promise_chains_and_parallel.js** – Advanced logic: `countWordsInDir` using `map`, `Promise.all`, and `reduce`.
- **data/** – Source text files used for word counting simulations.

## Usage

To ensure file paths are resolved correctly, please run the scripts from the **project root**:

```bash
# Example: Running the advanced directory word counter
node src/05_promise_chains_and_parallel.js
```
