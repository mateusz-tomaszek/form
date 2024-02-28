let countdownTimer;
let secondsRemaining = 9;
let isRedirecting = false;
let timeout;

function startCountdown() {
    countdownTimer = setInterval(updateCountdown, 1000);
}

function updateCountdown() {
    secondsRemaining--;
    document.getElementById('countdown').textContent = secondsRemaining;
    if (secondsRemaining === 0) {
        redirect();
        document.getElementById('timeoutMessage').style.display = 'none';

    }
}

function redirect() {
    if (!isRedirecting) {
        isRedirecting = true;
        window.location.href = 'https://mateusztomaszek.com.pl/';
    }
}

function resetTimeout() {
    clearTimeout(timeout);
    timeout = setTimeout(displayTimeoutMessage, 40000);
}

function displayTimeoutMessage() {
    document.getElementById('timeoutMessage').style.display = 'block';
    document.getElementById('time').style.display = 'block';
    startCountdown();
}



document.addEventListener('mousemove', function() {
    resetTimeout();
});

document.addEventListener('keypress', function() {
    resetTimeout();
});




document.getElementById('cancelButton').addEventListener('click', function() {
    clearTimeout(timeout);
    clearInterval(countdownTimer);
    isRedirecting = false;
    document.getElementById('timeoutMessage').style.display = 'none';
    document.getElementById('time').style.display = 'none';

});

resetTimeout();