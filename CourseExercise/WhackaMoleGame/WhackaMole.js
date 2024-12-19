// script.js

let score = 0;
let timeLeft = 30;
let timerId = null;
let moleTimer = null;

const holes = document.querySelectorAll('.hole');
const scoreDisplay = document.getElementById('score');
const timeLeftDisplay = document.getElementById('time-left');
const startButton = document.getElementById('start-btn');

let activeHole = null;

// Function to randomly select a hole
function randomHole() {
  holes.forEach(hole => hole.classList.remove('active')); // Remove previous active
  const randomIndex = Math.floor(Math.random() * holes.length);
  activeHole = holes[randomIndex];
  activeHole.classList.add('active');
}

// Function to start the game
function startGame() {
  score = 0;
  timeLeft = 30;
  scoreDisplay.textContent = score;
  timeLeftDisplay.textContent = timeLeft;

  startButton.disabled = true; // Disable the start button

  // Mole appears every 1 second
  moleTimer = setInterval(randomHole, 1000);

  // Countdown timer
  timerId = setInterval(() => {
    timeLeft--;
    timeLeftDisplay.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timerId);
      clearInterval(moleTimer);
      alert(`Game Over! Your final score is ${score}`);
      startButton.disabled = false; // Enable the start button
      holes.forEach(hole => hole.classList.remove('active')); // Clear the grid
    }
  }, 1000);
}

// Add click event listeners to holes
holes.forEach(hole => {
  hole.addEventListener('click', () => {
    if (hole === activeHole && hole.classList.contains('active')) {
      score++;
      scoreDisplay.textContent = score;
      hole.classList.remove('active'); // Remove mole after hit
    }
  });
});

// Add click event listener to start button
startButton.addEventListener('click', startGame);