let secondsElapsed = 6000;
let interval;

const time = document.getElementById("time");

function setTime() {
    let mins = Math.floor( secondsElapsed / 60 );
    let seconds = secondsElapsed % 60;

    if(seconds < 10 && mins < 10) {
        time.textContent = `0${mins}:0${seconds}`;
    } else if( mins < 10 && seconds >= 10) {
        time.textContent = `0${mins}:${seconds}`;
    } else if (mins>=10 && seconds < 10) {
        time.textContent = `${mins}:0${seconds}`;
    }

    else {
        time.textContent = `${mins}:${seconds}`;
    }
}

function startTime() {
    secondsElapsed++
    setTime();
}

function startWatch() {
    if(interval) stopWatch();
    interval = setInterval(startTime, 1000);
}

function stopWatch() {
    clearInterval(interval);
}
function resetWatch() {
    stopWatch()
    secondsElapsed = 0;
    setTime();
}