let status1 = ["pass", "fail", "skip"]

console.log(status1.at(-4)) // undefined
console.log(status1.at(-3))
console.log(status1.at(-2))
console.log(status1.at(-1))

console.log(status1)
status1[1] = "Failed"
console.log(status1)

let arr = Array.of()
arr[4] = 12
console.log(arr)