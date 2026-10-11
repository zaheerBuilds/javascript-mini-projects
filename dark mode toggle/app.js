const inputEl = document.getElementById('dark-mode');
const bodyEl = document.querySelector("body");

console.log(JSON.parse(localStorage.getItem("mode")));

function updateBody() {
    if(inputEl.checked) {
        bodyEl.style.backgroundColor = "black";
    } else {
        bodyEl.style.backgroundColor = "white";
    }
}


inputEl.addEventListener('click', ()=> {
    updateBody();
    updateLocalStorage();
})

function updateLocalStorage() {
    localStorage.setItem("mode", JSON.stringify(inputEl.checked));
}