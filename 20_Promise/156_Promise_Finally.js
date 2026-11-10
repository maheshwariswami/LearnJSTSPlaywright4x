let apiCall = new Promise((resolve, reject) => {
    //resolve("API call succeeded!");
    reject("Error at api call")
});

apiCall.then((message) => {
    console.log(message);
}).catch((error) => {
    console.error(error);
}).finally(() => {
    console.log("API call completed.");
});