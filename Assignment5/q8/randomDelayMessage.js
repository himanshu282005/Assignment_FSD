
function randomDelayMessage(message) {
    let randomDelay = Math.floor(Math.random() * 5000) + 1000; // 1 to 5 seconds
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(message);
            resolve();
        }, randomDelay);
    });
}

// Example usage:
randomDelayMessage("Random message").then(() => console.log("Done"));
