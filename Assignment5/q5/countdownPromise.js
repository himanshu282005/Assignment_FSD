
function countdownPromise(number) {
    return new Promise((resolve) => {
        function nextStep() {
            if (number >= 0) {
                console.log(number);
                number--;
                setTimeout(nextStep, 1000);
            } else {
                resolve();
            }
        }
        nextStep();
    });
}

// Example usage:
countdownPromise(5).then(() => console.log('Countdown finished!'));
