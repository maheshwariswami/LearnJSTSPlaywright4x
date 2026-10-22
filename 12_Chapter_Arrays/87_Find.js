let nums=[10,25,30,45]
let results = nums.find(temp=> temp > 20)
console.log(results)
let index = nums.findIndex(temp=> temp >20)
console.log(index)
let last = nums.findLast(temp=> temp > 20)
console.log(last)
let lastIndex = nums.findLastIndex(temp=> temp > 20)
console.log(lastIndex)