const counter_display = document.querySelector(".counter-display");
const stop = document.querySelector(".stop");
const start = document.querySelector(".start");
const reset = document.querySelector(".reset");
const speed = document.getElementById("speed");

let count = 0;
let counter = null;
let isRunning = false;

function startCounter() {
    if (isRunning) return;

    isRunning = true;

    counter = setInterval(function () {
        counter_display.textContent = ++count;
    }, Number(speed.value));
}

function stopCounter() {
    clearInterval(counter);
    counter = null;
    isRunning = false;
}

function resetCounter() {
    stopCounter();

    count = 0;
    counter_display.textContent = count;
}

function updateSlider() {
    const min = Number(speed.min);
    const max = Number(speed.max);
    const value = Number(speed.value);

    const percent = ((value - min) / (max - min)) * 100;

    speed.style.background = `linear-gradient(
        to right,
        black 0%,
        black ${percent}%,
        #e5e7eb ${percent}%,
        #e5e7eb 100%
    )`;

    if (isRunning) {
        stopCounter();
        startCounter();
    }
}

start.addEventListener("click", startCounter);
stop.addEventListener("click", stopCounter);
reset.addEventListener("click", resetCounter);
speed.addEventListener("input", updateSlider);
updateSlider();