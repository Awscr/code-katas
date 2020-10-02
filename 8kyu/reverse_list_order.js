/* https://www.codewars.com/kata/53da6d8d112bd1a0dc00008b 

Instructions:
In this kata you will create a function that takes in a list and returns a list with the reverse order.

Examples
reverseList([1,2,3,4]) == [4,3,2,1]
reverseList([3,1,5,4]) == [4,5,1,3] */

function reverseList(list) {
  return list.reverse();
}

// TESTS
console.log(reverseList([1, 2, 3])); //[3, 2, 1]
console.log(reverseList([2, 3, 4])); // [4, 3, 2]
