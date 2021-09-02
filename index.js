const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');

startBtn.addEventListener("click", onStartBtn);
stopBtn.addEventListener("click", onStopBtn);

let id = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
function onStartBtn() {
  if (id) return;
  startBtn.disabled = true;
  id = setInterval(() => {
    const rundom = randomIntegerFromInterval(0, colors.length - 1);
    document.body.style.backgroundColor = colors[rundom];
  }, 1000);
}

function onStopBtn() {
  startBtn.disabled = false;
  clearInterval(id);
  id = null;
}
