# 👥 User Directory in React

[🚀 View Live Demo](https://nc-react-user-directory.netlify.app/)

I built this project to practice managing the React component lifecycle and fetching data from an external API. This project focuses on handling asynchronous requests and ensuring the UI accurately reflects the current state of the data.

## 🧠 Key Learnings (React Lifecycle & API)

- **Effect Dependency Arrays:** I used `useEffect` with `[userID]` as a dependency. This ensures that the application only initiates a new fetch request when the ID changes, preventing unnecessary network calls.
- **Loading and Error States:** I implemented conditional rendering to display specific UI for loading and error scenarios. This prevents the application from attempting to access properties of a null user object during the fetch process.
- **State-Driven Navigation:** The "Next" and "Previous" buttons update the `userID` state. Because the fetch logic is tied to that state via `useEffect`, the UI updates automatically as the state changes.

## 🛠 Project Structure

- **`api.js`**: Contains the logic for the fetch request and initial response validation.
- **`UserList.jsx`**: The core component managing state for the user data, the current ID, and any potential errors.
- **`App.css`**: Contains variables and styles for the grid layout, card hover effects, and navigation buttons.

---

_Developed as part of the Frontend module at **Northcoders**._
