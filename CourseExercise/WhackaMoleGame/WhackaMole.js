let score = 0;
let timeLeft = 30;
let timerId = null;
let moleTimer = null;
let paused = false;
let moleInterval = 2000;  // 初始老鼠出现的间隔时间（2秒）

const holes = document.querySelectorAll('.hole');
const scoreDisplay = document.getElementById('score');
const timeLeftDisplay = document.getElementById('time-left');
const startButton = document.getElementById('start-btn');
const pauseButton = document.getElementById('pause-btn');

let activeHole = null;

// Function to randomly select a hole
function randomHole() {
  holes.forEach(hole => hole.classList.remove('active')); // Clear previous active hole
  const randomIndex = Math.floor(Math.random() * holes.length);
  activeHole = holes[randomIndex];
  activeHole.classList.add('active'); // Activate random hole
}

// Function to start the game
function startGame() {
  if (paused) {
    resumeGame();
    return;
  }

  score = 0;
  timeLeft = 60;
  moleInterval = 1000; // Reset the mole appearance interval to initial value
  scoreDisplay.textContent = score;
  timeLeftDisplay.textContent = timeLeft;

  startButton.disabled = true; 
  pauseButton.disabled = false;

  // Mole appears every 1 second initially
  moleTimer = setInterval(randomHole, moleInterval);

  // Countdown timer
  timerId = setInterval(() => {
    if (!paused) {
      timeLeft--;
      timeLeftDisplay.textContent = timeLeft;
      if (timeLeft <= 0) {
        endGame();
      }
    }
  }, 500);

  // Gradually decrease mole appearance interval (speed up the game)
  setInterval(() => {
    if (!paused && moleInterval > 100) {  
      moleInterval -= 100; 
      clearInterval(moleTimer);  
      moleTimer = setInterval(randomHole, moleInterval);  
    }
  }, 5000);  
}

// Function to pause the game
function pauseGame() {
  paused = true;
  clearInterval(moleTimer);
  pauseButton.textContent = "Resume";
}

// Function to resume the game
function resumeGame() {
  paused = false;
  pauseButton.textContent = "Pause";
  moleTimer = setInterval(randomHole, moleInterval); 
}

// Function to end the game
function endGame() {
  clearInterval(timerId);
  clearInterval(moleTimer);
  alert(`Game Over! Your final score is ${score}`);
  startButton.disabled = false; 
  pauseButton.disabled = true; 
  pauseButton.textContent = "Pause";
  holes.forEach(hole => hole.classList.remove('active')); 
}

// Add click event listeners to holes
holes.forEach(hole => {
  hole.addEventListener('click', () => {
    if (hole === activeHole && hole.classList.contains('active')) {
      score++;
      scoreDisplay.textContent = score;
      hole.classList.remove('active'); 
    }
  });
});

// Button event listeners
startButton.addEventListener('click', startGame);
pauseButton.addEventListener('click', () => {
  if (paused) {
    resumeGame();
  } else {
    pauseGame();
  }
});
