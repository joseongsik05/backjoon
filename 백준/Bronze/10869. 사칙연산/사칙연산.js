const fs = require("fs");
const inputDate = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map((val) => +val);
const [A, B] = inputDate;


console.log(A+B);
console.log(A-B);
console.log(A*B);
console.log(parseInt(A/B));
console.log(A%B);