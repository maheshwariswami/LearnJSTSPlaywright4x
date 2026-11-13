async function getTestResults() {
    return "getTestResults Passed";
}

getTestResults().then(function(results)
{
    console.log(results)
});

function getTestResults1() {
    return Promise.resolve("Pass");
}

getTestResults1().then(function(results) {
    console.log(results); // Outputs: "Pass"
});

 async function testApi(){

     return await Promise.resolve("API call succeeded!");
}

testApi().then(function(results)
{
    console.log(results)
}  )