function startCountdown(duration, display) {
    let timer = duration, minutes, seconds;

    function updateTimer() {
        minutes = Math.floor(timer / 60);
        seconds = timer % 60;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(countdownInterval);
            display.textContent = "00:00";
        }
    }

    updateTimer();  // Initialize the display immediately
    const countdownInterval = setInterval(updateTimer, 1000);
}

window.onload = function () {
    const duration = 15 * 60; // 15 minutes in seconds
    const display = document.querySelector('.timer');
    startCountdown(duration, display);
};