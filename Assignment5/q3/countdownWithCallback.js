
function countdownWithCallback(number, callback) {
    let intervalId = setInterval(() => {
        console.log(number);
        number--;
        if (number < 0) {
            clearInterval(intervalId);
            if (callback) callback();
        }
    }, 1000);
}

// Example usage:
countdownWithCallback(5, () => console.log('Countdown finished!'));
