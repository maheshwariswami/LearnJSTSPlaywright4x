// JavaScript built-in modules are case-sensitive; 'readline' must be lowercase
const readLine = require('readline'); 

// 'process' must be lowercase
const rl = readLine.createInterface({ 
    input: process.stdin, 
    output: process.stdout 
}); 

// Ask the question and handle the input
rl.question("Enter a number: ", (input) => { 
    console.log(`You entered: ${input}`);
    
    // Always close the interface to stop the process from hanging
    rl.close(); 
});
