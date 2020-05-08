/*
https://www.codewars.com/kata/58f8a3a27a5c28d92e000144
*/

function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    const num = arr[i] + 1;
    const consecutive = arr[i + 1];
    if (num !== consecutive) {
      return consecutive;
    }
  }

  return null;
}

// TESTS
console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8])); // 6
