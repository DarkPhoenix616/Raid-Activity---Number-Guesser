const audio = document.getElementById('BackgroundAudio');
const muteButton = document.getElementById('MuteButton');
const startGameButton = document.getElementById('StartGame');

audio.play();


muteButton.addEventListener('click', function() {
    if (audio.muted) {
        audio.muted = false;
        muteButton.textContent = 'Mute';
    } else {
        audio.muted = true;
        muteButton.textContent = 'Unmute';
    }
});

startGameButton.addEventListener('click', function() {
    window.location.href = 'main.html';
});
