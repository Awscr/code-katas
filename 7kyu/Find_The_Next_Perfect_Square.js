/*
https://www.codewars.com/kata/56269eb78ad2e4ced1000013

You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square, than -1 should be returned. You may assume the parameter is positive.

Examples:

findNextSquare(121) --> returns 144
findNextSquare(625) --> returns 676
findNextSquare(114) --> returns -1 since 114 is not a perfect
*/

function findNextSquare(num) {
  const isPerfectSquare = Math.sqrt(num) - Math.round(Math.sqrt(num)) === 0;

  if (isPerfectSquare) return (Math.sqrt(num) + 1) ** 2;

  return -1;
}

// TESTS
console.log(findNextSquare(121)); //144
console.log(findNextSquare(114)); //-1
