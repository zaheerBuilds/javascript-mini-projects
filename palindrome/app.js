let input = document.getElementById("userInput");
let button = document.getElementById("check");
let p = document.getElementById("ans");

let value = "";

function palindromeChecker() {
    let palindrome = input.value;
    for(let i=palindrome.length-1; i>=0; i--) {
        value += palindrome[i];
    }

        if(palindrome == value) {
            p.innerText = " P A L I N D R O M E";
        }
        else {
        p.innerText = "not a P A L I N D R O M E";
    }

    input.value = "";
    value = "";
}




