
function openBrowser(url, callback) {
    console.log(`Opening browser and navigating to: ${url}`);
    callback(url);
}

function loginUser(username, password, callback) {
    console.log(`Logging in user: ${username}`);
    callback(username);
}

function fetchData(apiEndpoint, callback) {
    console.log(`Fetching data from API endpoint: ${apiEndpoint}`);
    callback(apiEndpoint);
}
// Callback Hell Example
openBrowser('https://example.com', function(url) {
    loginUser('testUser', 'password123', function(username) {
        fetchData('/api/data', function(apiEndpoint) {
            console.log(`Data fetched successfully from ${apiEndpoint} for user ${username} after opening ${url}`);
        }); 
    });
});

// Opening browser and navigating to: https://example.com
// Logging in user: testUser
// Fetching data from API endpoint: /api/data
// Data fetched successfully from /api/data for user testUser after opening https://example.com