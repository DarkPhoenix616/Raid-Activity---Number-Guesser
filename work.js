const audio = document.getElementById('BackgroundAudio');
const muteButton = document.getElementById('MuteButton');
const startGameButton = document.getElementById('StartGame');

muteButton.addEventListener('click', function() {
    if (audio.muted) {
        audio.muted = false;
        audio.play();
        muteButton.textContent = 'Mute';
    } else {
        audio.muted = true;
        audio.pause();
        muteButton.textContent = 'Unmute';
    }

});


startGameButton.addEventListener('click', function(event) {
    
    window.location.href = 'main.html';
});

