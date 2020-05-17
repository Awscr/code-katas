/*
https://www.codewars.com/kata/59342039eb450e39970000a6

Given a number n, return the number of positive odd numbers below n, EASY!

oddCount(7) //=> 3, i.e [1, 3, 5]
oddCount(15) //=> 7, i.e [1, 3, 5, 7, 9, 11, 13]
Expect large Inputs!
*/

function oddCount(n) {
  let oddNumsBelow = 0;

  for (let i = 1; i < n; i++) {
    if (i % 2 === 0) oddNumsBelow++;
  }
  return oddNumsBelow;
}

// Best solution
const oddCount = (n) => Math.floor(n / 2);

// TESTS
console.log(oddCount(15)); //7
console.log(oddCount(15023)); //7511
