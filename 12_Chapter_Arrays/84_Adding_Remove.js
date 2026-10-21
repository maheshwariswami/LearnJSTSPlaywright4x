let arr=[1,2,3]
console.log(arr)

//append element to the end of array
arr.push(4);
console.log(arr)
arr.push(5,6)
console.log(arr)

//remove from end
arr.pop()
console.log(arr)

//Add to the Begininng
arr.unshift(0)
console.log(arr)

//Remove something from beginning
arr.shift();
console.log(arr);

arr.splice(2,1) // remove item at 2nd pos
console.log(arr)

arr.splice(2,0, 99) // just add one item 99 at 2nd pos
console.log(arr)

arr.splice(2,1, 98) // delete one item add 98
console.log(arr)

arr.splice(2,2,97) // delete two items add 97
console.log(arr)

arr.splice(1,2,90,80) // pos 1 replace 2 ele with 90 80
console.log(arr)
