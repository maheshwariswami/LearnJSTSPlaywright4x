function apiCall(name) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(name + ": 200 OK");
        }, 1000);
    });
}

async function parallelTest() {
    console.log("Starting of the Test");
    let start = Date.now();

    let r1Promise = apiCall("Login");
    let r2Promise = apiCall("Dashboard");
    let r3Promise = apiCall("Report");

    const [r1, r2, r3] = await Promise.all([r1Promise, r2Promise, r3Promise]);
    console.log(r1);
    console.log(r2);
    console.log(r3);

    console.log("Time : ~" + (Date.now() - start) + "ms");
}

// Starting of the Test
// Login: 200 OK
// Dashboard: 200 OK
// Report: 200 OK
// Time : ~1004ms

parallelTest();