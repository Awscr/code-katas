/* https://www.codewars.com/kata/55a70521798b14d4750000a4/

Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

SQL: return results in a column named greeting

[Make sure you type the exact thing I wrote or the program may not execute properly]
*/

function greet(name) {
  return `Hello, ${name} how are you doing today?`;
}

// TESTS
console.log(greet("Oscar"));
console.log(greet("Ryan"));
console.log(greet("Mike"));
