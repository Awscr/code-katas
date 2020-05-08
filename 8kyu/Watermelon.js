/* 
https://www.codewars.com/kata/55192f4ecd82ff826900089e

Given an integral number of watermelons w (1 ≤ w ≤ 100), check whether Pete and 
Billy can divide the melons so that each of them gets an even amount.
*/

function divide(weight) {
  if (weight >= 1 && weight <= 100) {
    if (weight % 2 === 0 && weight !== 2) {
      return true;
    } else {
      return false;
    }
  }
}

// TESTS
console.log(divide(4)); // true
console.log(divide(2)); // false
console.log(divide(5)); // false
console.log(divide(32)); // true
