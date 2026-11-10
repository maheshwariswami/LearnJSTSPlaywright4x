let checkAuth = Promise.resolve("User is authenticated.");
let checkDB = Promise.resolve("Database connection established.");
let checkCache = Promise.resolve("Cache is ready.");

Promise.all([checkAuth, checkDB, checkCache])
    .then((messages) => {
        console.log("All checks passed:", messages);
    })

//     All checks passed: [
//   'User is authenticated.',
//   'Database connection established.',
//   'Cache is ready.'
// ]