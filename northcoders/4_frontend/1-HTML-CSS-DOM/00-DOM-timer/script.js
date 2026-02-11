const timeValue = document.getElementById("time-value");
let timer = 0;
let intervalID = null;

// duration array for option2
const durations = [15, 30, 45, 60];

//initialise display for first run
updateDisplay();

//run JS
//directBinding();
dynamicDelegation();

function updateDisplay() {
  timeValue.textContent = timer;
}

function addTime(duration) {
  timer += duration;
  updateDisplay();
}

function resetTime() {
  timer = 0;
  updateDisplay();
  clearInterval(intervalID);
  intervalID = null;
}

function startCountdown() {
  if (intervalID !== null) return;
  // prevents a timer from starting if another one is running

  if (timer === 0) return;
  // prevents a timer from starting if timer is at 0

  intervalID = setInterval(() => {
    if (timer <= 0) {
      clearInterval(intervalID);
      intervalID = null;
      timer = 0;
    } else {
      timer--;
    }

    updateDisplay();
  }, 1000);
}

//OPTION1: direct binding and manual HTML buttons
function directBinding() {
  const startBtn = document.getElementById("start-btn");
  const resetBtn = document.getElementById("reset-btn");

  const timeButtons = document.querySelectorAll("button[data-amount]");

  timeButtons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const amount = Number(event.currentTarget.dataset.amount);
      addTime(amount);
    });
  });

  startBtn.addEventListener("click", startCountdown);
  resetBtn.addEventListener("click", resetTime);
}

//OPTION2:dynamic genration and Event delegation and

function dynamicDelegation() {
  const hardCodedContainer = document.getElementById("hard-coded-add-time");
  const dynamicContainer = document.getElementById("dynamic-buttons");
  const controls = document.getElementById("timer-controls");

  // remove hard-coded buttons for option1
  if (hardCodedContainer) {
    hardCodedContainer.remove();
  }

  //dynamically generate buttons from array
  durations.forEach((seconds) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "timer-control-button";
    btn.textContent = `+${seconds}s`;
    btn.dataset.amount = seconds;

    dynamicContainer.appendChild(btn);
  });

  // Here we imeplment  Event delegation
  // it's a technique where you attach a single event listener
  // to a parent container instead of individual listeners to every child element.
  // It relies on event bubbling to catch interactions from any child
  // (even dynamically added ones) and uses the event.target property
  // to identify exactly which specific element was clicked.

  controls.addEventListener("click", (event) => {
    //this is for storing the name of the element that was clicked
    const target = event.target;

    // guard close for exiting in case something else is clicked
    if (!target.matches(".timer-control-button")) return;

    if (target.dataset.amount) {
      addTime(Number(target.dataset.amount));
    } else if (target.id === "start-btn") {
      startCountdown();
    } else if (target.id === "reset-btn") {
      resetTime();
    }
  });
}
