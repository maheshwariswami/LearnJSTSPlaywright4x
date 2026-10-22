let browsers = ["chrome","firefox","safari","opera","edge"]
console.log(browsers)
console.log(browsers.pop()) // removed last
console.log(browsers)

let removed = browsers.shift() // removed first
console.log(removed)

console.log(browsers)

for(let cnt=0 ; cnt <browsers.length;cnt++)
{
    if(browsers[cnt]=="opera")
    {
        console.log("Opera doesnt support Automation now")
    }
}

if("opera"=="Opera")
    console.log("OPera case insenstive match")
else if("opera"=="opera")
    console.log("opera is case sensitive")
else if("opera" === "opera")
    console.log("opera is case sensitive")