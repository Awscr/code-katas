/*
https://www.codewars.com/kata/55ecd718f46fba02e5000029

Write a function taking two parameters and returning an int array of all elements between the input parameters 
and including them.
*/

function between(a, b) {
  arr = [];
  while (a <= b) {
    arr.push(a);
    a++;
  }
  return arr;
}

// TESTS
console.log(between(1, 4)); //[1, 2, 3, 4]));
console.log(between(-2, 2)); //[-2, -1, 0, 1, 2]
