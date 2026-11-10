Promise.allSettled(
    [Promise.resolve("User is authenticated."),
        Promise.reject("Unable to verify Page Title"),
    Promise.resolve("Database connection established."),
    Promise.resolve("Cache is ready.")]
).then((results) => {
    results.forEach((result) => {
       console.log(result.status, result.value);
    });
}   )

// fulfilled User is authenticated.
// rejected undefined
// fulfilled Database connection established.
// fulfilled Cache is ready.