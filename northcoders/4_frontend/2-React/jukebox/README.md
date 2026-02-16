# 🎵 React Jukebox: Component Architecture

[🚀 View Live Demo](https://react-jukebox-andrea.netlify.app/)

My first project moving from vanilla JavaScript to **React**. I built this to understand how to break a user interface into reusable parts and manage data flow through "props" instead of direct DOM manipulation.

### 🧠 Key Learnings (React Basics)

- **Thinking in Components:** Instead of one giant HTML file, I learned to split the UI into small, focused pieces (`Header`, `Songs`, `Stats`). This makes the code cleaner and easier to manage.
- **Props for Data Flow:** I learned that data (like the `tracks` array) lives in the parent (`App`) and flows down to children. The `Songs` component doesn't need to know _where_ the data comes from, just how to display it.
- **Dynamic Lists with `.map()`:** I stopped hardcoding `<li>` tags. I used JavaScript's `.map()` to loop through my data array and generate the playlist automatically. I also learned why the unique `key` prop is critical for React to track items.
- **Conditional Rendering:** I learned to apply logic inside the view. By checking `if (index === currentlyPlaying)`, I can dynamically add a CSS class to highlight the active song without needing a separate "update" function.
- **Derived State:** In the `Stats` component, I didn't manually store the "Total Playcount." Instead, I used `.reduce()` to calculate it on the fly from the `playCounts` object. This ensures the total is always accurate.

### 🛠 Project Structure

- **src/App.jsx:** The "Brain" of the app. It holds the playlist data and coordinates all the child components.
- **src/Components/:**
- `Songs.jsx`: Handles the list logic and renders individual track cards.
- `CurrentlyPlaying.jsx`: A specialized component just for the "Hero" banner.
- `Stats.jsx`: Visualizes data using a leaderboard style.

- **index.css:** Modern styling CSS Grid/Flexbox and keyframe animations for the "pulse" effect.

---

### 🚀 Deployment Workflow (Netlify Monorepo)

Since this project lives inside a larger "Learning Journal" repository, I implemented a targeted deployment strategy using **Netlify**. This allows me to host multiple React applications from a single GitHub repository without conflicts.

**The Process:**

1. **Targeted Build:** Configured the Netlify **Base Directory** to point specifically to `northcoders/4_frontend/2-React/jukebox`.
2. **Build Command:** Triggered `npm run build` only within that subfolder to generate the production-ready `dist` folder.
3. **Automated CI/CD:** Every push to the `main` branch of the journal automatically triggers a new build, ensuring the live demo stays in sync with my code.
4. **Clean Routing:** Set the Vite `base` to `./` to ensure all assets are served correctly from the Netlify root domain.

_Developed as part of the Frontend module at Northcoders._

---
