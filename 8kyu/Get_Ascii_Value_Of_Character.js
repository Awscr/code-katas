/*
https://www.codewars.com/kata/55acfc59c3c23d230f00006d

Get ASCII value of a character.
*/

function getASCII(c) {
  return c.charCodeAt();
}

// Test
console.log(getASCII('A')); //65
console.log(getASCII(' ')); //32
console.log(getASCII('!')); //33
