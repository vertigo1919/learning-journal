# ⏳ DOM Timer: Frontend Study

[🚀 View Live Demo](https://vertigo1919.github.io/learning-journal/northcoders/4_frontend/1-HTML-CSS-DOM/00-DOM-timer/index.html)

My first project moving from backend logic to the browser. I built this to practice turning a static design into a functional tool using JavaScript to control the DOM.

## 🧠 Key Learnings (Day 1 Frontend)

- **The "Parent" Listener:** Instead of giving every button its own code, I learned to put one listener on the container (Event Delegation). It "catches" clicks from any button inside automatically.
- **Data-Driven UI:** I stopped hardcoding buttons in HTML. Now, I use a JavaScript array to generate them. If I change the array, the website updates itself.
- **Attributes as Data:** I learned to hide "secret" info in HTML using `data-amount`. JavaScript reads these values to know exactly how much time to add.
- **Flexbox Layout:** I moved away from basic blocks to a modern "Box" layout. I used `flex-wrap` and `width: 100%` to force the Start/Reset buttons onto their own line.
- **State vs. View:** I separated the timer math from the display logic. The `updateDisplay()` function has one job: keeping the screen in sync with the actual time.

## 🛠 Project Structure

- **`index.html`**: Semantic structure with a custom "How it Works" section.
- **`script.js`**: Logic for intervals, state management, and event bubbling.
- **`styles.css`**: Professional UI styling with custom transitions and shadows.

---

_Developed as part of the Frontend module at **Northcoders**._
