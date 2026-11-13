
function apiRequest() {
   return new Promise((resolve, reject) => {
       resolve("API call succeeded!");
       //reject("Error at api call")
   });
}

async function makeApiCall() {
    let result = await apiRequest();
    console.log(result);
}

makeApiCall();