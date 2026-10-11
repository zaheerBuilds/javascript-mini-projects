const monthNumEl = document.getElementById("month-name");

const dayNameEl = document.getElementById("day-name");

const dayNumEl = document.getElementById("day-number");

const yearEl = document.getElementById("year");

const currDate = new Date;


monthNumEl.innerHTML = `${currDate.toLocaleString("en", {
    month: "long"
})}`;

dayNameEl.innerHTML = `${currDate.toLocaleString("en", {
    weekday: "long"
})}`;

dayNumEl.innerHTML = `${currDate.getDate()}`;

yearEl.innerHTML = `${currDate.getFullYear()}`;


