let tests= ["login","checkout","search"]
for(let i=0 ;i<tests.length;i++)
    console.log(tests[i])

for(let test of tests)
{
    console.log(test)
}

for(let test in tests)
{
    console.log(test+" "+ tests[test])
}

tests.forEach((test, index)=> {
    console.log(`${index} : ${test}`)
});