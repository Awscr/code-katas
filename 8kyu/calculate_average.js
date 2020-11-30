/* https://www.codewars.com/kata/57a2013acf1fa5bfc4000921
Calculate average

Instructions:
- Write function avg which calculates average of numbers in given list. */

const findAverage = (arr) => {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  return total / arr.length;
};

// TESTS
console.log(findAverage([1, 2, 3, 4, 5])); //3
console.log(findAverage([5, 5, 5, 2, 20])); //7.4
console.log(findAverage([100, 3, 3])); //35.33
