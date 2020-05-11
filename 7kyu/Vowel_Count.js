/*
https://www.codewars.com/kata/54ff3102c1bad923760001f3

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, and u as vowels for this Kata.

The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let vowelCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) !== -1) vowelCount += 1;
  }

  return vowelCount;
}

// TESTS
console.log(getCount('abracadabra')); //5
