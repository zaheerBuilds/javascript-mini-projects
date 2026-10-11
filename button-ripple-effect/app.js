const btn = document.querySelector(".btn");

btn.addEventListener("mouseover", (event)=> {
    const x = (event.pageY - btn.offsetLeft); 
    const y = (event.pageX - btn.offsetTop); 

    btn.style.setProperty("--xPos", x + "px");
    btn.style.setProperty("--yPos", y + "px");
})