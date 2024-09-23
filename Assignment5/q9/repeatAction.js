
function repeatAction(action, interval, duration) {
    return new Promise(resolve => {
        let intervalId = setInterval(action, interval);
        
        setTimeout(() => {
            clearInterval(intervalId);
            resolve();
        }, duration);
    });
}

// Example usage:
repeatAction(() => console.log('Repeating action'), 1000, 5000).then(() => console.log('Action stopped'));
