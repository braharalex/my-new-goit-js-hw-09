const refs = {
  daysEl: document.querySelector('[data-days]'),
  hoursEl: document.querySelector('[data-hours]'),
  minutesEl: document.querySelector('[data-minutes]'),
  secondsEl: document.querySelector('[data-seconds]'),
  startBtn: document.querySelector('[data-start]'),
};

let futureDate = new Date(2024, 2, 24, 13, 12, 12);
let isActive = false;

const timer = {
  intervalId: null,
  start() {
    this.intervalId = setInterval(() => {
      let date = new Date();
      let timerTime = futureDate - date;
      const { days, hours, minutes, seconds } = convertMs(timerTime);
      updateTimerInterface(days, hours, minutes, seconds);
    }, 1000);
  },
  stop() {
    // 00:00:00:00
    clearInterval(this.intervalId);
  },
};
refs.startBtn.addEventListener('click', timer.start.bind(timer));

// timer.start();

function updateTimerInterface(days, hours, minutes, seconds) {
  refs.daysEl.textContent = days;
  refs.hoursEl.textContent = hours;
  refs.minutesEl.textContent = minutes;
  refs.secondsEl.textContent = seconds;
}

function pad(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
