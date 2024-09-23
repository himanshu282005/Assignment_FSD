
function delayedLogSequence(messagesAndDelays) {
    let promise = Promise.resolve();
    
    messagesAndDelays.forEach(([message, delay]) => {
        promise = promise.then(() => {
            return wait(delay).then(() => console.log(message));
        });
    });
}

// Example usage:
delayedLogSequence([
    ["Message 1", 1000],
    ["Message 2", 2000],
    ["Message 3", 1000]
]);
