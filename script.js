// timer ⏳
// stopWatch ⏱️

// 1. When the switch is on timer mode, the h1 should be Timer ⏳, the input group should be displayed, the history container should be hidden, the button container should be hidden, and the button container 2 should be displayed.
// 2. When the switch is on stopWatch mode, the h1 should be Stop Watch ⏱️, the input group should be hidden, the history container should be displayed, the button container should be displayed, and the button container 2 should be hidden.

// 3. When the start button is clicked, the timer should start and the time should be displayed in the format of ss:mm.
// 4. When the stop button is clicked, the timer should stop.
// 5. When the reset button is clicked, the timer should reset and the time should be added to the history container in the format of Lap n = ss:mm.
// 6. When the set time button is clicked, the timer should be set to the input time and the input group should be hidden.

// 7. When the start button is clicked, the stopWatch should start and the time should be displayed in the format of ss:mm.
// 8. When the stop button is clicked, the stopWatch should stop.

// 9. When the reset button is clicked, the stopWatch should reset and the input group should be displayed.

// variables to store the elements
let checkbox = document.getElementById("switch");
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");
let setTimeBtn = document.getElementById("setTime");
// variables to store the time
let seconds = 0;
let minutes = 0;
let inputSeconds = 0;
let inputMinutes = 0;
// variable to store the interval
let timeRun = null;

// event listener for the checkbox to switch between timer and stopwatch
checkbox.addEventListener("change", () => {
  // if the checkbox is checked
  if (checkbox.checked) {
    // change the h1 text content to Timer ⏳
    document.querySelector("h1").textContent = "Timer ⏳";
    // display the input group
    document.getElementsByClassName("inputGroup")[0].style.display = "flex";
    // hide the history container
    document.getElementsByClassName("history-container")[0].style.display =
      "none";
    // hide the button container
    document.getElementsByClassName("button-container")[0].style.display =
      "none";
    // display the button container 2
    document.getElementsByClassName("button-container")[1].style.display =
      "flex";
    // reset the time
    seconds = 0;
    minutes = 0;
    inputSeconds = 0;
    inputMinutes = 0;
    // clear the interval
    timeRun = null;
  }
  //   if the checkbox is not checked
  else if (!checkbox.checked) {
    // change the h1 text content to Stop Watch ⏱️
    document.querySelector("h1").textContent = "Stop Watch ⏱️";
    // hide the input group
    document.getElementsByClassName("inputGroup")[0].style.display = "none";
    // display the history container
    document.getElementsByClassName("history-container")[0].style.display =
      "flex";
    // display the button container
    document.getElementsByClassName("button-container")[0].style.display =
      "flex";
    // hide the button container 2
    document.getElementsByClassName("button-container")[1].style.display =
      "none";
    // reset the time
    seconds = 0;
    minutes = 0;
    inputSeconds = 0;
    inputMinutes = 0;
    // clear the interval
    timeRun = null;
  }
});

// event listeners for the start button on stopwatch
startBtn.addEventListener("click", () => {
  if (timeRun) return; // if the timeRun is not null, return the function
  // set the interval to run every second
  timeRun = setInterval(() => {
    // increment the seconds
    seconds++;
    // if the seconds reach 60, increment the minutes and reset the seconds
    if (seconds == 60) {
      minutes++;
      seconds = 0;
    }
    // display the time
    document.getElementById("time").textContent = `${
      seconds > 9 ? "" : "0"
    }${seconds} : ${minutes > 9 ? "" : "0"}${minutes}`;
  }, 1000);
});

// event listener for the stop button on stopwatch
stopBtn.addEventListener("click", () => {
  // clear the interval
  clearInterval(timeRun);
  // set the interval to null
  timeRun = null;
});

// event listener for the reset button on stopwatch
resetBtn.addEventListener("click", () => {
  // clear the interval
  clearInterval(timeRun);
  //   set the interval to null
  timeRun = null;
  // reset the time
  document.getElementById("time").textContent = "00 : 00";
  // add the time to the history container
  document.querySelector("ul").innerHTML += `<li>Lap ${
    document.getElementById("history").children.length + 1
  } = ${seconds > 9 ? "" : "0"}${seconds} : ${
    minutes > 9 ? "" : "0"
  }${minutes}</li>`;
  // reset the time
  seconds = 0;
  minutes = 0;
});

// event listener for the set time button on timer
setTimeBtn.addEventListener("click", () => {
  // get the input values
  inputSeconds = document.getElementById("inputSec").value;
  inputMinutes = document.getElementById("inputMin").value;
  // hide the input group
  document.getElementsByClassName("inputGroup")[0].style.display = "none";
  // display the time
  document.getElementById("time").textContent = `${
    inputSeconds > 9 ? "" : "0"
  }${inputSeconds} : ${inputMinutes > 9 ? "" : "0"}${inputMinutes}`;
});

// event listener for the start button on timer
document.getElementById("timer-start").addEventListener("click", () => {
  if (timeRun) return; // if the timeRun is not null, return
  // set the interval to run every second
  timeRun = setInterval(() => {
    // decrement the seconds
    inputSeconds--;
    // if the seconds reach 0, decrement the minutes and reset the seconds in dom
    if (inputSeconds <= 0 && inputMinutes <= 0) {
      // clear the interval
      clearInterval(timeRun);
      // set the time in dom to 00 : 00
      document.getElementById("time").textContent = "00 : 00";
      // display the input group
      document.getElementsByClassName("inputGroup")[0].style.display = "flex";
      // reset the input values
      document.getElementById("inputSec").value = "";
      document.getElementById("inputMin").value = "";
      //   set the interval to null
      timeRun = null;
      //   return the function
      return;
    }
    // if the seconds reach 0, decrement the minutes and reset the seconds
    if (inputSeconds < 0) {
      inputMinutes--;
      inputSeconds = 59;
    }
    // display the time
    document.getElementById("time").textContent = `${
      inputSeconds > 9 ? "" : "0"
    }${inputSeconds} : ${inputMinutes > 9 ? "" : "0"}${inputMinutes}`;
  }, 1000);
});

// event listener for the stop button on timer
document.getElementById("timer-stop").addEventListener("click", () => {
  // clear the interval
  clearInterval(timeRun);
  //   set the interval to null
  timeRun = null;
});

// event listener for the reset button on timer
document.getElementById("timer-reset").addEventListener("click", () => {
  // clear the interval
  clearInterval(timeRun);
  //   set the interval to null
  timeRun = null;
  //   reset the time
  document.getElementById("time").textContent = "00 : 00";
  inputSeconds = 0;
  inputMinutes = 0;
  //   display the input group
  document.getElementsByClassName("inputGroup")[0].style.display = "flex";
  //   reset the input values
  document.getElementById("inputSec").value = "";
  document.getElementById("inputMin").value = "";
});
