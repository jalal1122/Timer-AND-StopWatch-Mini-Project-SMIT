// timer ⏳
// stopWatch ⏱️

let checkbox = document.getElementById("switch");
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");
let seconds = 0;

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    document.querySelector("h1").textContent = "Timer ⏳";
  } else {
    document.querySelector("h1").textContent = "Stop Watch ⏱️";
  }
});

startBtn.addEventListener("click", () => {
  let timeRun = setInterval(() => {
    seconds++;
    document
  }, 1000);
});
