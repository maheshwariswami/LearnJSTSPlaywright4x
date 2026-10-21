let browsers= ["chrome","firefox","safari"]
let score = new Array(3)
score[0] =80;
score[1]=90;
score[2]=45
score[3] =55 //allowed

for(let i=0 ; i<score.length;i++)
    console.log(score[i])

let grades = new Array('A','B','C','D','E')

for(let i=0 ; i<grades.length;i++)
    console.log(grades[i])

//String to array
let chars = Array.from("Hello World")
for(let i=0 ; i<chars.length;i++)
    console.log(chars[i])