document.getElementById('playButton').addEventListener('click', function() {
    document.getElementById('birthdaySong').play();
    alert('Happy Birthday, Princy!');
    showConfetti();
});

document.body.addEventListener('dblclick', function() {
    const hiddenMessage = document.getElementById('hiddenMessage');
    hiddenMessage.style.display = 'block';
    setTimeout(() => hiddenMessage.style.display = 'none', 5000);
});

document.body.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    const backgroundMusic = document.getElementById('backgroundMusic');
    if (backgroundMusic.paused) {
        backgroundMusic.play();
    } else {
        backgroundMusic.pause();
    }
});

function showConfetti() {
    const confettiContainer = document.createElement('div');
    confettiContainer.style.position = 'fixed';
    confettiContainer.style.top = '0';
    confettiContainer.style.left = '0';
    confettiContainer.style.width = '100%';
    confettiContainer.style.height = '100%';
    confettiContainer.style.pointerEvents = 'none';
    confettiContainer.style.zIndex = '9999';
    document.body.appendChild(confettiContainer);

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
        confettiContainer.appendChild(confetti);
    }

    setTimeout(() => {
        document.body.removeChild(confettiContainer);
    }, 3000);
}
