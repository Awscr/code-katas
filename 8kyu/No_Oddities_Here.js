/*
https://www.codewars.com/kata/51fd6bc82bc150b28e0000ce

Write a small function that returns the values of an array that are not odd.
All values in the array will be integers. Return the good values in the order they are given.
*/

noOdds = (values) => {
  const arr = [];
  values.forEach((value) => value % 2 === 0 && arr.push(value));
  return arr;
};

// TESTS
console.log(noOdds([1, 2, 3, 4, 5, 6]));
