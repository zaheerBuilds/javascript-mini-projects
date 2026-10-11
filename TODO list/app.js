const input = document.getElementById("userInput");
const listDiv = document.getElementById("listDiv");

const storageKey = "lists";

let items = [];

function renderItems() {
    for(let [idx, item] of items.entries()) {
        console.log(idx, item);
        let text = document.createElement("p");
        let delBtn = document.createElement("Button");

        text.textContent = item;
        text.style.marginRight = "10px";
        text.style.display = "inline";

        delBtn.textContent = "delete";
        delBtn.onclick = () => deleteItems(idx,);

        let div = document.createElement("div");
        div.appendChild(text);
        div.appendChild(delBtn);

        div.style.marginBottom = "10px";

        listDiv.appendChild(div);
    }
}

function addItems() {

    const value = input.value.trim();
    input.value = "";
    if(!value) {
        alert("you cant add empty list");
        return
    }
    items.push(value);
    listDiv.innerHTML = "";
    renderItems();
    saveItems();
}


function saveItems() {
    let values = JSON.stringify(items);
    localStorage.setItem(storageKey, values);
}

function loadItems() {
    let getValue = localStorage.getItem(storageKey);
    if(getValue) {
        items = JSON.parse(getValue);
        listDiv.innerHTML = ""
        renderItems();
    }
}

function deleteItems(idx) {
    items.splice(idx, 1);
    listDiv.innerHTML = "";
    renderItems();
} 

document.addEventListener("DOMContentLoaded", loadItems);