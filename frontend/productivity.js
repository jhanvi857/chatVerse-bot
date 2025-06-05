let minutes = 25;
let seconds = 0;
const timerDisplay = document.getElementById("timer");
function updateTimer() {
  if (seconds === 0) {
    if(minutes === 0) {
      clearInterval(timerInterval);
      timerDisplay.textContent = "Time's up!";
      return;
    }
    minutes--;
    seconds = 59;
  } else {
    seconds--;
  }
  const displayMinutes = String(minutes).padStart(2, '0');
  const displaySeconds = String(seconds).padStart(2, '0');
  timerDisplay.textContent = `${displayMinutes}:${displaySeconds}`;
}
// const timerInterval = setInterval(updateTimer, 1000);