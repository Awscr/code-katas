/*
https://www.codewars.com/kata/5899642f6e1b25935d000161

You are given two sorted arrays that contain only integers. 
Your task is to find a way to merge them into a single one, sorted in ascending order. 
Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. 
If both arr1 and arr2 are empty, then just return an empty array.

Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. 
Remove duplicated in the returned result.
*/

// Attempted Solution - does not work due to arrays possibly being sorted backwards
/*
function mergeArrays(arr1, arr2) {
  let large = arr1.length + arr2.length,
    pointer1 = 0,
    pointer2 = 0,
    result = [];

  for (let i = 0; i < large; i++) {
    let arr1Val = arr1[pointer1] === undefined ? Infinity : arr1[pointer1];
    let arr2Val = arr2[pointer2] === undefined ? Infinity : arr2[pointer2];

    if (arr1Val < arr2Val) {
      result.push(arr1Val);
      pointer1++;
    } else {
      result.push(arr2Val);
      pointer2++;
    }
  }
  return result;
}
*/

// Best/Complex Solution
const mergeArrays = (array1, array2) =>
  [...new Set([...array1, ...array2])].sort((a, b) => a - b);

// TESTS
const arr1 = [1, 2, 3, 4, 5],
  arr2 = [6, 7, 8, 9, 10];
console.log(mergeArrays(arr1, arr2)); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const arr3 = [1, 3, 5, 7, 9],
  arr4 = [10, 8, 6, 4, 2];
console.log(mergeArrays(arr3, arr4)); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const arr5 = [1, 3, 5, 7, 9, 11, 12],
  arr6 = [1, 2, 3, 4, 5, 10, 12];
console.log(mergeArrays(arr5, arr6)); //[1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
