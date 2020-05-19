/*
https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

const findShort = (s) => {
  let sLengthArray = s.split(' ').map((word) => word.length);

  return Math.min(...sLengthArray);
};

// TESTS
console.log(findShort('bitcoin take over the world maybe who knows perhaps')); //3
console.log(
  findShort(
    'turns out random test cases are easier than writing out basic ones'
  )
); //3
