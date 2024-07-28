document.addEventListener('DOMContentLoaded', function() {
    let countdownElement = document.getElementById('countdown');
    let countdownValue = 5;

    let countdownInterval = setInterval(function() {
        countdownValue--;
        countdownElement.textContent = countdownValue;

        if (countdownValue <= 0) {
            clearInterval(countdownInterval);
            window.location.href = 'index.html'; // Замените на URL вашей главной страницы
        }
    }, 1000);
});
