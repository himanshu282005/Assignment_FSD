
function delayedMessage(message, delay) {
    setTimeout(() => {
        console.log(message);
    }, delay);
}

// Example usage:
delayedMessage("Hello after 3 seconds", 3000);
