let nums=[10,1,21,2]
nums.sort((a,b)=> (a-b))
console.log(nums) //[ 1, 2, 10, 21 ]

nums.sort((a,b)=> (b-a))
console.log(nums) //[ 21, 10, 2, 1 ]

let names=["Mahi","Sunny","Abhi","Chikoo","Babali"]
names.sort((a,b)=> a.localeCompare(b))
console.log(names) //[ 'Abhi', 'Babali', 'Chikoo', 'Mahi', 'Sunny' ]
