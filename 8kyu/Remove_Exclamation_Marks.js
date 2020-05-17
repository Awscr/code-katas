/*
https://www.codewars.com/kata/57a0885cbb9944e24c00008e

Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
*/

function removeExclamationMarks(s) {
  let sArray = s.split('').filter((letter) => letter !== '!');
  return sArray.join('');
}

// Better solution
function removeExclamationMarks(s) {
  return s.replace(/!/gi, '');
}

// TESTS
console.log(removeExclamationMarks('Hello World!')); //"Hello World"
