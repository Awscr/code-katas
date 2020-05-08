/*
https://www.codewars.com/kata/56747fd5cb988479af000028

You are going to be given a word. Your job is to return the middle character of the word.
If the word's length is odd, return the middle character.
If the word's length is even, return the middle 2 characters.
*/

function getMiddle(s) {
  strLength = s.length;
  if (strLength % 2 === 0) {
    return s[s.length / 2 - 1] + s[s.length / 2];
  } else if (strLength % 2 === 1) {
    return s[Math.floor(strLength / 2)];
  }
}

// TESTS
console.log(getMiddle('test')); //"es"
console.log(getMiddle('testing')); //"t"
console.log(getMiddle('middle')); //"dd"
console.log(getMiddle('A')); //"A"
