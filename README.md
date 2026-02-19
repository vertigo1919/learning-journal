# Coding Learning Journal

This repository serves as a permanent archive of my coding progression, daily drills, and algorithm practice, etc.

> [!IMPORTANT]
> For my production applications, please visit my [pinned repositories](https://github.com/vertigo1919) on my profile page.

## 📂 Repository Structure

### 1. /northcoders

Daily exercises and pair-programming drills completed during the Northcoders Software Development Bootcamp.

- **Focus:** JavaScript, Node.js, Test-Driven Development (TDD), Jest, Pair Programming.
- _Note: These are snapshots of daily progression and may not represent final production code._

#### 📑 Index

| Module           | Exercise / Topic                                                                                                                               | Concepts Covered                                                                                                                                                                       |
| :--------------- | :--------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Fundamentals** | **[Data Structures (Stack & Queue)](./northcoders/2_fundamentals/05-OOP-data-structures)**                                                     | Factory Functions, Prototypal Inheritance, Big O (O(1) vs O(n)), LIFO/FIFO.                                                                                                            |
|                  | **[OOP: Hero Journey](./northcoders/2_fundamentals/06%20-OOP-inheritance/hero-journey)**                                                       | Classes & Inheritance, Dependency Injection, Separation of Concerns.                                                                                                                   |
|                  | **[Async: Callbacks (Cat Server)](./northcoders/2_fundamentals/07-callback-hell)**                                                             | Event Loop, Error-First Pattern, Inversion of Control, Concurrency.                                                                                                                    |
|                  | **[Async: Promises](./northcoders/2_fundamentals/08-promises)**                                                                                | Promisification, `Promise.all`, Chain flattening, `fs/promises`.                                                                                                                       |
|                  | **[Async: Modern Syntax](./northcoders/2_fundamentals/09-async-await)**                                                                        | `async/await`, `try/catch`, `axios`, ES Modules vs CommonJS.                                                                                                                           |
| **Backend**      | **[HTTP & Streams](./northcoders/3_backend/1-GET-requests)**                                                                                   | `https` module vs `fetch`, Streams & Buffers, Event Emitters, Request Lifecycle.                                                                                                       |
|                  | **[SQL Fundamentals](./northcoders/3_backend/2-SQL)**                                                                                          | Relational Design, Normalization, Joins, `dotenv`, Connection Pooling (`pg`).                                                                                                          |
| **Frontend**     | **[Interactive DOM Timer](./northcoders/4_frontend/00-DOM-timer)**                                                                             | Event Delegation, Dynamic DOM Generation, State Management, CSS Flexbox. [Live Demo 🚀](https://vertigo1919.github.io/learning-journal/northcoders/4_frontend/00-DOM-timer/index.html) |
| **Frontend**     | **[React: Jukebox](https://github.com/vertigo1919/learning-journal/tree/main/northcoders/4_frontend/2-React/1-jukebox)**                       | Component Architecture, Props, Dynamic List Rendering, Conditional CSS, Monorepo Deployment. [Live Demo 🚀](https://react-jukebox-andrea.netlify.app/)                                 |
| **Frontend**     | **[React: User Directory](https://github.com/vertigo1919/learning-journal/tree/main/northcoders/4_frontend/2-React/2-data-fetching-in-react)** | `useEffect` (Dependency Arrays), `useState`, Async Data Fetching, Error Handling, Loading States, CSS Grid. [Live Demo 🚀](https://nc-react-user-directory.netlify.app/)               |

---

## 🛠 Tech Stack & Tools

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=flat&logo=node.js&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=flat&logo=postgresql&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=flat&logo=jest&logoColor=white)

## 🚀 Learning Journal Mini Projects

- **DOM Timer:** [Live Demo 🚀](https://react-jukebox-andrea.netlify.app/)A functional countdown tool practicing direct DOM manipulation and event delegation in vanilla JavaScript.
- **React Jukebox:** [Live Demo 🚀](https://vertigo1919.github.io/learning-journal/northcoders/4_frontend/00-DOM-timer/index.html) A component-based music player exploring state-driven UI and props-down data flow. Hosted on Netlify to demonstrate monorepo CI/CD workflows.
- **React: User Directory** [Live Demo 🚀](https://nc-react-user-directory.netlify.app/) This project focuses on handling asynchronous requests and ensuring the UI accurately reflects the current state of the data. It allows the user to broswe a diretory of users data fetched from an API.
