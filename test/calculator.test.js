const { add, subtract, multiply } = require("../src/calculator");

console.log("Testing calculator...");

console.log("2 + 3 =", add(2, 3));
console.log("5 - 2 =", subtract(5, 2));
console.log("4 * 3 =", multiply(4, 3));