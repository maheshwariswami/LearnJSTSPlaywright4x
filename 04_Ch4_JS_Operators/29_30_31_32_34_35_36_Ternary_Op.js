let actualStatus = 200
let expectedStatus = 200
let testResult = (actualStatus === expectedStatus) ? "Test Passed" : "Test Failed"
console.log(testResult) // Test Passed

let environment = "production"
let productionMessage = (environment === "production") ? "http://localhost:3000" : "http://staging.example.com"
console.log(productionMessage) // You are in production

let productionMessage2 =  (environment === "staging") ? "http://staging.example.com" : "http://dev.example.com"
console.log(productionMessage2) // You are in development

let isCI = true
let ciMessage = (isCI) ? "Running in CI environment" : "Running in local environment"
console.log(ciMessage) // Running in CI environment 

let responseTime = 150
let sla = 1000
let statusMessage = (responseTime <= sla) ? "Response time is within SLA" : "Response time exceeded SLA"
console.log(statusMessage) // Response time is within SLA   
console.log(`Response time: ${responseTime}ms, SLA: ${sla}ms, Status: ${statusMessage}`)
 // Response time: 150ms, SLA: 1000ms, Status: Response time is within SLA
console.log(`What is the SLA? ${sla}ms`)

let condition = true
let isSKMale = condition ? true : false
console.log(isSKMale) // true
console.log(`Is SK Male? ${isSKMale}`) // Is SK Male? true

//Nested Ternary Operator
let age = 19  
// then you can go goa and drink beer 
let canGoToGoaandDrink = age> 18 ? 
                        (age > 25 ? "You can go to Goa and drink beer" : "You can go to Goa but cannot drink beer") 
                        : "No Goa" 
console.log(`You are ${age} years old, ${canGoToGoaandDrink}`) // You are 25 years old, You cannot go to Goa

//bengify

let statusCode = 503
let statusMessage1 = 
                    (statusCode === 200) ? "OK" : 
                    (statusCode === 404) ? "Not Found" :
                    (statusCode === 500) ? "Internal Server Error" : "Unknown Status Code"
console.log(`Status Code: ${statusCode}, Message: ${statusMessage1}`) // Status Code: 404, Message: Not Found

let temp=5;
let feel= (temp>=40) ? "Very Hot" : 
            (temp>=30) ? "Hot" : 
                (temp>=20) ? "Warm" : 
                    (temp>=10) ? "Cool" : "Cold"
console.log(`Temperature: ${temp}°C, Feels: ${feel}`) // Temperature: 35°C, Feels: Hot                    