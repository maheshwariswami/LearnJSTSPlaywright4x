// Numeric separators are a feature introduced in ECMAScript 2021 (ES12) that allows you to use underscores (_) as separators in numeric literals to improve readability. This is especially useful for large numbers, where it can be difficult to quickly discern the value.

// Example of using numeric separators in different types of numeric literals:
console.log("Numeric Separators in JavaScript:");

let million = 1_000_000;
let billion = 1_000_000_000;
let trillion = 1_000_000_000_000;
let hexValue = 0xFF_FF_FF; // Hexadecimal with separators
let binaryValue = 0b1010_1010_1010;

console.log(million); // Output: 1000000
console.log(billion); // Output: 1000000000 
console.log(trillion); // Output: 1000000000000
console.log(hexValue);
console.log(binaryValue);

console.log(typeof million); // Output: number
console.log(typeof billion); // Output: number
console.log(typeof trillion); // Output: number
console.log(typeof hexValue);   // Output: number
console.log(typeof binaryValue); // Output: number

console.log("BigInt types declaraed");
console.log("BigInt types declared with numeric separators:");
// Big Int literals can also use numeric separators:
let bigIntValue = 1_000_000_000_000_000
console.log(bigIntValue);
console.log(typeof bigIntValue); // Output: bigint
let bigIntValue2= BigInt(1_000_000_000_000_000)
console.log(bigIntValue2);
console.log(typeof bigIntValue2); // Output: bigint 
let bigFromNum = BigInt(5)
bigFromNum = 100
console.log(bigFromNum);
console.log(typeof bigFromNum); // Output: bigint

