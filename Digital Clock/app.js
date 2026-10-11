const hourEl = document.getElementById("hrs");

const minuteEl = document.getElementById("mins");

const secondEl = document.getElementById("sec");

const ampmEl = document.getElementById("ampm");


setInterval(() => {
    updateTime();
}, 1000);

function updateTime() {
    let time = new Date;
    let hrs = time.getHours();
    let mins = time.getMinutes();
    let secs = time.getSeconds();

    if(hrs>12) {
        if(hrs >10) {
        hourEl.innerText = String(hrs-12).padStart(2,'0');
        ampmEl.innerText = "PM";
    } 

    } else {
        if(hrs >10) {
        hourEl.innerText = String(hrs).padStart(2,'0');
    } 
    }

    if(mins >10) {
        minuteEl.innerText = String(mins).padStart(2,'0');
    } 

    if(secs >10) {
        secondEl.innerText = String(secs).padStart(2,'0');
    } 


}