// Special Numeric Values
// JavaScript has special numeric values that represent concepts like infinity and "not a number" (NaN). 
// These values are part of the Number type and can be used in various mathematical operations.

//Infinity: Represents positive infinity. It is the result of dividing a positive number by zero or exceeding the maximum representable number in JavaScript.
let positiveInfinity = Infinity;
console.log(positiveInfinity); // Output: Infinity  
console.log(typeof positiveInfinity); // Output: "number"

//Negative Infinity: Represents negative infinity. It is the result of dividing a negative number by zero or exceeding the minimum representable number in JavaScript.
let negativeInfinity = -Infinity;
console.log(negativeInfinity); // Output: -Infinity
console.log(typeof negativeInfinity); // Output: "number"

//NaN: Represents "Not a Number". It is the result of an operation that failed to produce a valid number.
let notANumber = NaN;
console.log(notANumber); // Output: NaN
console.log(typeof notANumber); // Output: "number" 

console.log(1/0); // Output: Infinity
console.log(-1/0);
console.log(0/0); // Output: NaN
console.log(typeof infinity); // Output: "number"
console.log("'hello'/2"); // Output: NaN
console.log(typeof NaN); // Output: "number"