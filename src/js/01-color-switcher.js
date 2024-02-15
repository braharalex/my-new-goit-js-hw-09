const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
let intervalId = 0;

startBtn.addEventListener('click', onStartChangeColor);
stopBtn.addEventListener('click', onStopChangeColor);

function onStartChangeColor() {
  if (startBtn.hasAttribute('disabled')) {
    startBtn.removeAttribute('disabled');

    intervalId = setInterval(() => {
      document.body.style.backgroundColor = getRandomHexColor();
      console.log('kkkkk');
    }, 1000);
    console.log('jjjj');
  }

  startBtn.setAttribute('disabled', '');
}

function onStopChangeColor() {
  startBtn.removeAttribute('disabled');
  clearInterval(intervalId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
