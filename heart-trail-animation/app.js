const body = document.getElementsByTagName("body")[0];
console.log("hi")

body.addEventListener("mousemove", (event) => {
    let xPos = event.offsetX;
    let yPos = event.offsetY;
    console.log(xPos);

    console.log("hello")
    const spanEl = document.createElement("span");
    spanEl.style.left = xPos + "px";
    spanEl.style.top = yPos + "px";

    const randSize = Math.random() * 100;

    spanEl.style.width = randSize + "px";
    spanEl.style.height = randSize + "px";

    body.appendChild(spanEl);

    setTimeout( () => {
        spanEl.remove();
    }, 3000)
    console.log("HELLO")
})