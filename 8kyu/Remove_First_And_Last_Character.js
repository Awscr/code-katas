/*
https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0

It's pretty straightforward. Your goal is to create a function that removes the first and last characters of 
a string. You're given one parameter, the original string. You don't have to worry with strings with less than two 
characters.
*/

// Basic solution
function removeChar(str) {
  strArr = str.split('');
  strArr.pop();
  strArr.shift();
  return strArr.join('');
}

// Better solution
function removeChar(str) {
  return str.slice(1, -1);
}

// TESTS
console.log(removeChar('eloquent')); //'loquen');
console.log(removeChar('country')); //'ountr');
console.log(removeChar('person')); //'erso');
console.log(removeChar('place')); //'lac');
