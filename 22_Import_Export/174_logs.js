import * as Utils from './Utils.js';
import * as TestUtil from './testUtil.js';
import logMessage,* as Logs from './logs/logs.js';

console.log(Utils.BASE_URL);
console.log(TestUtil.BASE_URL);
console.log(Utils.formatTestName("login"));
console.log(TestUtil.fetchData("test"));
logMessage("This is a log message");

Logs.logBetter("This is a better log message");
Logs.logBetter2("This is another better log message");
