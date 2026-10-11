const containerEl = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
    const colorContainerEl = document.createElement("div");
    colorContainerEl.classList.add("color-container");
    containerEl.appendChild(colorContainerEl);
}

const colorContainerEls = document.querySelectorAll(".color-container");

colorContainerEls.forEach( (colorContainerEl)=> {
    let newColor = randColorGenerator();
    colorContainerEl.style.backgroundColor = "#" + newColor;
    colorContainerEl.innerText = `#${newColor}`;
})


function randColorGenerator() {
    const chars = "0123456789abcdef";
    const iteration = 6;
    let colorCode = "";

    for (let index = 0; index < iteration; index++) {
        let randNum = Math.floor( Math.random() * chars.length);

        colorCode += chars.substring(randNum, randNum + 1);
    }

    return colorCode;
}