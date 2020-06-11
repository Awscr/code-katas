/*
https://www.codewars.com/kata/56b1f01c247c01db92000076

Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

doubleChar("String") ==> "SSttrriinngg"

doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"

doubleChar("1234!_ ") ==> "11223344!!__  "
*/

function doubleChar(str) {
  strArr = str.split('');
  return strArr.map((item) => `${item}${item}`).join('');
}

// TESTS
console.log(doubleChar('abcd')); //"aabbccdd"
console.log(doubleChar('Adidas')); //"AAddiiddaass"
console.log(doubleChar('1337')); //"11333377"
console.log(doubleChar('illuminati')); //"iilllluummiinnaattii"
console.log(doubleChar('123456')); //"112233445566"
console.log(doubleChar('%^&*(')); //"%%^^&&**(("
