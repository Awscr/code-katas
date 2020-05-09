/*
https://www.codewars.com/kata/57a0e5c372292dd76d000d7e

Write a function called repeatString which repeats the given String src exactly count times.
*/

// Solution using an array and loop
function repeatStr(n, s) {
  strArr = [];
  for (let i = 0; i < n; i++) {
    strArr.push(s);
  }
  return strArr.join('');
}

// Simple/Better solution
function repeatStr(n, s) {
  return s.repeat(n);
}

console.log(repeatStr(6, 'I')); // "IIIIII"
console.log(repeatStr(5, 'Hello')); // "HelloHelloHelloHelloHello"
