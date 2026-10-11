
const testimonial = [
    {
        name: "Rafiullah Safi",
        photoUrl : "assets/1.jpg",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores quam quibusdam, sequi obcaecati, sed qui saepe perferendis aliquam magni doloremque nostrum culpa deserunt amet earum asperiores architecto eveniet, nisi libero."
    },
    {
        name: "Rohullah A",
        photoUrl : "assets/2.jpg",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores quam quibusdam, sequi asperiores architecto eveniet, nisi libero."
    },
    {
        name: "Ahmad Khan",
        photoUrl : "assets/3.jpg",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores quam quibusdam, sequi obcaecati, sed qui saepe perferendis aliquam magni doloremque nostrum culpa deserunt amet earum"
    }
]


let imgEl = document.querySelector("img");
let textEl = document.querySelector("p");
let username = document.querySelector("h4");

// setTimeout(() => {
//     i++
// }, 1000);

let i = 1;
function updateContainer() {
    imgEl.src = i.name;
}