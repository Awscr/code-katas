/*
https://www.codewars.com/kata/5656b6906de340bd1b0000ac

Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, 
containing distinct letters - each taken only once - coming from s1 or s2.

Examples:

a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"


*/

// My solution
function longest(s1, s2) {
  let letters = new Set();

  s1.split('').forEach((letter) => letters.add(letter));
  s2.split('').forEach((letter) => letters.add(letter));

  return Array.from(letters).sort().join('');
}

// Better/Cleaner Solution
const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join('');

// TESTS
console.log(longest('aretheyhere', 'yestheyarehere')); //"aehrsty"
console.log(longest('loopingisfunbutdangerous', 'lessdangerousthancoding')); //"abcdefghilnoprstu"
console.log(longest('inmanylanguages', 'theresapairoffunctions')); //"acefghilmnoprstuy"
