let apiCall = new Promise((resolve, reject) => {
    let success = true; // Simulating a successful API call 
    if (success) {
        resolve("API call succeeded!");
    } else {
        reject("API call failed!");
    }
});

apiCall.then((message) => {
    console.log(message);
}).catch((error) => {
    console.error(error);
});


let anotherApiCall = new Promise((resolve, reject) => {
    resolve({status: 200, data: "Data fetched successfully!"});
});

anotherApiCall.then((response) => {
    console.log(response);
    console.log(`Status: ${response.status}, Message: ${response.data}`);
}).catch((error) => {
    console.error(error);
});

let testrun = new Promise((resolve, reject) => {
    let isTestSuccessful = false;   
    reject("Test failed due to an error."); // Simulating a failed test run
});
testrun.then((message) => {
    console.log(message);
}).catch((error) => {
    console.error("Caught error :",error);
});