/*
https://www.codewars.com/kata/55908aad6620c066bc00002a

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

function XO(str) {
  str = str.toLowerCase();

  const count = {
    x: 0,
    o: 0,
  };

  for (let i = 0; i < str.length; i++) {
    let currentLetter = str[i];

    if (currentLetter === 'x') {
      count.x += 1;
    } else if (currentLetter === 'o') {
      count.o += 1;
    }
  }
  return count.x === count.o;
}

// TESTS
console.log(XO('xo')); //true
console.log(XO('xxOo')); //true
console.log(XO('xxxm')); //false
console.log(XO('Oo')); //false
console.log(XO('ooom')); //false
