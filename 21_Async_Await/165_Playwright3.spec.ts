async function exampleFunction() {
    return "Hello, World!";
}

import test from "@playwright/test";

test('test hellow world', async({page}) => {
    let t =await page.goto('https://playwright.dev/');
    let c = await exampleFunction();
    console.log(c); // Output: "Hello, World!"
    console.log(t?.status()); //200
});