/* https://www.codewars.com/kata/583710ccaa6717322c000105

Instructions:
- This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
*/

function simpleMultiplication(num) {
  return num % 2 === 0 ? num * 8 : num * 9;
}

// TESTS
console.log(simpleMultiplication(9)); //81
console.log(simpleMultiplication(8)); //64
console.log(simpleMultiplication(2)); //16
console.log(simpleMultiplication(3)); //27
