// rapidtables
// Decimal, Hexadecimal, Octal and Binary Numbers in JavaScript
// https://www.rapidtables.com/convert/number/decimal-to-hex.html

let hex= 0xFF //255
console.log(hex)
let octal= 0o77 //63
console.log(octal)
let binary= 0b1010 //10
console.log(binary)

let bigInt= 1234567890123456789012345678901234567890n
let million= 1_000_000
let billion= 1_000_000_000
let time= 1.5e6 //1500000
let distance= 1.5e-6 //0.0000015
let tiny= Number.MIN_VALUE //5e-324
let huge= Number.MAX_VALUE //1.7976931348623157e+308
let infinity= Infinity
let notANumber= NaN

console.log(typeof hex)
console.log(typeof octal)
console.log(typeof binary)
console.log(typeof bigInt)  
console.log(typeof million)
console.log(typeof billion)
console.log(typeof time)
console.log(typeof distance)
console.log(typeof tiny)
console.log(typeof huge)
console.log(typeof infinity)
console.log(typeof notANumber)

console.log("Floating Point Numbers in JavaScript")
// Floating Point Numbers in JavaScript
let float1= 0.1
let float2= -0.2
let float3= .3
let float4= 4.
let float5= 1.23e4 //12300
let float6= 1.23e-4 //0.000123
console.log(typeof float1)
console.log(typeof float2)
console.log(typeof float3)
console.log(typeof float4)
console.log(typeof float5)
console.log(typeof float6)

console.log("Exponential Notation in JavaScript")
// Exponential Notation in JavaScript
let exp1= 1e3 //1000
let exp2= 1e-3 //0.001
console.log(typeof exp1)
console.log(typeof exp2)


