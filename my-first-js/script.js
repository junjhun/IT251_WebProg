console.log("JS Connected!");

const nameInput = document.getElementById("name-input");
const greetBtn = document.getElementById("greet-btn");
const message = document.getElementById("message");

greetBtn.addEventListener("click", function() {
    const userName = nameInput.ariaValueMax;

    if(userName === "" || userName === null) {
        message.textContent = "Please enter your name.";
    } else {
        message.textContent = "Hello " + userName + "! Welcome to my website.";
    }
});

const countNumber = document.getElementById("counter-value");
const plusBtn = document.getElementById("increment-btn");
const minusBtn = document.getElementById("decrement-btn");
const resetBtn = document.getElementById("reset-btn");

let count = 0;

plusBtn.addEventListener("click", function() {
    count = count + 1;
    countNumber.textContent = count;
});

minusBtn.addEventListener("click", function() {
    count = count - 1;
    countNumber.textContent = count;
});

resetBtn.addEventListener("click", function() {
    count = 0;
    countNumber.textContent = count;
});