const daysEl = document.getElementById("day");

const hoursEl = document.getElementById("hour");

const minutesEl = document.getElementById("minute");

const secondsEl = document.getElementById("second");

const secondsPassing = new Date("2026-01-01T00:00:00").getTime();

function updateTime() {
    let secondsPassed = new Date().getTime();
    let gap = secondsPassing - secondsPassed;

    let s = 1000;
    let m = s * 60;
    let h = m * 60;
    let d = h * 24;

    daysEl.innerHTML = Math.floor(gap / d );
    hoursEl.innerHTML = Math.floor( (gap % d ) / h );
    
    minutesEl.innerHTML = Math.floor(((gap % d ) % h) / m);

    secondsEl.innerHTML = Math.floor( (((gap % d ) % h) % m) / s );

    setInterval(updateTime, 1000);
}

updateTime();


