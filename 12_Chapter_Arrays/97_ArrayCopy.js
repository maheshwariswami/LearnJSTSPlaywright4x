let original = [1,2,3]
let copy=[...original]
console.log(original) //[ 1, 2, 3 ]
console.log(copy) //[ 1, 2, 3 ]

let copy2 =original.slice()
console.log(copy2)//[ 1, 2, 3 ]

let deep_copy_original = original;
original.push(100)
console.log(original) //[ 1, 2, 3, 100 ]
console.log(deep_copy_original) //[ 1, 2, 3, 100 ]