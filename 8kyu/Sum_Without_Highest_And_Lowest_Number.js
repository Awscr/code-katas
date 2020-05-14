/*
https://www.codewars.com/kata/576b93db1129fcf2200001e6

Sum all the numbers of the array (in F# and Haskell you get a list) except the highest and the lowest element (the value, not the index!).
(The highest/lowest element is respectively only one element at each edge, even if there are more than one with the same value!)

Example:

{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6
*/

function sumArray(array) {
  let total = 0;

  array.forEach((num) => {
    if (num !== Math.min(...array) && num !== Math.max(...array)) total += num;
  });
  return total;
}

// TESTS
console.log(sumArray([6, 2, 1, 8, 10])); //16
