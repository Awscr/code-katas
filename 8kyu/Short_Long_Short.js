/*
https://www.codewars.com/kata/50654ddff44f800200000007

Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( length 0 ).

For example:

solution("1", "22") // returns "1221"
solution("22", "1") // returns "1221"
*/

function solution(a, b) {
  return a.length > b.length ? b + a + b : a + b + a;
}

// TESTS
console.log(solution('45', '1')); //'1451'
console.log(solution('13', '200')); //'1320013'
console.log(solution('Soon', 'Me')); //'MeSoonMe'
console.log(solution('U', 'False')); //'UFalseU'
