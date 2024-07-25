let timer;
let isRunning = false;
let minutes = 25;
let seconds = 0;
let totalSeconds = minutes * 60;

const updateDisplay = () => {
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
  updateProgressBar();
};

const updateProgressBar = () => {
  const elapsedSeconds = totalSeconds - (minutes * 60 + seconds);
  const percentage = (elapsedSeconds / totalSeconds) * 100;
  document.getElementById('progress-bar').style.width = `${percentage}%`;
};

const startTimer = () => {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(timer);
          isRunning = false;
          alert('Time is up!');
        } else {
          minutes--;
          seconds = 59;
        }
      } else {
        seconds--;
      }
      updateDisplay();
    }, 1000);
  }
};

const stopTimer = () => {
  clearInterval(timer);
  isRunning = false;
};

const resetTimer = () => {
  clearInterval(timer);
  isRunning = false;
  minutes = 25;
  seconds = 0;
  totalSeconds = minutes * 60;
  updateDisplay();
};

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', stopTimer);
document.getElementById('reset').addEventListener('click', resetTimer);

updateDisplay();
