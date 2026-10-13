// What does this print? If it throws, pick the error.

// let token;
// console.log(token);
// console.log(typeof token);

// What does this print? If it throws, pick the error.

// console.log(typeof 42, typeof "42", typeof true, typeof [1, 2]);

// const env = "staging";
// const id = 7;
// console.log(`/api/${env}/users/${id + 1}`);

// What does this print? If it throws, pick the error.

// const name = "Ravi";
// console.log('Hello ${name}');

// Which of these is a valid JavaScript variable name?


// let var1 =$testData_2

/* let var2 =test-case

let var3 =2ndAttempt

let let */

// const browsers = ["chromium", "firefox"];
// for (const b in browsers) {
//   console.log(b);
// }

const codes = [200, 500, 201];
codes.forEach((code) => {
  if (code === 500) return;
  console.log(code);
});