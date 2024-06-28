let lives = 3;
const HB = document.getElementById('health');
const HB2 = document.getElementById('health2');

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
        messageElement.textContent = "Correct! You've dodged the bullet!";
        messageElement.style.color = "green";
        //gameStatus.textContent="You have won the game!!";
        decreaseHealth2(20);
    } else {
        lives--;
        livesElement.textContent = lives;
        messageElement.textContent = "Wrong! You got hit!";
        messageElement.style.color = "red";
        gameStatus.textContent="You have been Shot!!";
        decreaseHealth(20);

        if (HB.style.height < 0 +'px' || HB2.style.height < 0 + 'px') {
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
    resetHealth();
    resetHealth2();
}
