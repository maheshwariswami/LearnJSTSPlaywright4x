let apiCall = new Promise((resolve, reject) => {
    let success = true; // Simulating a successful API call 
    if (success) {
        resolve("API call succeeded!");
    } else {
        reject("API call failed!");
    }
});
