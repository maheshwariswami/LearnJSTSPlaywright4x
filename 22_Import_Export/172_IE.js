import {BASE_URL, fetchData, fName} from './testUtil.js';
import {formatTestName} from './Utils.js';

console.log(BASE_URL); // Output: https://api.example.com/data
console.log(fetchData("test"));
console.log(fName); // Output: John Doe

console.log(formatTestName("Verify Login Success")); // Output: TCVERIFY LOGIN SUCCESS