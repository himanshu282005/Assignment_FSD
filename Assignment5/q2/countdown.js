
function countdown(number) {
    let intervalId = setInterval(() => {
        console.log(number);
        number--;
        if (number < 0) {
            clearInterval(intervalId);
        }
    }, 1000);
}

// Example usage:
countdown(5);
