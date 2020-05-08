/*
https://www.codewars.com/kata/57470efebf81fea166001627

Write a function that checks if all the letters in the second string are present in the first one at 
least once, regardless of how many times they appear:

["ab", "aaa"]    =>  true
["trances", "nectar"]    =>  true
["compadres", "DRAPES"]  =>  true
["parses", "parsecs"]    =>  false

Function should not be case sensitive, as indicated in example #2. Note: both strings are presented as a
single argument in the form of an array.
*/

function letterCheck(arr) {
  const stringLetters1 = arr[0].split('');
  const stringLetters2 = arr[1].split('');

  return stringLetters2.every((letter) => stringLetters1.includes(letter));
}

// TESTS
console.log(letterCheck(['trances', 'nectar']));
