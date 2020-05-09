/*
https://www.codewars.com/kata/55685cd7ad70877c23000102

In this simple assignment you are given a number and have to make it negative. But maybe the number is already 
negative?
*/

function makeNegative(num) {
  return num < 0 ? num : -num;
}

// TESTS
console.log(makeNegative(-4)); //-4
console.log(makeNegative(42)); //-42
console.log(makeNegative(3)); //-3
