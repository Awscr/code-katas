/*
https://www.codewars.com/kata/52f3149496de55aded000410

Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of 
each of the number's decimal digits.
*/

function sumDigits(number) {
  let total = 0;
  let absNumber = ('' + Math.abs(number)).split('');
  for (let i = 0; i < absNumber.length; i++) {
    total += parseInt(absNumber[i]);
  }
  return total;
}

// TESTS
console.log(sumDigits(10)); //1
console.log(sumDigits(99)); //18
console.log(sumDigits(-32)); //5
