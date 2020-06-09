const alarm = document.createElement('audio');
alarm.setAttribute("src", "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3");

let countdown1 = 0;
let secondsLeft1 = 60; 
let duration1 = 1;
let isPaused1 = true;
const timerDisplay1 = document.querySelector("#row-1-timer-display");
const startButton1 = document.querySelector("#row-1-start-button");
const resetButton1 = document.querySelector("#row-1-reset-button");
startButton1.addEventListener('click', startFunction1);
resetButton1.addEventListener('click', resetFunction1);
function startFunction1() {
  clearInterval(countdown1);
  isPaused1 = !isPaused1; 
  if (!isPaused1) {countdown1 = setInterval(timer1, 1000);}
}
function resetFunction1() {
  clearInterval(countdown1);
  secondsLeft1 = duration1 * 60;
  countdown1 = 0;
  isPaused1 = true;
}
function timer1() {
  secondsLeft1 --;
  if (secondsLeft1 < 0) {
    clearInterval(countdown1);
    alarm.currentTime = 0;
    alarm.play();
    resetFunction1()}
}
function countdownDisplay1() {
  let hours1 = Math.floor(secondsLeft1 / 60 / 60);
  let minutes1 = Math.floor(secondsLeft1 / 60);
  let remainderSeconds1 = secondsLeft1 % 60;
  let displayedHours1 = 0;
  let displayedMinutes1 = 1;
  let displayedSeconds1 = 0;
  if (hours1 < 10) {displayedHours1 = `0${hours1}`} else {displayedHours1=hours1};
  if (minutes1 < 10) {displayedMinutes1 = `0${minutes1}`} else {displayedMinutes1=minutes1};
  if (remainderSeconds1 < 10) {displayedSeconds1 = `0${remainderSeconds1}`} else {displayedSeconds1=remainderSeconds1};
  timerDisplay1.textContent = `${displayedHours1}:${displayedMinutes1}:${displayedSeconds1}`;
}
function buttonDisplay1() {
  if (isPaused1 && countdown1 === 0) {
    startButton1.textContent = "START";
  } else if (isPaused1 && countdown1 !== 0) {
    startButton1.textContent = "CONTINUE"; 
  } else {
    startButton1.textContent = "PAUSE";
  }
}


let countdown2 = 0;
let secondsLeft2 = 60*45; 
let duration2 = 45;
let isPaused2 = true;
const timerDisplay2 = document.querySelector("#row-2-timer-display");
const startButton2 = document.querySelector("#row-2-start-button");
const resetButton2 = document.querySelector("#row-2-reset-button");
startButton2.addEventListener('click', startFunction2);
resetButton2.addEventListener('click', resetFunction2);
function startFunction2() {
  clearInterval(countdown2);
  isPaused2 = !isPaused2; 
  if (!isPaused2) {countdown2 = setInterval(timer2, 1000);}
}
function resetFunction2() {
  clearInterval(countdown2);
  secondsLeft2 = duration2 * 60;
  countdown2 = 0;
  isPaused2 = true;
}
function timer2() {
  secondsLeft2 --;
  if (secondsLeft2 < 0) {
    clearInterval(countdown2);
    alarm.currentTime = 0;
    alarm.play();
    resetFunction2()}
}
function countdownDisplay2() {
  let hours2 = Math.floor(secondsLeft2 / 60 / 60);
  let minutes2 = Math.floor(secondsLeft2 / 60);
  let remainderSeconds2 = secondsLeft2 % 60;
  let displayedHours2 = 0;
  let displayedMinutes2 = 1;
  let displayedSeconds2 = 0;
  if (hours2 < 10) {displayedHours2 = `0${hours2}`} else {displayedHours2=hours2};
  if (minutes2 < 10) {displayedMinutes2 = `0${minutes2}`} else {displayedMinutes2=minutes2};
  if (remainderSeconds2 < 10) {displayedSeconds2 = `0${remainderSeconds2}`} else {displayedSeconds2=remainderSeconds2};
  timerDisplay2.textContent = `${displayedHours2}:${displayedMinutes2}:${displayedSeconds2}`;
}
function buttonDisplay2() {
  if (isPaused2 && countdown2 === 0) {
    startButton2.textContent = "START";
  } else if (isPaused2 && countdown2 !== 0) {
    startButton2.textContent = "CONTINUE"; 
  } else {
    startButton2.textContent = "PAUSE";
  }
} 


let countdown3 = 0;
let secondsLeft3 = 60*60*24; 
let duration3 = 60*24;
let isPaused3 = true;
const timerDisplay3 = document.querySelector("#row-3-timer-display");
const startButton3 = document.querySelector("#row-3-start-button");
const resetButton3 = document.querySelector("#row-3-reset-button");
startButton3.addEventListener('click', startFunction3);
resetButton3.addEventListener('click', resetFunction3);
function startFunction3() {
  clearInterval(countdown3);
  isPaused3 = !isPaused3; 
  if (!isPaused3) {countdown3 = setInterval(timer3, 1000);}
}
function resetFunction3() {
  clearInterval(countdown3);
  secondsLeft3 = duration3 * 60;
  countdown3 = 0;
  isPaused3 = true;
}
function timer3() {
  secondsLeft3 --;
  if (secondsLeft3 < 0) {
    clearInterval(countdown3);
    alarm.currentTime = 0;
    alarm.play();
    resetFunction3()}
}
function countdownDisplay3() {
  let hours3 = Math.floor(secondsLeft3 / 60 / 60);
  let remainderSeconds3 = secondsLeft3 % (60*60);
  let minutes3 = Math.floor(remainderSeconds3 / 60);
  remainderSeconds3 = secondsLeft3 % 60;
  let displayedHours3 = 0;
  let displayedMinutes3 = 1;
  let displayedSeconds3 = 0;
  if (hours3 < 10) {displayedHours3 = `0${hours3}`} else {displayedHours3=hours3};
  if (minutes3 < 10) {displayedMinutes3 = `0${minutes3}`} else {displayedMinutes3=minutes3};
  if (remainderSeconds3 < 10) {displayedSeconds3 = `0${remainderSeconds3}`} else {displayedSeconds3=remainderSeconds3};
  timerDisplay3.textContent = `${displayedHours3}:${displayedMinutes3}:${displayedSeconds3}`;
}
function buttonDisplay3() {
  if (isPaused3 && countdown3 === 0) {
    startButton3.textContent = "START";
  } else if (isPaused3 && countdown3 !== 0) {
    startButton3.textContent = "CONTINUE"; 
  } else {
    startButton3.textContent = "PAUSE";
  }
} 


function updateHTML() {
  countdownDisplay1();
  buttonDisplay1();
  countdownDisplay2();
  buttonDisplay2();
  countdownDisplay3();
  buttonDisplay3();
}

window.setInterval(updateHTML, 100);
