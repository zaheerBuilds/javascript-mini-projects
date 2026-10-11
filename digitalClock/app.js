
let hrsDiv = document.getElementsByClassName("hrs");
let minsDiv = document.getElementsByClassName("mins");
let secDiv = document.getElementsByClassName("sec");



let interval = setInterval( function getTime() {
    let currTime = new Date();
    let hrs = currTime.getHours();
    let mins = currTime.getMinutes();
    let sec = currTime.getSeconds();
    if(hrs > 12) {
        realHr = hrs - 12;
        hrsDiv[0].innerText = realHr + 'PM';
    }
    else {
        hrsDiv[0].innerText = hrs + 'AM';
    }
    minsDiv[0].innerText = mins;
    secDiv[0].innerText = sec;
}, 1000);





