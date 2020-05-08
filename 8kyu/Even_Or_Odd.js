/*
https://www.codewars.com/kata/53da3dbb4a5168369a0000fe

Instructions: Create a function (or write a script in Shell) that takes an integer as an
argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/

even_or_odd = (num) => (num % 2 == 0 ? 'Even' : 'Odd');

// TESTS
console.log(even_or_odd(2)); //'Even'
console.log(even_or_odd(0)); //'Even'
console.log(even_or_odd(7)); //'Odd'
console.log(even_or_odd(1)); //'Odd'
