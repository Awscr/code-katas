/*
https://www.codewars.com/kata/5966e33c4e686b508700002d

Create a function that takes 2 positive integers in form of a string as an input, and outputs the sum (also as a string):

If either input is an empty string, consider it as zero.
*/

function sumStr(a, b) {
  return String(Number(a) + Number(b));
}

// TESTS
console.log(sumStr('0', '0')); //"9"
console.log(sumStr('34', '5')); //"39"
console.log(sumStr('', ''));
