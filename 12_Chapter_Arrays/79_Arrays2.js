let fruits =[]
console.log(typeof fruits)

let browsers = ["chrome","firefox","webkit"]
console.log(browsers.at(0))
console.log(browsers.at(1))
console.log(browsers.at(2))
console.log(browsers.at(3))

// object
// chrome
// firefox
// webkit
// undefined

//same output as above
console.log(browsers[0])
console.log(browsers[1])
console.log(browsers[2])
console.log(browsers[3])

//accessing negative index using at only
//output
// firefox
// chrome
console.log(browsers.at(-2))
console.log(browsers.at(-3))