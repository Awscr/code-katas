/*
https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d

Instructions: Complete the solution so that it returns true if the first argument(string)
passed in ends with the 2nd argument (also a string).
*/

solution = (str, ending) => str.endsWith(ending);

// TESTS
console.log(solution('abcde', 'cde')); //true
console.log(solution('abcde', 'abc')); //false
