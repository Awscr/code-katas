/*
https://www.codewars.com/kata/5168bb5dfe9a00b126000018

Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
*/

function solution(str) {
  return str.split('').reverse().join('');
}

// TESTS
console.log(solution('world')); //'dlrow'
console.log(solution('hello')); //'olleh'
console.log(solution('')); //''
console.log(solution('h')); //'h'
