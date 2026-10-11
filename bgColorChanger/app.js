let body = document.querySelector("body");

function changeColor(color) {
    body.style.backgroundColor = `${color}`;
}

function randomColor() {
    let red = Math.floor( Math.random() * 255 );
    let green = Math.floor( Math.random() * 255 );
    let  blue = Math.floor( Math.random() * 255 );

    body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}