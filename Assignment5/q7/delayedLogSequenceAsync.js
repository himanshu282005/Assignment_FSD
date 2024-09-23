
async function delayedLogSequenceAsync(messagesAndDelays) {
    for (let [message, delay] of messagesAndDelays) {
        await wait(delay);
        console.log(message);
    }
}

// Example usage:
delayedLogSequenceAsync([
    ["Message 1", 1000],
    ["Message 2", 2000],
    ["Message 3", 1000]
]);
