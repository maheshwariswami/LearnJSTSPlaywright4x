let day = 1;
let actual;
switch (day) {
  case 1:
    actual = "Monday";

    break;
  case 2:
    actual = "Tuesday";
    break;
  case 3:
    actual = "Wednesday";
    break;
  case 4:
    actual = "Thursday";
    break;
  case 5:
    actual = "Friday";
    break;
  case 6:
    actual = "Saturday";
    break;
  case 1:
    actual = "Sunday";
    break;
  default:
    console.log("Invalid No");
}
console.log("Day entered is " + actual);
