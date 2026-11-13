// async function apiCall(name) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (name === "success") {
//                 resolve("API call succeeded!");
//                 console.log("API call completed successfully.");
//             } else {
//                 reject("API call failed!");
//                 console.error("API call encountered an error.");
//             }
//         }, 1000);
//     });
// }

// apiCall("success");
// apiCall("failure");
// apiCall("failure");
// apiCall("success");

 function apiCall(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (name === "success") {
                resolve("API call succeeded!");
                console.log("API call completed successfully.");
            } else {
                reject("API call failed!");
                console.error("API call encountered an error.");
            }
        }, 1000);
    });
}

async function sequentialApiCalls() {
   await apiCall("success");
  
   await apiCall("success");
    await apiCall("failure");
   await apiCall("failure");
}