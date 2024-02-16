const formEl = document.querySelector('.form');

formEl.addEventListener('submit', onSubmit);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function onSubmit(e) {
  e.preventDefault();

  let delay = Number(e.target.delay.value);
  let step = Number(e.target.step.value);
  let amount = Number(e.target.amount.value);

  if (delay < 0 || step < 0 || amount < 0) {
    alert("Введіть не від'ємне число");
    return;
  }
  console.log(Date.now());

  for (let i = 1; i <= amount; i += 1) {
    let position = i;

    createPromise(position, delay)
      .then(({ position, delay }) => {
        console.log(
          `✅ Fulfilled promise ${position} in ${delay}ms`,
          Date.now()
        );
      })
      .catch(({ position, delay }) => {
        console.log(
          `❌ Rejected promise ${position} in ${delay}ms`,
          Date.now()
        );
      });
    delay += step;
  }

  // formEl.reset();
}
