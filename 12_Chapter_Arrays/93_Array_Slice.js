let arr=[1,2,3,4,5 ,6]
arr.slice(1,3) // returns new array
console.log(arr)
console.log(arr.slice(-3,-1)) //Always go from left to right
console.log(arr.slice(-3))
console.log(arr.slice(1))
console.log(arr.slice(0))
console.log(arr.slice(-6))
console.log(arr.slice(-3,-5))

// [ 1, 2, 3, 4, 5, 6 ]
// [ 4, 5 ]
// [ 4, 5, 6 ]
// [ 2, 3, 4, 5, 6 ]
// [ 1, 2, 3, 4, 5, 6 ]
// [ 1, 2, 3, 4, 5, 6 ]
// []

console.log(arr.slice(1,-3)) //[ 2, 3 ]