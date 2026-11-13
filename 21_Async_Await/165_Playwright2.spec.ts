import test from "@playwright/test";

test('example test', async () => {
    async function exampleFunction() {
        return "abc";
    }

    const result = await exampleFunction();
    console.log(result); // Output: "abc"
})  