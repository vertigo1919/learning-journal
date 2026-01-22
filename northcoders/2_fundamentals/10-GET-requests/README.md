# GET requests (https and fetch)

Manually implemented HTTP requests using the low-level `node:https` module to understand how Node.js handles asynchronous networking under the hood. While modern development typically uses the high-level **`fetch` API** (which handles buffering and promises automatically), this project required building those mechanisms from scratch. By using the `https` module, I learned how to manually manage streams, event emitters, and callbacks before refactoring them into modern Promises.

## Context & Attribution

- **My Code:** I wrote all the JavaScript solutions located in the `src/` folder, implementing the logic to connect to servers, parse streams, and manage file I/O.
- **Provided Resources:** The backend API (`nc-leaks.herokuapp.com`) and the sample datasets used for testing were provided by **Northcoders** as part of the challenge specifications.

## What I Learned

- **`https` vs `fetch**`: Understanding that `fetch`is a wrapper around lower-level logic. I had to manually build what`fetch` does automatically: requesting data, waiting for the stream to end, and parsing the buffer.
- **The "Req" vs "Res" Objects**: Distinguishing between `http.ClientRequest` (outgoing, writable stream) and `http.IncomingMessage` (incoming, readable stream).
- **Streams & Buffers**: Manually assembling data packets (chunks) from the response stream using event listeners (`data`, `end`) rather than just awaiting a parsed body.
- **The Event Loop in Action**: Visualizing how the main thread initiates the request (`req.end()`) and how the callback function is handed off to libuv/OS, only returning to the stack once headers are received.
- **Promisification**: Refactoring the callback-based `https.request` into a modern `Promise` wrapper to enable `async/await` syntax.

## Project Structure

### My Solutions (`src/`)

- **src/1A-get-request-http-callback.js** – The core learning exercise. Uses `https.request` with a manual callback function. Heavy logging added to trace the exact execution order of the Event Loop and network phases.
- **src/1B-get-request-http-promises.js** – Refactoring the previous solution into a `Promise` so it can be used with `async/await` and standard file system operations.
- **src/get-people.js** – A practical application fetching a list of people from the API, filtering for specific employees ("northcoders"), and saving the data to a local JSON file.
- **src/getInterests.js** – Advanced concurrency. Reads the local people file, constructs multiple API URLs, and uses `Promise.all` to fetch interest data for all users in parallel.

### Provided Backend

- **NC Leaks API**: A learning API (`/api/confidential`, `/api/people`) that simulates network latency and serves the data streams consumed by my scripts.

## Usage

1. **Run the Callback Example:**
   Observe the console logs to see the "Jump" between synchronous execution and the asynchronous callback.

```bash
node src/1A-get-request-http-callback.js

```

2. **Run the Promise Refactor:**
   Fetches instructions and saves them to `instructions.md`.

```bash
node src/1B-get-request-http-promises.js

```

3. **Run the People Fetcher:**
   Filters users and creates `nortcoders-people.json`.

```bash
node src/get-people.js

```
