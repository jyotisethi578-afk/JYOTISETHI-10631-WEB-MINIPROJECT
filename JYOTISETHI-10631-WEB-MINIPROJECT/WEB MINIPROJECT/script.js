let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    let guess = Number(document.getElementById("guessInput").value);
    let message = document.getElementById("message");

    if (!guess) {
        message.textContent = "Please enter a number!";
        return;
    }

    attempts++;

    if (guess === randomNumber) {
        message.textContent = "🎉 Correct! You guessed the number!";
    } else if (guess > randomNumber) {
        message.textContent = "📉 Too High! Try again.";
    } else {
        message.textContent = "📈 Too Low! Try again.";
    }

    document.getElementById("attempts").textContent =
        "Attempts: " + attempts;
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById("message").textContent = "";
    document.getElementById("attempts").textContent = "";
    document.getElementById("guessInput").value = "";
}
