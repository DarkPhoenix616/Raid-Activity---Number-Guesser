let lives = 3;
const HB = document.getElementById('health');

document.getElementById('guess-form').addEventListener('submit', function(event) {
    event.preventDefault();
    checkGuess();
});

function checkGuess() {
    let correctNumber = Math.floor(Math.random() * 10) + 1;
    const userGuess = parseInt(document.getElementById('guess-input').value);
    const messageElement = document.getElementById('message');
    const gameStatus=document.getElementById('status');
    const livesElement = document.getElementById('lives');

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        messageElement.textContent = "Please enter a valid number between 1 and 10.";
        return;
    }

    if (userGuess === correctNumber) {
        messageElement.textContent = "Correct! You've dodged the bullet! You have won the game";
        messageElement.style.color = "green";
        gameStatus.textContent="You have won the game!!";
        resetGame();
    } else {
        lives--;
        livesElement.textContent = lives;
        messageElement.textContent = "Wrong! You got hit!";
        messageElement.style.color = "red";
        gameStatus.textContent="You have been Shot!!";
        HB.style.height = (HB.offsetHeight-100) + 'px';

        if (lives === 0) {
            messageElement.textContent = "Game Over!";
            gameStatus.textContent="You have been Killed";

            resetGame();
        }
    }

    document.getElementById('guess-input').value = '';
}

function resetGame() {
    correctNumber = Math.floor(Math.random() * 10) + 1;
    lives = 3;
    document.getElementById('lives').textContent = lives;
    document.getElementById('guess-input').value = '';
}
