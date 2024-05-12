document.addEventListener("DOMContentLoaded", setTimer);
let isRunning = false;
let elapsedTime = 0;
let intervalId = null;
let startTime = 0;

function setTimer() {
  const startButton = document.querySelector('.start-button');
  const stopButton = document.querySelector('.stop-button');
  const resetButton = document.querySelector('.reset-button');

  startButton.addEventListener('click', start);
  stopButton.addEventListener('click', stop);
  resetButton.addEventListener('click', reset);
}

function updateDisplay() {
  const display = document.querySelector('.display');

  let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  let mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
  let seconds = Math.floor((elapsedTime / 1000) % 60);
  let milliseconds = Math.floor((elapsedTime % 1000) / 10);

  hours = String(hours).padStart(2, '0');
  mins = String(mins).padStart(2, '0');
  seconds = String(seconds).padStart(2, '0');
  milliseconds = String(milliseconds).padStart(2, '0');

  display.textContent = `${hours} : ${mins} : ${seconds} : ${milliseconds}`;
}

function start() {
  if (!isRunning) {
    isRunning = true;
    startTime = Date.now() - elapsedTime;
    intervalId = setInterval(function() {
      elapsedTime = Date.now() - startTime;
      updateDisplay();
    }, 10);
  }
}

function stop() {
  if (isRunning) {
    clearInterval(intervalId);
    isRunning = false;
  }
}

function reset() {
  stop();
  elapsedTime = 0;
  updateDisplay();
}
