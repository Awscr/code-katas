/*
https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1

SpeedCode #2 - Array Madness
Objective
Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

E.g.

arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3
Get your timer out. Are you ready? Ready, get set, GO!!!
*/

function arrayMadness(a, b) {
  let aSquaredSum = 0,
    bCubedSum = 0;

  a.forEach((num) => (aSquaredSum += num ** 2));
  b.forEach((num) => (bCubedSum += num ** 3));

  return aSquaredSum > bCubedSum;
}

// TESTS
console.log(arrayMadness([4, 5, 6], [1, 2, 3])); //true
console.log(arrayMadness([5, 6, 7], [4, 5, 6])); //false
console.log(arrayMadness([4, 5, 6], [3, 4, 5])); //false
console.log(arrayMadness([3, 4, 5], [2, 3, 4])); //false
console.log(arrayMadness([2, 3, 4], [1, 2, 3])); //false
console.log(arrayMadness([1, 2, 3], [0, 1, 2])); //true
