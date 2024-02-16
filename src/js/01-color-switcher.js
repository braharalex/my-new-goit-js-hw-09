const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
let intervalId = null;

startBtn.addEventListener('click', onStartChangeColor);
stopBtn.addEventListener('click', onStopChangeColor);

function onStartChangeColor() {
  // startBtn.setAttribute('disabled', '');
  startBtn.disabled = true;

  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onStopChangeColor() {
  clearInterval(intervalId);
  startBtn.disabled = false;
  // startBtn.removeAttribute('disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
