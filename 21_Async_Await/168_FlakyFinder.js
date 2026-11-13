// Retry Pattern for Flaky Tests Asynchronous Code Await Example
//One simulated API success after two failures
// Another exhausts all retries and fails


function createFlakyApiCall(successAttempt) {
    let attempt = 0;
    return function () {
        attempt++;
        if(attempt < successAttempt) {
            console.log(`Attempt ${attempt}: API call failed!`);
            return Promise.reject("API call failed!");
        } 
            console.log(`Attempt ${attempt}: API call succeeded!`);
            return Promise.resolve("API call succeeded!");
        
    };
}
/*
const makeCall = createFlakyApiCall();

// 2. Call it multiple times to see it change state
makeCall().catch(() => {}); // Attempt 1: API call failed!
makeCall().catch(() => {}); // Attempt 2: API call failed!
makeCall().then(() => {});  // Attempt 3: API call succeeded!

*/

/*
function createFlakyApiCall() {
    let attempt = 0; // Tracks the number of calls across executions
    
    return function () {
        attempt++; // Fixed typo: 'atempt' -> 'attempt'
        if (attempt < 3) {
            console.log(`Attempt ${attempt}: API call failed!`); // Fixed typo: 'conspole' -> 'console'
            return Promise.reject("API call failed!");
        } else {
            console.log(`Attempt ${attempt}: API call succeeded!`); // Fixed typo: 'cnsole' -> 'console'
            return Promise.resolve("API call succeeded!");
        }
    };
}

// 1. Initialize the flaky API (this returns the inner function)
const makeCall = createFlakyApiCall();

// 2. Call it multiple times to see it change state
makeCall().catch(() => {}); // Attempt 1: API call failed!
makeCall().catch(() => {}); // Attempt 2: API call failed!
makeCall().then(() => {});  // Attempt 3: API call succeeded!

*/


async function retryFlakyApiCall() {
    let out =await createFlakyApiCall(2)
    console.log("Retrying "+out());
}

retryFlakyApiCall();
retryFlakyApiCall();
retryFlakyApiCall();
retryFlakyApiCall();